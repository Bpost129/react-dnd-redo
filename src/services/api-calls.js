const baseUrl = 'https://sei-dnd-api.herokuapp.com'

export async function getMonsterList() {
  const res = await fetch(`${baseUrl}/api/monsters`)
  return res.json()
}

export async function getMonster(monsterId) {
  const res = await fetch(`${baseUrl}/api/monsters/${monsterId}`)
  return res.json()
}

export async function getSpells() {
  const res = await fetch(`${baseUrl}/api/spells`)
  return res.json()
}

export async function getSpellDetails(spellId) {
  const res = await fetch(`${baseUrl}/api/spells/${spellId}`)
  return res.json()
}