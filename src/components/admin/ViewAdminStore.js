import axios from 'axios'
import { useState, useEffect } from 'react'

const ViewAdminStore = ({ storeName, id, price, handleDelete }) => {
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    axios.get(`http://localhost:8080/images/${id}` )
      .then((res) => setImageUrl(res.data))
  },[])

  return (
    <>
    <div>
      <h3>{storeName}</h3>
      {!imageUrl ? console.log('loading') : <img alt={imageUrl[0].imageKey} src={imageUrl[0].imageUrl}/>}
      <p>{`$${price}`}</p>
        <button onClick={handleDelete} id={id}>delete</button>
    </div>

    </>
  )
}

export default ViewAdminStore