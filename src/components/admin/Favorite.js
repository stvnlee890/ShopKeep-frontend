import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Favorite = () => {
const { username } = useParams()
  useEffect(() => {
    axios.get(`http://localhost:8080/user/${username}`)
      .then((res) => console.log(res.data))
  })
  return (
    <div>
      <h3>
        favorite
      </h3>
    </div>
  )
}

export default Favorite