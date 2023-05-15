import './App.css';
import {useEffect, useState} from 'react'
function App() {

  const[formData,setFormData] = useState({
    firstName : "",
    lastName : "",
    emailAdd : "",
    country : "India",
    streetAddress : "",
    comments : false,
    candidates : false,
    offers : false,
    notifications : ""
  });

  function changeHandler(event){

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

  // useEffect(() => {
    //Runs on the first render
    //And any time any dependency value changes
    
  // }, );
  
  console.log("Printing it")
  console.log(formData)

  function submitHandler(event){
    event.preventDefault();
    console.log(formData)
  }

  return (
    <div className='w-full md:max-w-[50%] mx-auto shadow p-8'>
      <form action="" className=' space-y-2' onSubmit={submitHandler}>
        <label htmlFor="firstName" className='text-sm font-medium leading-6 text-gray-900'>First Name</label>
        <input type="text" name="firstName" id="firstName" value={formData.firstName} placeholder='Navansh' onChange={changeHandler}
          className='mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400'
        />

        <br />
        <label htmlFor="lastName" className='text-sm font-medium leading-6 text-gray-900'>Last Name</label>
        <input type="text" name='lastName' id='lastName' value={formData.lastName} placeholder='Khandelwal' onChange={changeHandler}
        className='mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400' />

        <br />
        <label htmlFor="emailAdd" className='text-sm font-medium leading-6 text-gray-900'>Email Address</label>
        <input type="email" name='emailAdd' id='emailAdd' value={formData.emailAdd} placeholder='dancepechance@dj.com' onChange={changeHandler}
        className='mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400' />

        <br />
        <label htmlFor="country" className='text-sm font-medium leading-6 text-gray-900'>Country</label>        
        <select name="country" id="country" onChange={changeHandler} value={formData.country} className='mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 bg-white'>
          <option value="India">India</option>
          <option value="USA">USA</option>
          <option value="Switzy">Surendra</option>
        </select>

        <br />
        <label htmlFor="streetAddress" className='text-sm font-medium leading-6 text-gray-900'>Sreet Address</label>
        <input type="text" name='streetAddress' id='streetAddress' value={formData.streetAddress} placeholder='Address Thok' onChange={changeHandler} 
          className='mt-2 w-full rounded-md p-2 text-gray-900 shadow-sm ring-1 placeholder:text-gray-400'
        />

        {/* the checkboxes  */}
        <h3 className='text-sm font-semibold leading-6 text-gray-900'>By Email</h3>

        <div className=' mt-4 space-y-2'>
          <div className=' flex gap-2'>
            
            <input type="checkbox" name="comments" id="comments" onChange={changeHandler} checked={formData.comments}
            className='flex h-6 items-center w-4 rounded' />
            <div className=' ml-3 text-sm leading-6 '>
              <h3 className=' font-semibold'>Comments</h3>
              <label htmlFor="comments" className=' text-gray-500'>Get notified when someones posts a comment on a posting.</label>
            </div>
            
          </div>

          <div className='flex gap-2'>
            <input type="checkbox" name="candidates" id="candidates" onChange={changeHandler} checked={formData.candidates} 
              className='h-6 items-center w-4 rounded'
            />
            <div className=' ml-3 text-sm leading-6 '>
              <h3 className=' font-semibold'>Candidates</h3>
              <label htmlFor="candidates" className=' text-gray-500'>Get notified when a candidate applies for a job.</label>
            </div>
          </div>

          <div className='flex gap-2'>
            <input type="checkbox" name="offers" id="offers" onChange={changeHandler} checked={formData.offers} 
              className='h-6 items-center w-4 rounded'
            />
            <div className=' ml-3 text-sm leading-6 '>
            <label htmlFor="offers" className=' font-semibold'>Offers</label>


              <h3 className='  text-gray-500'>Get notified when a candidate accepts or rejects an offer.</h3>
            </div>
          </div>
          
        </div>
        

        {/* the radio buttons  */}

        <div className=' leading-6'>
          <h3 className='text-sm font-semibold leading-6 text-gray-900'>Push Notifications</h3>
          <h2 className=' text-gray-500 text-sm'>These are delivered via SMS to your mobile phone.</h2>
          <div className=' mt-4 space-y-2'>

            <div className=' flex items-center '>
              <input type="radio" onChange={changeHandler} name='notifications' id='Everything' value="Everything" checked={formData.notifications==="Everything"} 
                className='h-4 w-4'
              />
              <label htmlFor="Everything" className='ml-3 text-sm font-medium leading-6 text-gray-900'>Everything</label>
            </div>

            <div className='flex items-center'>
              <input type="radio" onChange={changeHandler} name='notifications' id='Same as Email' value="Same as Email" checked={formData.notifications==="Same as Email"}
                className='h-4 w-4'
              />
              <label htmlFor="Same as Email" className='ml-3 text-sm font-medium leading-6 text-gray-900'>Same as Email</label>

            </div>

            <div className='flex items-center'>
              <input type="radio" onChange={changeHandler} name='notifications' id='No Push Notifications' value="No Push Notifications" checked={formData.notifications==="No Push Notifications"}
                className='h-4 w-4'
              />
              <label htmlFor="No Push Notifications" className='ml-3 text-sm font-medium leading-6 text-gray-900'>No Push Notifications</label>
            </div>
            
          </div>

        </div>

        <div className=' my-3'>
          <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'>Submit</button>
        </div>
        

      </form>
    </div>
  );
}

export default App;
