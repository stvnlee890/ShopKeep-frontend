import { NavLink } from 'react-router-dom'

const NavBar = () => {

  return (
      <div>
        <NavLink to='/'><h1>ShopKeep</h1></NavLink>
        <NavLink to='/signup'>Sign Up</NavLink>
        <NavLink to='/login'>Login</NavLink>
      </div>
  )
}

export default NavBar