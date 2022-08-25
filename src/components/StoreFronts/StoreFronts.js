import axios from 'axios'
import { useState, useEffect } from 'react'

const StoreFronts = () => {
  
  // GET ALL STORE FRONTS
  useEffect(() => {
    axios.get(`http://localhost:8080/store-front/`)
      .then((res) => console.log(res.data))
  },[])
  
  return (
    <div>
      <h1>Seller Store Fronts</h1>
      <p>Sellers list</p>
    </div>
  )
}

export default StoreFronts


// GET REQUEST FOR STORE-FRONTS OF ALL USERS
// WHEN CLICK DIRECT THEM TO SPECIFIC USER STORE FRONT
// 