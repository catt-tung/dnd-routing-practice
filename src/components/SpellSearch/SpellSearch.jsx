import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";
import { spellSearch } from "../../services/api-calls";


const SpellSearch = () => {
  const [spells, setSpells] = useState([])

  const handleSpellSearch = formData => {
    spellSearch(formData)
    .then(spellResults => {
      setSpells(spellResults.results)
    })
  }

  return (
    <>
      <h3>Search for Spells</h3>
      <SearchForm handleSpellSearch={handleSpellSearch} />
    </>
  );
}

export default SpellSearch;