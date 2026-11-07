// Department resolution. Owner: Jing.
// The live call beats a default: if the notes or occasion name one department ("women's casual
// resort wear"), that wins over the request's gender, which can be a stale default from the call
// context. If both departments are named, or neither, the request's gender stands.
const WOMEN = /\b(wom[ae]n(?:['’]?s)?|ladies|lady|female|girls?|feminine)\b/i
const MEN = /\b(m[ae]n(?:['’]?s)?|gentlem[ae]n|guys?|male|masculine|boys?)\b/i // \b keeps "women" from matching "men"

export function resolveGender(req) {
  const text = `${req.notes ?? ''} ${req.occasion ?? ''}`
  const w = WOMEN.test(text)
  const m = MEN.test(text)
  if (w && !m) return 'women'
  if (m && !w) return 'men'
  return req.gender
}

// A copy of the request with the department resolved.
export function withDepartment(req) {
  const gender = resolveGender(req)
  if (gender === req.gender) return req
  console.log(`department for ${req.conversation_id}: request said ${req.gender ?? 'nothing'}, call details say ${gender}`)
  return { ...req, gender }
}
