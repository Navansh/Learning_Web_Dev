import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // function changeHandler(event){
  //   console.log(event.target.value);
  // }

  // function lastNameHandler(event){
  //   console.log(event.target.value)
  // }

  const [formData,setFormData] = useState({
    firstName : "",
    lastName : "",
    email : ""
  })

  function changeHandler(event){
    setFormData(prevFormData =>{
      return {
        ...prevFormData,
        [event.target.name] : event.target.value
        // now through this we handled changing of both first name and last name
      }
    })
  }

  console.log(formData.email);

  return (
    <div className='App'>
      <form action="">
        <label htmlFor="info">Name</label>
        <input type="text" placeholder='first-Name' onChange={changeHandler} name='firstName'/>
        <br />
        <label htmlFor="lastname">Last Name</label>
        <input type="text" placeholder='LastName' name='lastName'/>
        <br />
        <input type="email" placeholder='Email betaa' onChange={changeHandler} name='email' />
      </form>
    </div>
  );
}

export default App;
