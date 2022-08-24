import './App.css';
import { Routes, Route, Link } from 'react-router-dom'
import StoreFronts from './components/StoreFronts/StoreFronts';
import Signup from './components/signup-login/Signup';
import Login from './components/signup-login/Login'
import SetStore from './components/admin/SetStore';
import UploadImages from './components/admin/store-set-up/UploadImages';
import Home from './components/home/home'

function App() {
  return (
    <div>
      <nav>
        <h1>Shop Keep</h1>
        <Link to='/signup'>Sign Up</Link>
        <Link to='/login'>Login</Link>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/' element={<StoreFronts />} /> */}
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/:username/setstore' element={<SetStore />} />
        <Route path='/upload-images/:storeid' element={<UploadImages />} />
      </Routes>
    </div>
  );
}

export default App;
