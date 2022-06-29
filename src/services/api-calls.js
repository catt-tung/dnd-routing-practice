const baseUrl = "https://www.dnd5eapi.co/api/"

export function spellSearch(formData) {
  return fetch(`${baseUrl}spells/?name=${formData.query}`)
  .then(res => res.json())
}