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
import StoreFrontDetail from './components/StoreFronts/StoreFrontDetail';
import PaymentPage from './components/paypage/PaymentPage';
import UploadProfileImage from './components/admin/UploadProfileImage';
import Favorite from './components/admin/Favorite';


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
        <Route path='/:storeid/:storename' element={<StoreFrontDetail />} />
        <Route path='/pay' element={<PaymentPage />} />
        {/* SECURED ROUTES */}
        <Route path='/:username/adminpage' element={<AdminPage />}>
          <Route path='setstore' element={<SetStore />} />
          <Route path='view-admin-store' element={<AdminStoreFronts />} />
          <Route path='favorite' element={<Favorite />} />
        </Route>
          <Route path='/profile-image/:userid' element={<UploadProfileImage />} />
          <Route path='/upload-images/:storeid' element={<UploadImages />} />
     
      </Routes>
    </div>
  );
}

export default App;
