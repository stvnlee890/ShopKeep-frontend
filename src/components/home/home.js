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
    <div>
      <h1>Home</h1>
      <h3>Seller Store Front</h3>
      {store.map((store) => (
        <StoreFronts 
        key={store._id}
        store={store}
        />
      ))}
    </div>
  )

}
}

export default Home