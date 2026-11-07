// Public catalog MCP server for the ZooWork stylist. Owner: Arjun.
// Streamable HTTP, stateless: every POST /mcp carries JSON-RPC and gets a JSON reply (no sessions, no SSE stream).
// Read-only demo data with no auth, on purpose: the agent connects with permission 'always_allow'.
// Tools: search_products, get_product over data/catalog/agent-catalog.json (in-stock men's and women's products).
import { readFileSync } from 'node:fs'

const CATALOG = JSON.parse(readFileSync(new URL('../data/catalog/agent-catalog.json', import.meta.url), 'utf8'))
const FULL = new Map(JSON.parse(readFileSync(new URL('../data/catalog/products.json', import.meta.url), 'utf8')).map((p) => [p.id, p]))
const BY_ID = new Map(CATALOG.map((p) => [p.id, p]))
const PHOTOS = 'https://mhalpert.github.io/mens-fashion-barn/data/catalog/'

const SUPPORTED_VERSIONS = ['2025-06-18', '2025-03-26', '2024-11-05']
const SERVER_INFO = { name: 'mens-fashion-barn-catalog', title: 'Fashion Barn catalog', version: '1.1.0' }
const uniq = (xs) => [...new Set(xs)].sort()
const CATEGORIES_BY = { men: uniq(CATALOG.filter((p) => p.gender !== 'women').map((p) => p.category)), women: uniq(CATALOG.filter((p) => p.gender === 'women').map((p) => p.category)) }
const STYLES = uniq(CATALOG.map((p) => p.style))
const OCCASIONS = uniq(CATALOG.flatMap((p) => p.occasions))

const TOOLS = [
  {
    name: 'search_products',
    title: 'Search the catalog',
    description:
      "Search Fashion Barn's in-stock catalog (men's and women's departments). All filters are optional and combine with AND. " +
      "Always pass gender ('men' or 'women') once you know the shopper's department, so looks never mix departments. " +
      "query matches words in the product title, brand, subcategory and colors, so use garment words ('linen suit', 'loafer'), not occasions or places. " +
      `Men's categories: ${CATEGORIES_BY.men.join(', ')}. Women's categories: ${CATEGORIES_BY.women.join(', ')}. style is one of: ${STYLES.join(', ')}. occasion is one of: ${OCCASIONS.join(', ')}. ` +
      "size returns only items in stock in that size: jacket '40R', dress shirt '15.5 / 32-33', waist '32', shoe '10'. Prices are USD.",
    inputSchema: {
      type: 'object',
      properties: {
        gender: { type: 'string', enum: ['men', 'women'], description: "The shopper's department" },
        query: { type: 'string', description: "Garment words, e.g. 'linen suit'" },
        category: { type: 'string', description: 'Exact category name from the list above' },
        style: { type: 'string', enum: STYLES },
        occasion: { type: 'string', enum: OCCASIONS },
        color: { type: 'string', description: "Color word, e.g. 'navy', 'tan'" },
        max_price: { type: 'number', description: 'Highest price in USD' },
        size: { type: 'string', description: "Shopper's size for this garment" },
        on_sale: { type: 'boolean' },
        limit: { type: 'integer', minimum: 1, maximum: 25, description: 'Default 10' },
      },
      additionalProperties: false,
    },
  },
  {
    name: 'get_product',
    title: 'Get one product',
    description: 'Full details for one product by id (e.g. MW-0370 or WW-0001): gender, description, colors, in-stock sizes, price, sale flag and photo URL.',
    inputSchema: { type: 'object', properties: { id: { type: 'string', description: 'Product id, e.g. MW-0370' } }, required: ['id'], additionalProperties: false },
  },
]

// Sizes differ by category; a bare waist like "32" also matches "32x30" and "32W | 33-35L" (same rule as the storefront).
const norm = (s) => String(s).toLowerCase().replace(/\s+/g, '')
function inSize(p, want) {
  if (p.in_stock_sizes.length === 1 && p.in_stock_sizes[0] === 'One Size') return true
  const w = norm(want), waist = /^\d+$/.test(w) ? new RegExp(`^${w}[wx]`) : null
  return p.in_stock_sizes.some((s) => norm(s) === w || (waist && waist.test(norm(s))))
}
const lower = (v) => String(v).trim().toLowerCase()

function search(a = {}) {
  const words = a.query ? lower(a.query).split(/\s+/).filter(Boolean) : []
  const limit = Math.min(Math.max(parseInt(a.limit ?? 10, 10) || 10, 1), 25)
  const hits = CATALOG.filter((p) => {
    const text = lower(`${p.title} ${p.brand} ${p.subcategory} ${p.colors.join(' ')}`)
    return words.every((w) => text.includes(w))
      && (!a.gender || p.gender === lower(a.gender))
      && (!a.category || lower(p.category) === lower(a.category) || lower(p.subcategory) === lower(a.category))
      && (!a.style || lower(p.style) === lower(a.style))
      && (!a.occasion || p.occasions.includes(lower(a.occasion)))
      && (!a.color || lower(`${p.colors.join(' ')} ${p.title}`).includes(lower(a.color)))
      && (!(Number(a.max_price) > 0) || p.price <= Number(a.max_price))
      && (!a.size || inSize(p, a.size))
      && (a.on_sale === undefined || p.on_sale === Boolean(a.on_sale))
  })
  return { count: hits.length, results: hits.slice(0, limit) }
}

function getProduct({ id } = {}) {
  const p = BY_ID.get(String(id ?? '').trim().toUpperCase())
  if (!p) return null
  const f = FULL.get(p.id)
  // Mike's site serves photos as .webp now; the catalog still lists .png/.jpg.
  return { ...p, description: f?.description ?? '', details: (f?.details ?? []).slice(0, 8), photo: f?.images?.[0] ? PHOTOS + f.images[0].replace(/\.(png|jpe?g)$/i, '.webp') : null }
}

const text = (obj) => ({ content: [{ type: 'text', text: JSON.stringify(obj) }] })
const fail = (msg) => ({ content: [{ type: 'text', text: msg }], isError: true })

function callTool(name, args) {
  if (name === 'search_products') return text(search(args))
  if (name === 'get_product') { const p = getProduct(args); return p ? text(p) : fail(`No in-stock product with id ${args?.id}`) }
  return null
}

// One JSON-RPC message in, one reply out (or null for notifications).
function handle(msg) {
  const isRequest = msg && typeof msg === 'object' && msg.jsonrpc === '2.0' && typeof msg.method === 'string' && 'id' in msg
  if (!isRequest) return null // notifications (e.g. notifications/initialized) and stray responses need no reply
  const ok = (result) => ({ jsonrpc: '2.0', id: msg.id, result })
  const err = (code, message) => ({ jsonrpc: '2.0', id: msg.id, error: { code, message } })
  switch (msg.method) {
    case 'initialize': {
      const asked = msg.params?.protocolVersion
      return ok({
        protocolVersion: SUPPORTED_VERSIONS.includes(asked) ? asked : SUPPORTED_VERSIONS[0],
        capabilities: { tools: { listChanged: false } },
        serverInfo: SERVER_INFO,
        instructions: "Read-only catalog for Fashion Barn (men's and women's). Use search_products with the shopper's gender to find pieces by slot, then get_product for details. Only in-stock products are listed.",
      })
    }
    case 'ping': return ok({})
    case 'tools/list': return ok({ tools: TOOLS })
    case 'tools/call': {
      const r = callTool(msg.params?.name, msg.params?.arguments ?? {})
      return r ? ok(r) : err(-32602, `Unknown tool: ${msg.params?.name}`)
    }
    default: return err(-32601, `Method not found: ${msg.method}`)
  }
}

export function mountMcp(app) {
  app.post('/mcp', (req, res) => {
    const body = req.body
    if (body === undefined || body === null || typeof body !== 'object') {
      return res.status(400).json({ jsonrpc: '2.0', id: null, error: { code: -32700, message: 'Parse error: send a JSON-RPC body' } })
    }
    const replies = (Array.isArray(body) ? body : [body]).map(handle).filter(Boolean)
    if (!replies.length) return res.status(202).end() // only notifications or responses
    res.json(Array.isArray(body) ? replies : replies[0])
  })
  // Stateless server: no standalone SSE stream and no sessions to delete.
  app.get('/mcp', (_req, res) => res.status(405).set('Allow', 'POST').json({ error: 'Use POST for MCP requests' }))
  app.delete('/mcp', (_req, res) => res.status(405).set('Allow', 'POST').end())
}
