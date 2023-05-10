import logo from './logo.svg';
import './App.css';
import data from './data'
import { useState } from 'react';
import Tours from './components/Tours'

function App() {

  const [tours,setTours] = useState(data);
  
  return (
    <div>
      <h2>Tour IT</h2>
      <Tours tours={tours}>

      </Tours>
    </div>
  );
}

export default App;
