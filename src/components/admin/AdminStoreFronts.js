import './styling/adminStoreFront.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ViewAdminStore from './ViewAdminStore'

const AdminStoreFronts = () => {
  const [storeFront, setStoreFront] = useState('')
  const { username } = useParams()
console.log(storeFront)

// FETCH STORE-FRONTS
useEffect(() => {
    axios.get(`http://localhost:8080/store-front/${username}`)
      .then((res) => setStoreFront(res.data))
  }, [])
console.log(storeFront)

// DELETE STOREFRONT AND ALL IMAGES ASSOCIATED TO THE STORE FRONT
const handleDelete = (event) => {
  event.preventDefault()
  console.log(event.target.id)
  const imageKey = event.target.id
  axios.delete(`http://localhost:8080/images/store-front/${imageKey}`)
    .then(() => {
      const newStoreFront = storeFront.filter(storeFront => storeFront._id !== imageKey)
      console.log(newStoreFront)
      setStoreFront(newStoreFront)  
    })
    .catch((err) => console.log(err))
}

  if(!storeFront){
    return(
      <p>loading</p>
    )
  }
  if(storeFront){
    return(
    <div className='admin-store-container'>
      {storeFront.map((stores) => (
        <ViewAdminStore 
          key={stores._id} 
          owner={stores.owner} 
          sellername= {username} 
          storeName={stores.storeName} 
          price={stores.price}
          handleDelete={handleDelete}
          id={stores._id}/>
       ))}
    </div>
  
    )
  }
}

export default AdminStoreFronts