import axios from 'axios'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'

const ViewAdminStore = ({ owner, sellername, storeName, id, price }) => {
  const { username } = useParams()
  const [imageUrl, setImageUrl] = useState()
console.log(id)
  useEffect(() => {
    axios.get(`http://localhost:8080/images/${id}` )
      .then((res) => setImageUrl(res.data))
  },[])
  console.log(imageUrl)


  if(sellername === username) {
    console.log(owner)
  }
  return (
    <div>
      <h1>{storeName}</h1>
      {!imageUrl ? <p>loading</p> : <img alt='image' src={imageUrl[0].imageUrl}/>}
      <p>{`$${price}`}</p>
    </div>
  )
}

export default ViewAdminStore