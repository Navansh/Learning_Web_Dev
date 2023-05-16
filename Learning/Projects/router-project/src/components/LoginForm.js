import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { Link } from 'react-router-dom'
const LoginForm = () => {

  const [formData, setFormData] = useState({
    email : "",
    password : ""
  })

  const [showPassword, setShowPassword] = useState(false)

  function changeHandler(event){
    setFormData((prevData) =>(
      {
        ...prevData,
        [event.target.name] : event.target.value
      }
    ))
  }
  return (
    <form action="">

      <label>
        <p>Email Address<sup>*</sup></p>

        <input type="email" required value={formData.email} onChange={changeHandler} placeholder='Enter Email Id' name='email' id='email'/>
      </label>
      
      <label>
        <p>Password<sup>*</sup></p>
        <input type={showPassword ? "text" : "password"} required value={formData.password} placeholder='Enter Password' name='password' />
        <span onClick={() =>setShowPassword((prev) => !prev)}>
           {/* this function helps us toggle between true and false of showPassword on clik of the image  */}
          {/* these are 2 icons which will be used to show or hide password  */}
          {showPassword ? (
            <AiOutlineEyeInvisible></AiOutlineEyeInvisible>
          ) : (
            <AiOutlineEye></AiOutlineEye>
          )}
        </span>

        <Link to="#">
            <p>Forgot Password</p>
        </Link>
      </label>

      <button>
        Sign In
      </button>



    </form>
  )
}

export default LoginForm