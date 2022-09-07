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

  return (
  <AuthContext.Provider 
    value={{ 
      isLoggedIn: isLoggedIn,
      setIsLoggedIn: setIsLoggedIn,
    }}
  >
    {props.children}
  </AuthContext.Provider>
  )
}

export default AuthContext