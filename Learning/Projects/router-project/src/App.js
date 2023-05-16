import './App.css';
import Navbar from './components/Navbar'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import { useState } from 'react';

function App() {

  const [isLoggedIn,setIsLoggedIn] = useState(false);
  return (
    <div>
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/login' element={<Login setIsLoggedIn={setIsLoggedIn}></Login>}></Route>
        <Route path='/signup' element={<Signup setIsLoggedIn={setIsLoggedIn}></Signup>}></Route>
        <Route path='/dashboard' element={<Dashboard></Dashboard>}></Route>

      </Routes>
    </div>
  );
}

export default App;
