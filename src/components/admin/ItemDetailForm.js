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
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if(storeFront.storeName === ''||
       storeFront.price === '' || 
       storeFront.condition === ''|| 
       storeFront.description === ''|| 
       storeFront.category === ''){
      alert('please enter appropriate field')
    } else {
      axios.post('https://shopkeepapp.herokuapp.com/store-front/admin', storeFront, {headers})
            .then((res) => {
              setNewStore(res.data) 
              navigate(`/upload-images/${res.data._id}`)
            })
    }
  }

  

  return (
    <div className='item-detail-form-container'>
       <p id='item-detail-form-step'>Step 1 of 2 </p>
      <form onSubmit={handleSubmit} >

      <div className='item-detail-form'>
        <label className='label'>Store Name:</label>
        <input className='input'
          onChange={handleChange}
          type='text' 
          id='storeName' 
          value={storeFront.storeName} />
  
        <label className='label'>Price:</label>
        <input className='input'
          onChange={handleChange} 
          type='text' 
          id='price' 
          value={storeFront.price} />

        <label className='label'>Size:</label>
        <input className='input'
          onChange={handleChange} 
          type='text' 
          id='size' 
          value={storeFront.size} />

        <label className='label'>Condition:</label>
        <input className='input'
          onChange={handleChange} 
          type='text' 
          id='condition' 
          value={storeFront.condition}/>

        <label className='label'>Color:</label>    
        <input className='input'
          onChange={handleChange} 
          type='text' 
          id='color' 
          value={storeFront.color}/>

        <label className='label'>Description:</label> 
        <input className='input'
          onChange={handleChange} 
          type='text' 
          id='description' 
          value={storeFront.description}/>

        <label className='label'>Category:</label>
        {/* <label className='input'
          type='text' 
          id='category' 
          >
          </label> */}
          <select id='category' onChange={handleChange}>
            <option id='category-drop-down'>Select a Category</option>
            <option value='tshirt'>t-shirt</option>
            <option value='bottom'>bottom</option>
            <option value='top'>top</option>
          </select>
        </div>
        <div id='item-form-button-container' >
          <button 
            id='item-form-button'
            type="submit">Next
          </button>
        </div>
      </form>
      <Outlet />
    </div>
  )
}

export default ItemDetailForm