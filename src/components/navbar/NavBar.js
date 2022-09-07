import './nav.css'
import { NavLink } from 'react-router-dom'

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {
  const username = window.localStorage.getItem('user')

  const handleSignout = () => {
    setIsLoggedIn(false)
  }

    if(isLoggedIn) {
      return (
        <div className='nav-container'>
          <div className='logo'>
            <NavLink className='nav' id='shopkeep' to='/'><p>ShopKeep</p></NavLink>
          </div>
          <div className='user-feature'>
            <NavLink className='nav' id='profile' to={`${username}/adminpage`}><p>Profile</p></NavLink>
            <NavLink onClick={handleSignout} className='nav' id='signout' to='/signout'><p>Signout</p></NavLink>
        </div>
        </div>
      )
    }  
    else{
      return (
        <div className='nav-container'> 
          <div className='logo'>
            <NavLink className='nav' id='shopkeep' to='/'><p>ShopKeep</p></NavLink>
          </div>
          <div className='user-feature'>
            <NavLink className='nav' id='signup' to='/signup'><p>Sign Up</p></NavLink>
            <NavLink className='nav' id='login' to='/login'><p>Login</p></NavLink>
          </div>
        </div>
      )
    }
}

export default NavBar