import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Support from './components/Support';
import About from './components/About';
import Labs from './components/Labs';
import NotFound from './components/NotFound';
import { NavLink } from 'react-router-dom';

function App() {
  return (





    <div className='App'>

      <nav>
        <ul>
          <li><NavLink to="/">Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/support">Support</NavLink></li>
          <li><NavLink to="/labs">Labs</NavLink></li>
          <li><Link to="https://tailwindcss.com/docs/font-weight#customizing-your-theme">Masti</Link></li>
        </ul>
      </nav>


      <Routes>
        <Route path='/' element={<Home></Home>}>
          {/* this is called Nested Routing  */}
          <Route path='/support' element={
            <Support></Support>
          }></Route>

          <Route path='/about' element={
            <About></About>
          }></Route>

          <Route path='/labs' element={
            <Labs></Labs>
          }></Route>

          <Route path='*' element={
            <NotFound></NotFound>
          }></Route>

        </Route>

      </Routes>
       
    </div>

    
  );
}

export default App;
