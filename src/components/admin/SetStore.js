import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SetStore = () => {
  const [store, setStore] = useState()
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
      {!admin ? console.log('loading') : <h5>Welcome {admin.firstName}</h5> }
    </div>
  )
}

export default SetStore