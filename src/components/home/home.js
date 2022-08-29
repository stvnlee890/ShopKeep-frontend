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
    <div className='homepage'>
      <img src="https://www.pixelstalk.net/wp-content/uploads/2016/07/Plain-Wallpaper-HD.png" />

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
  )

}
}

export default Home