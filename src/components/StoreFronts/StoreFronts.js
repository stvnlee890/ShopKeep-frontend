import '../home/home.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const StoreFronts = ({ store }) => {
  const username = window.localStorage.getItem('user')
  const [imageUrl, setImageUrl] = useState('')
  const navigate = useNavigate()
  const favoriteForm = {
    username: username,
    storeFront: '',
  }
  // GET ALL STORE FRONTS
  useEffect(() => {
    axios.get(`https://shopkeepapp.herokuapp.com/images/${store._id}` )
      .then((res) => setImageUrl(res.data))
  },[])

  const handleClick = (event) => {
    console.log(event.target.id)
    axios.post(`https://shopkeepapp.herokuapp.com/favorite`, {username: username, storeFront: event.target.id, imageKey: imageUrl[0].imageKey})
      .then((res) => console.log(res.data))
  }
  if(!imageUrl){
    console.log('loading')
  }

  return (
    <div className='store-front homepage'>
      {!imageUrl ? console.log('loading') : 
      <img 
      className='homepage image'
      onClick={() => {navigate(`/${store._id}`)}}
      alt={imageUrl[0].imageKey} 
      src={imageUrl[0].imageUrl}
      />}
      <p className='homepage store-front price' >USD ${store.price}</p>
      <p 
      className='homepage store-front price favorite' 
      onClick={handleClick}
      id={store._id}
      >Add to Favorite</p>
    </div>
  )
}

export default StoreFronts


// GET REQUEST FOR STORE-FRONTS OF ALL USERS
// WHEN CLICK DIRECT THEM TO SPECIFIC USER STORE FRONT
// 