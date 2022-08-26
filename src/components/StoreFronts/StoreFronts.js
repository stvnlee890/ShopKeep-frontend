import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const StoreFronts = ({ store }) => {
  const [imageUrl, setImageUrl] = useState('')
  const navigate = useNavigate()
  // GET ALL STORE FRONTS
  useEffect(() => {
    axios.get(`http://localhost:8080/images/${store._id}` )
      .then((res) => setImageUrl(res.data))
  },[])
  console.log(imageUrl)

  if(!imageUrl){
    console.log('loading')
  }

  return (
    <div>
      <h2>{store.username}</h2>
      {!imageUrl ? console.log('loading') : 
      <img 
      onClick={() => {navigate(`/${store._id}/${store.storeName}`)}}
      alt={imageUrl[0].imageKey} 
      src={imageUrl[0].imageUrl}

      />}
      <p>{store.username}</p>
    </div>
  )
}

export default StoreFronts


// GET REQUEST FOR STORE-FRONTS OF ALL USERS
// WHEN CLICK DIRECT THEM TO SPECIFIC USER STORE FRONT
// 