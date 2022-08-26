import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import ItemDetailForm from './ItemDetailForm'

const SetStore = () => {
  const [admin, setAdmin] = useState()
  const { username } = useParams()

  const token = window.localStorage.getItem('token')
  useEffect(() => {
    axios.get(`http://localhost:8080/user/${username}`, {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => setAdmin(res.data))
  }, [])
console.log(admin)


  return (
    <div>
      <p>Step 1 of 2 </p>
      {!admin ? console.log('loading') : <ItemDetailForm username={ username } token={token} id={admin._id}/>}
    </div>
  )
}

export default SetStore