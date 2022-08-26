import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ViewAdminStore from './ViewAdminStore'

const AdminStoreFronts = () => {
  const [storeFront, setStoreFront] = useState()
  const { username } = useParams()

  useEffect(() => {
      axios.get(`http://localhost:8080/store-front/${username}`)
      .then((res) => setStoreFront(res.data))
  }, [])
console.log(storeFront)

  if(!storeFront){
    return(
      <p>loading</p>
    )
  }
  if(storeFront){}
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