import '../home/home.css'
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
console.log(store)
  if(!imageUrl){
    console.log('loading')
  }

  return (
    <div className='store-front homepage'>
      {!imageUrl ? console.log('loading') : 
      <img 
      className='homepage image'
      onClick={() => {navigate(`/${store._id}/${store.storeName}`)}}
      alt={imageUrl[0].imageKey} 
      src={imageUrl[0].imageUrl}
      />}
      <p className='homepage store-front price' >USD ${store.price}</p>
    </div>
  )
}

export default StoreFronts


// GET REQUEST FOR STORE-FRONTS OF ALL USERS
// WHEN CLICK DIRECT THEM TO SPECIFIC USER STORE FRONT
// 