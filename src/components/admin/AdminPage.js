import axios from 'axios'
import { Link, Outlet, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

const AdminPage = () => {
  const { username } = useParams()
  const[user, setUser] = useState()

  useEffect(() => {
    axios.get(`http://localhost:8080/user/${username}`)
      .then((res) => setUser(res.data))
  },[])

  if(!user){
    return (
      <p>loading</p>
    )
  }
  return (
    <>
      <div>
        <h1>{user.firstName}</h1>
        <p>{user.email}</p>
      </div>
      <nav>
        <Link to='setstore'>Start Selling</Link>
        <Link to={`view-admin-store`}>See Store Front</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default AdminPage