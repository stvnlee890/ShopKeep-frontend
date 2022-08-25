const Signout = () => {
  window.localStorage.removeItem('token')
  window.localStorage.removeItem('user')
  window.localStorage.removeItem('isLoggedIn')
  
  return (
  <div>
    <h1>Sign Out</h1>
  </div>
  )
}

export default Signout