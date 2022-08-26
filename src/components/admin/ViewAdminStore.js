import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'
import EditStoreFront from './EditStoreFront'

const ViewAdminStore = ({ owner, sellername, storeName, id, price, handleDelete }) => {
  const { username } = useParams()
  const [imageUrl, setImageUrl] = useState()
  const navigate = useNavigate()


  useEffect(() => {
    axios.get(`http://localhost:8080/images/${id}` )
      .then((res) => setImageUrl(res.data))
  },[])


  const handleClick = () => {
    navigate(`/edit-store-front/${id}`)
  }


  return (
    <>
    <div>
      <h3>{storeName}</h3>
      {!imageUrl ? console.log('loading') : <img alt='image' src={imageUrl[0].imageUrl}/>}
      <p>{`$${price}`}</p>
        <button onClick={handleDelete} id={id}>delete</button>
    </div>

    </>
  )
}

export default ViewAdminStore