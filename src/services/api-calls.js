const baseUrl = "https://www.dnd5eapi.co/api/"

export function spellSearch(formData) {
  return fetch(`${baseUrl}spells/?name=${formData.query}`)
  .then(res => res.json())
}

export function getSpellDetails(spellName) {
  return fetch(`${baseUrl}spells/${spellName}`)
  .then(res => res.json())
}