import './styling/itemDetailForm.css'
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link, Outlet} from 'react-router-dom'
import UploadImages from './UploadImages'

const ItemDetailForm = ({ username, token, id }) => {
  console.log(username)
  const navigate = useNavigate()
  const formData = {
    storeName: '',
    price: '',
    condition: '',
    color: '',
    description: '',
    category: '',
    username: username,
    owner: id,
  }
  const [storeFront, setStoreFront] = useState(formData)
  const [newStore, setNewStore] = useState()
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };

  const handleChange = (event) => {
    event.preventDefault()
    setStoreFront({ ...storeFront, [event.target.id]: event.target.value })
    console.log(event.target.id)
    console.log(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('http://localhost:8080/store-front/admin', storeFront, {headers})
          .then((res) => {
            setNewStore(res.data) 
            navigate(`/upload-images/${res.data._id}`)
          })
  }

  // if(!storeFront){
  //   console.log('loading')
  // } else {
  //   console.log(storeFront)
  // }

  return (
    <div className='item-detail-form-container'>
      <h1>Item Detail Form</h1>
      <form onSubmit={handleSubmit} className='item-detail-form'>
      
        <label className='label'>Store Name</label>
        <input className='input'
          onChange={handleChange}
          placeholder="store front name" 
          type='text' 
          id='storeName' 
          value={storeFront.storeName} />
  

        <label className='label'>Price</label>
        <input className='input'
          onChange={handleChange} 
          placeholder="price" 
          type='text' 
          id='price' 
          value={storeFront.price} />

        <label className='label'>Size</label>
        <input className='input'
          onChange={handleChange} 
          placeholder="size" 
          type='text' 
          id='size' 
          value={storeFront.size} />

        <label className='label'>Condition</label>
        <input className='input'
          onChange={handleChange} 
          placeholder="condition" 
          type='text' 
          id='condition' 
          value={storeFront.condition}/>

        <label className='label'>Color</label>    
        <input className='input'
          onChange={handleChange} 
          placeholder="color" 
          type='text' 
          id='color' 
          value={storeFront.color}/>

        <label className='label'>Description</label> 
        <input className='input'
          onChange={handleChange} 
          placeholder="description" 
          type='text' 
          id='description' 
          value={storeFront.description}/>

        <label className='label'>Category</label>
        <input className='input'
          onChange={handleChange} 
          placeholder="category" 
          type='text' 
          id='category' 
          value={storeFront.category}/>
        <button type="submit">Next</button>
      </form>
      <Outlet />
    </div>
  )
}

export default ItemDetailForm