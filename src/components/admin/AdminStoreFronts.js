import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ViewAdminStore from './ViewAdminStore'

const AdminStoreFronts = () => {
  const [storeFront, setStoreFront] = useState()
  const { username } = useParams()
  

  // need the store id
  // const getStoreId = async() => {
  //   const fetch = await axios.get(`http://localhost:8080/store-front/${id}`)
  //   const res = setStoreFront(fetch.data)
  //   return res
  // }
  useEffect(() => {
    // axios.get(`http://localhost:8080/images/6306a139c3c0830cd1da2113`)
    //   .then((res) => console.log(res.data))
      axios.get(`http://localhost:8080/store-front/${username}`)
      .then((res) => setStoreFront(res.data))
  }, [])


  if(!storeFront){
    return(
      <p>loading</p>
    )
  }

  return(
  <div>
    <h1>Admin Store Fronts</h1>
    {storeFront.map((stores) => (
      <ViewAdminStore 
      key={stores._id} 
      owner={stores.owner} 
      sellername= {username} 
      storeName={stores.storeName} 
      price={stores.price}
      id={stores._id}/>
    ))}
  </div>

  )
}

export default AdminStoreFronts