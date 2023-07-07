import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = () => {
  return (
    <header>
      <Link style={{textDecoration:'none'}} to="/">
        <h1 style={{marginLeft:'60px'}}>El Yerbatero</h1>
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink style={{textDecoration:'none'}} to="/categoria/2"> Imperiales </NavLink>
          </li>

          <li>
            <NavLink style={{textDecoration:'none'}} to="/categoria/3"> Camioneros </NavLink>
          </li>

          <li>
            <NavLink style={{textDecoration:'none'}} to="/categoria/4"> Ceramica </NavLink>
          </li>
          <li>
            <NavLink style={{textDecoration:'none'}} to="/categoria/5"> Termos </NavLink>
          </li>

        </ul>
      </nav>

      <CartWidget />
    </header>
  )
}

export default NavBar