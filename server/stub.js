// Stub run: replays fake events so Arjun and Soham can build against the contract.
const sleep = (ms) => new Promise((r) => setTimeout(r, ms))

const STEPS = [
  ['brief', 'Reading your brief'],
  ['research', 'Researching the occasion and current trends'],
  ['jacket', 'Searching the catalog: jackets'],
  ['shirt', 'Searching the catalog: shirts'],
  ['trousers', 'Searching the catalog: trousers'],
  ['shoes', 'Searching the catalog: shoes'],
  ['build', 'Building three looks from the catalog'],
  ['check', 'Checking budget, sizes and formality'],
  ['save', 'Publishing your lookbook'],
]

export async function* stubRun(req, { fast = false } = {}) {
  const wait = (ms) => sleep(fast ? 5 : ms)
  for (const [id, label] of STEPS) {
    yield { type: 'step', id, label, status: 'start' }
    await wait(700)
    yield { type: 'step', id, label, status: 'end' }
  }
  yield {
    type: 'result',
    looks: [
      {
        outfit_name: 'Amalfi Wedding Guest',
        items: [
          { product_id: 'MW-0001', slot: 'Sport Coat', why: 'Light enough for an outdoor ceremony.' },
          { closet_item: 'Navy chinos', slot: 'Chinos', why: 'Already owned, so the budget goes further.' },
        ],
        total_usd: 138,
      },
    ],
    spoken_summary: `Here is a look for ${req.occasion}. It stays under $${req.budget_usd}.`,
    lookbook_artifact: null,
    warnings: ['stub data'],
  }
}
