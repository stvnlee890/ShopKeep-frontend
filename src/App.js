import './App.css';
import { Routes, Route } from 'react-router-dom'

import Signup from './components/signup-login/Signup';
import Login from './components/signup-login/Login'
import SetStore from './components/admin/SetStore';
import UploadImages from './components/admin/UploadImages';
import Home from './components/home/home'
import AdminPage from './components/admin/AdminPage';
import Navbar from './components/navbar/NavBar';
import AdminStoreFronts from './components/admin/AdminStoreFronts';
import Signout from './components/signup-login/Signout';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />
        {/* <Route path='/' element={<StoreFronts />} /> */}
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signout' element={<Signout />} />

        <Route path='/:username/adminpage' element={<AdminPage />}>
          <Route path='setstore' element={<SetStore />} />
          <Route path='view-admin-store' element={<AdminStoreFronts /> } />
        </Route>
          <Route path='/upload-images/:storeid' element={<UploadImages />} />
     
      </Routes>
    </div>
  );
}

export default App;
