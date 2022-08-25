import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate, Link, Outlet} from 'react-router-dom'
import UploadImages from './UploadImages'

const ItemDetailForm = ({ username, token, id }) => {
  const navigate = useNavigate()
  const formData = {
    storeName: '',
    price: '',
    condition: '',
    color: '',
    description: '',
    category: '',
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
    <div>
      <h1>Item Detail Form</h1>
      {/* IMAGE FORM */}
  
      {/* STORE FRONT FORM */}
      <form onSubmit={handleSubmit}>
        <input onChange={handleChange} placeholder="store front name" type='text' id='storeName' value={storeFront.storeName} />
        <input onChange={handleChange} placeholder="price" type='text' id='price' value={storeFront.price} />
        <input onChange={handleChange} placeholder="condition" type='text' id='condition' value={storeFront.condition}/>
        <input onChange={handleChange} placeholder="color" type='text' id='color' value={storeFront.color}/>
        <input onChange={handleChange} placeholder="description" type='text' id='description' value={storeFront.description}/>
        <input onChange={handleChange} placeholder="category" type='text' id='category' value={storeFront.category}/>
        <button type="submit">Upload</button>
        {/* <button type='submit'><Link to={`/${username}/setstore/upload-images`}>Upload</Link></button> */}
      </form>
      <Outlet />
    </div>
  )
}

export default ItemDetailForm