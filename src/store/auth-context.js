import React, { useState, useEffect } from 'react';

const AuthContext = React.createContext({
  isLoggedIn: false,
})

export const AuthContextProvider = (props) => {

  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const userInfo = localStorage.getItem('isLoggedIn');
    if (userInfo === 'true') {
      setIsLoggedIn(true);
    }else if (userInfo === null) {
      setIsLoggedIn(false)
    }
  }, [])

  // const logOutHandler = () => {
  //   window.localStorage.removeItem('isLoggedIn')
  //   setIsLoggedIn(false);
  // }

  const logInHandler = () => {
    window.localStorage.setItem('isLoggedIn', true)
  }

  return (
  <AuthContext.Provider 
    value={{ 
      isLoggedIn: isLoggedIn,
      setIsLoggedIn: setIsLoggedIn,
      // logOut: logOutHandler,
      logIn: logInHandler,
    }}
  >
    {props.children}
  </AuthContext.Provider>
  )
}

export default AuthContext