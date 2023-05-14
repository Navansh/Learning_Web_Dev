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
    email : "",
    comments : "",
    isVisible : true,
    mode : "",
    favCar : ""
  })

  function changeHandler(event){
    // now we destructure event.target(jis elements se changeHandler call hua hai ) and get our required fields ki values from it 
    const {name, value, checked, type} = event.target; 
    setFormData(prevFormData =>{
      return {
        ...prevFormData,
        // [event.target.name] : event.target.value
        //after this destructuring we dont need to write the complete event.target...... we can just simply write 
        [name] : type==='checkbox' ? checked : value
        //like for checkbix name is isVisible so isVisible ki value change ho jayegi
        // now through this we handled changing of both first name and last name
      }
    })
  }

  console.log(formData)

  function submitHandler(event){
     event.preventDefault();
     console.log("Finally printing the entire form ka data ");
    //  console.log("This is going to bge func abnefdfkld and do it at Yourt own Risk");
    console.log(formData)
  }

  return (
    <div className='App'>
      <form action="" onSubmit={submitHandler}>
        <label htmlFor="info">Name</label>
        <input type="text" placeholder='first-Name' onChange={changeHandler} name='firstName' value={formData.firstName}/>
        <br />
        <label htmlFor="lastname">Last Name</label>
        <input type="text" placeholder='LastName' name='lastName' onChange={changeHandler} value={formData.lastName}/>
        <br />
        <input type="email" placeholder='Email betaa' onChange={changeHandler} name='email' value={formData.email} />

        {/* textarea creation  */}
        <textarea onChange={changeHandler} name="comments" value={formData.comments} placeholder='comments betaa' id="" cols="30" rows="10"></textarea>

        {/* adding checkboxes  */}
        <br />
        <label htmlFor="isVisible" id="isVisible">CheckBox tick karo</label>
        <input type="checkbox" onChange={changeHandler} name="isVisible" id="isVisible" checked={formData.isVisible} />

        <br />

        <fieldset>
          <legend>Mode : </legend>

          <input type="radio" onChange={changeHandler} name="mode" id="Online-Mode" value="Online-Mode" checked={formData.mode==="Online-Mode"}/>
          <label htmlFor="Online-Mode">Yes Betaa</label>

          <input type="radio" onChange={changeHandler} name="mode" id="Offline-Mode" value="Offline-Mode" checked={formData.mode==="Offline-Mode"} />
          <label htmlFor="Offline-Mode">Yes Betaa off</label>
        </fieldset>

        {/* creating a dropdown list  */}
        <label htmlFor="favCar">Haan betaa Gadddi ? </label>
        <select name="favCar" onChange={changeHandler} id="favCar" value={formData.favCar}>
          <option value="scorpio">Scorpio</option>
          <option value="devendra">Devendra</option>
          <option value="surendra">surendra</option>


        </select>
        <br />

        {/* Submit Button  */}

        {/* <input type="submit" value="submit" /> */}
        {/* 1st way to create a button  */}
        <button>Submit Betaa</button>
        {/* by default it is of type submit  */}
      </form>
     </div>
  );
}

export default App;
