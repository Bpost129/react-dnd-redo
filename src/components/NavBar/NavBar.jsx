import { Link } from 'react-router-dom'
import reactLogo from '../../assets/react.svg'

const NavBar = () => {
  return (
    <header>
      <img className="logo" src={ reactLogo } alt="The React logo" />
      <nav>
        <Link to="/shop">Shop</Link>
        <Link to="/monsters">Scary Monsters</Link>
        <Link to="/spells">Search for Spells</Link>
      </nav>
    </header>
  )
}

export default NavBar