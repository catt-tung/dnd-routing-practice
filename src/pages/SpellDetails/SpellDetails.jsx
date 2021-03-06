import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getSpellDetails } from '../../services/api-calls';
import { Link } from 'react-router-dom'


const SpellDetails = (props) => {
  const [spellDetails, setSpellDetails] = useState({})
  const{ spellName } = useParams()
  useEffect(() => {
    getSpellDetails(spellName)
    .then(spellData => setSpellDetails(spellData))
  }, [])

  return (
    <>
      <h3>Spell Details!</h3>
      {spellDetails.name ?
        <>
          <h1>{spellDetails.name}</h1>
          <p>{spellDetails.desc[0]}</p>
          <h2>Spell Player Classes</h2>
          {spellDetails.classes.length ?
          <>
            {spellDetails.classes.map(playerClass => 
              <div key={playerClass.index}>
                <p>{playerClass.name}</p>
              </div>
              )}
            </>
            :
            <p>No player classes may use this spell</p>
          }
        </>
        :
        <>
          <p>Loading spell details...</p>
        </>
      }
      <Link className='link-style' to="/">Return to Search</Link>
    </>
  );
}

export default SpellDetails;