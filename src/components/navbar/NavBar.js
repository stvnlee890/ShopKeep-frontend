import './nav.css'
import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

const NavBar = ({ isLoggedIn, setIsLoggedIn }) => {

const localStorageLogin = window.localStorage.getItem('isLoggedIn')
const username = window.localStorage.getItem('user')
const loginStatus = JSON.parse(localStorageLogin)

useEffect(() => {
  if(loginStatus){
    setIsLoggedIn(true)
  }else {
    setIsLoggedIn(false)
  }
},[localStorageLogin])

const handleSignout = () => {
  setIsLoggedIn(false)
}

console.log(isLoggedIn)

// return (
//   <div className='nav-container'>
//     {!isLoggedIn && <div className='logo'></div>}
//   </div>
// )

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