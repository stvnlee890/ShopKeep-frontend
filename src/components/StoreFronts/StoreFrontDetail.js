import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom' 
import StoreFrontSellerPic from './StoreFrontSellerPic'
import StoreImages from './StoreImages'

const StoreFrontDetail = () => {
const navigate = useNavigate()
const [storeDetails, setStoreDetails] = useState()
const { storeid } = useParams()

useEffect(() => {
  axios.get(`http://localhost:8080/store-front/admin/${storeid}`)
  .then((res) => setStoreDetails(res.data))
},[])


if(!storeDetails){
  return (
    <p>loading</p>
  )
}
  return (
    <div className='store-front-detail'>
      {/* <h2>Details Page</h2> */}
      {/* <h3>{`$${storeDetails.price}`}</h3> */}
      <StoreImages />
      <div className='seller-details'>
        <div className='seller-details-profile' >
          <StoreFrontSellerPic 
          user={storeDetails.owner}
          />
          <h3>{storeDetails.storeName}</h3>
          <h3>{storeDetails.username}</h3>
        </div>
        <div className='seller-details-descriptions' >
          <p>Price: {`$${storeDetails.price}`}</p>
          <p>Description: {storeDetails.description}</p>
          <p>Color: {storeDetails.color}</p>
          <button onClick={() => navigate('/pay')} >Buy now</button>
        </div>
      </div>
    </div>
  )
}

export default StoreFrontDetail