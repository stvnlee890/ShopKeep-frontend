import axios from 'axios'
import { useEffect, useState } from 'react'


const SetStore = () => {
  const [store, setStore] = useState()

  const token = window.localStorage.getItem('token')
  useEffect(() => {
    axios.get('http://localhost:8080/store-front/admin/6305178d38feddf14cbd1911', {
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      }
    })
      .then((res) => setStore(res.data))
  }, [])
  console.log(store)
 
  return (
    <div>
      <h5>Welcome to setting store</h5>
    </div>
  )
}

export default SetStore