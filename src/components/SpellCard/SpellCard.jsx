import { Link } from 'react-router-dom'

const SpellCard = (props) => {
  return (
    <>
      <Link className='link-style' to={`/spell/${props.spell.index}`}>
        {props.spell.name}
      </Link>
      <br/>
    </>
  );
}

export default SpellCard;