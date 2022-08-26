import { NavLink } from 'react-router-dom'
import { useEffect, useState } from 'react'

const NavBar = () => {
const [isLoggedIn, setIsLoggedIn] = useState()

const localStorageLogin = window.localStorage.getItem('isLoggedIn')
const username = window.localStorage.getItem('user')


console.log(isLoggedIn)

  if(localStorageLogin === 'true') {
    return (
      <div>
        <NavLink id='signout' to='/signout'>Signout</NavLink>
        <NavLink to={`${username}/adminpage`}>Profile</NavLink>
        <NavLink to='/'><h1>ShopKeep</h1></NavLink>
      </div>
    )
  }  
  else if(localStorageLogin === null){
    return  (
      <div> 
        <NavLink to='/signup'>Sign Up</NavLink>
        <NavLink to='/login'>Login</NavLink>
        <NavLink to='/'><h1>ShopKeep</h1></NavLink>
      </div>
    )
  }
   
}

export default NavBar