import { Link } from 'react-router-dom'

const SpellCard = (props) => {
  return (
    <div className='link-container'>
      <Link to={`/spells/${props.spell._id}`}>
        {props.spell.name}
      </Link>
    </div>
  )
}

export default SpellCard