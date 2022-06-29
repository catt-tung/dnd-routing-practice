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
      {spells.length ?
      <>
        {spells.map(spell =>
          <div key={spell.index}>
            {spell.name}
          </div>
          )}
      </>
      :
      <h4>Search for a spell!</h4>
      }

    </>
  );
}

export default SpellSearch;