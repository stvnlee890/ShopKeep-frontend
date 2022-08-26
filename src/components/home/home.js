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
      <h1>Home</h1>
      <h3>See who's selling what</h3>
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