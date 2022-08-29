import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Favorite = () => {
const { username } = useParams()
const [storeid, setStoreid] = useState([])
const [storeFront, setStoreFront] = useState([])

  // useEffect(() => {
  //   axios.get(`http://localhost:8080/user/${username}`)
  //     .then((res) => {
  //       axios.get(`http://localhost:8080/images/favorite/`, {
  //         params: {
  //           storeid
  //         }
  //       })
  //         .then((res) => console.log(res.data))
  //     })
  // },[])

  
  return (
    <div>
      <h3>
        favorite
      </h3>
    </div>
  )
}

export default Favorite