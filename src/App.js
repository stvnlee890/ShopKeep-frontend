import './App.css';
import { Routes, Route } from 'react-router-dom'

import Signup from './components/signup-login/Signup';
import Login from './components/signup-login/Login'
import SetStore from './components/admin/SetStore';
import UploadImages from './components/admin/UploadImages';
import Home from './components/home/home'
import AdminPage from './components/admin/AdminPage';
import Navbar from './components/navbar/NavBar';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/' element={<StoreFronts />} /> */}
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />

        <Route path='/:username/adminpage' element={<AdminPage />}>
          <Route path='setstore' element={<SetStore />} />
          <Route path='upload-images/:storeid' element={<UploadImages />} />
        </Route>
     
      </Routes>
    </div>
  );
}

export default App;
