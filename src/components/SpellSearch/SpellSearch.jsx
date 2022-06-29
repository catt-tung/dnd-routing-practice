import { useState } from "react";
import SearchForm from "../SearchForm/SearchForm";


const SpellSearch = () => {
  const [spells, setSpells] = useState([])
  return (
    <>
      <h3>Search for Spells</h3>
      <SearchForm />
    </>
  );
}

export default SpellSearch;