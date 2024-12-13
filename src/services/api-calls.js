const baseUrl = 'https://sei-dnd-api.herokuapp.com'

export async function getMonsterList() {
  const res = await fetch(`${baseUrl}/api/monsters`)
  return res.json()
}

export async function getMonster(monsterId) {
  const res = await fetch(`${baseUrl}/api/monsters/${monsterId}`)
  return res.json()
}