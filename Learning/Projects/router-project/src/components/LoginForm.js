import React, { useState } from 'react'
import { toast } from 'react-hot-toast'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai' 
import { Link, useNavigate } from 'react-router-dom'
const LoginForm = (props) => {
  let setIsLoggedIn=props.setIsLoggedIn

  const navigate = useNavigate();
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

  function submitHandler(event){
    event.preventDefault();
    setIsLoggedIn(true)
    toast.success("Logged in")
    console.log(formData);
    navigate("/dashboard");
  }
  return (
    <form action="" onSubmit={submitHandler} className=' flex flex-col w-full mt-6 gap-y-4'>

      <label className=' w-full'>
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]  '>Email Address<sup className=' text-pink-200'>*</sup></p>

        <input type="email" required value={formData.email} onChange={changeHandler} placeholder='Enter email Address' name='email' id='email'
          className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] mt-1 didi'
        />
      </label>
      
      <label className=' w-full relative'>
        <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]  '>Password<sup className=' text-pink-200'>*</sup></p>
        <input type={showPassword ? "text" : "password"} required value={formData.password} onChange={changeHandler} placeholder='Enter Password' name='password'
          className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] mt-1 didi'
        />
        <span onClick={() =>setShowPassword((prev) => !prev)}
        className=' absolute right-3 top-[38px] cursor-pointer'>
           {/* this function helps us toggle between true and false of showPassword on clik of the image  */}
          {/* these are 2 icons which will be used to show or hide password  */}
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'></AiOutlineEyeInvisible>
          ) : (
            <AiOutlineEye fontSize={24} fill='#AFB2BF'></AiOutlineEye>
          )}
        </span>

        <Link to="#">
            <p className=' text-xs mt-1 text-blue-100 ml-auto max-w-max  '>Forgot Password</p>
        </Link>
      </label>

      <button className=' bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-3 py-2 mt-5'>
        Sign In
      </button>



    </form>
  )
}

export default LoginForm