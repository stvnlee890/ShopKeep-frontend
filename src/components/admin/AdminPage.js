import { Link, Outlet, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import axios from 'axios'

const AdminPage = () => {
  const [sellerstore, setSellerStore] = useState()
  // const { username } = useParams()

  // GET USER ID AND QUERY THE DB FOR STORE FRONTS THAT MATCH THE ID WITH THE STORE FRONT

  // useEffect(() => {
  //   axios.get(`http://localhost:8080/user/${username}`)
  //     .then((res) => setSellerStore(res.data._id))
  // },[])


  // console.log(sellerstore)
  return (
    <>
      <div>
        <h1>AdminPage</h1>
      </div>
      <nav>
        <Link to='setstore'>Set New Shop</Link>
        <Link to={`view-admin-store`}>See Store Front</Link>
      </nav>
      <Outlet />
    </>
  )
}

export default AdminPage