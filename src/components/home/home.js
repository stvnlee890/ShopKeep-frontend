import './home.css'
import StoreFronts from "../StoreFronts/StoreFronts"
import { useEffect, useState } from 'react' 
import axios from 'axios'

const Home = () => {
const [store, setStore] = useState('')

  useEffect(() => {
    axios.get(`http://localhost:8080/store-front/`)
      .then((res) => setStore(res.data))
  }, [])

console.log(store)
if(!setStore){
  console.log('waiting')
}

if(store){
  return (
    <div className='homepage-container'>

    <div id='homepage-intro-image'>
      <div className='homepage-text'>
        <span id='welcome-text'>BUY.SELL</span>
        <p id="welcome-subtitle">Buy and Sell from our community</p>
      </div>
      <div id='homepage-img-container'>
        <img id='homepage-img'
        src='https://media.karousell.com/media/photos/products/2018/10/03/bnip_instocks_kodak_film_vintage_tshirt_1538548342_04260a66_progressive.jpg' />
        <img id='vogue-img'
        src='https://assets.vogue.com/photos/5891688b23f9887c0e0e0dde/master/w_1600%2Cc_limit/3-fresh-dressed-film-still.jpg'/>
      </div>
    </div>

    <div className='homepage'>
      <p className='header' id='header'>See who's selling what</p>
      <div className='homepage store-fronts'>
      {store.map((store) => (
        <StoreFronts 
        key={store._id}
        store={store}
        />
      ))}
      </div>
    </div>
    </div>
  )

}
}

export default Home