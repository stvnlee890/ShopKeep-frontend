import './nav.css'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

const NavBar = () => {
const [isLoggedIn, setIsLoggedIn] = useState()

const localStorageLogin = window.localStorage.getItem('isLoggedIn')
const username = window.localStorage.getItem('user')


console.log(isLoggedIn)

  if(localStorageLogin === 'true') {
    return (
      <div className='nav-container'>
        <div className='logo'>
          <NavLink className='nav' id='shopkeep' to='/'><p>ShopKeep</p></NavLink>
        </div>
        <div className='user-feature'>
          <NavLink className='nav' id='profile' to={`${username}/adminpage`}><p>Profile</p></NavLink>
          <NavLink className='nav' id='signout' to='/signout'><p>Sign Out</p></NavLink>
      </div>
      </div>
    )
  }  
  else if(localStorageLogin === null){
    return  (
      <div className='nav-container' > 
         <div className='logo'>
          <NavLink className='nav' id='shopkeep' to='/'><p>ShopKeep</p></NavLink>
        </div>
        <div className='user-feature'>
         <NavLink className='nav' id='signup' to='/signup'><p>Sign Up</p></     NavLink>
          <NavLink className='nav' id='login' to='/login'><p>Login</p></NavLink>
        </div>
      </div>
    )
  }
   
}

export default NavBar