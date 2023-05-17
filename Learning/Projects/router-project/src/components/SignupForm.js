import React, { useState } from 'react'
import {AiOutlineEye, AiOutlineEyeInvisible} from 'react-icons/ai'
import { toast } from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'



const SignupForm = (props) => {
  let setIsLoggedIn=props.setIsLoggedIn

  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName : "",
    lastName : "",
    email : "",
    password : "",
    confirmPassword : ""
  })

  const [showPassword, setShowPassword] = useState(false);
  const [showPassword2, setShowPassword2] = useState(false);
  const [accountType, setAccountType] = useState("student")


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
    if(formData.password !== formData.confirmPassword){
      toast.error("Passwords Do Not Match")
      return;
    }
    setIsLoggedIn(true)
    toast.success("Signup Successful")
    console.log(formData)
    navigate("/dashboard");
  }
  return (
    <div className=' '>
       <div className=' flex bg-richblack-800 p-1 gap-x-1 my-6 rounded-full max-w-max '>
      {/* student instructor tab  */}
          <button
          onClick={()=>setAccountType("student")}
          className={`${
            accountType === "student" ? 
            " bg-richblack-900 text-richblack-5"  
            : " bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-300`}
          >Student</button>
          <button
          onClick={()=>setAccountType("instructor")}
          className={`${
            accountType === "instructor" ? 
            " bg-richblack-900 text-richblack-5"  
            : " bg-transparent text-richblack-200"
          } py-2 px-5 rounded-full transition-all duration-300`}
          >Instructor</button>
      </div>

      <form action="" onSubmit={submitHandler}>
        {/* this contains firstName and LastName  */}
        <div className=' flex gap-x-7'>

          <label htmlFor="" className=' w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]  '>First Name <sup className=' text-pink-200'>*</sup> </p>
            <input type="text" required name='firstName' onChange={changeHandler} placeholder='Enter First Name' value={formData.firstName}
              className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] mt-1 didi'
            />

          </label>

          <label htmlFor="" className=' w-full'>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]  '>Last Name <sup className=' text-pink-200'>*</sup> </p>
            <input type="text" required name='lastName' onChange={changeHandler} placeholder='Enter Last Name' value={formData.lastName}
              className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] mt-1 didi'
            />
          </label>
          
        </div>

        <label htmlFor="" className=''>
            <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375] mt-4  '>Email Address<sup className=' text-pink-200'>*</sup> </p>
            <input type="email" required name='email' onChange={changeHandler} placeholder='Enter Email Address' value={formData.email}
              className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] mt-1 didi'
            />
            
        </label>

        {/* create Password and confirmPassword fields          */}
        <div className=' flex gap-x-7 w-full mt-4' >
          <label htmlFor="" className='relative w-full'>
              <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]  '>Create Password<sup className=' text-pink-200'>*</sup> </p>
              <input type={showPassword ? "text" : "password"} required name='password' onChange={changeHandler} placeholder='Enter Password' value={formData.password}
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
          </label>

          <label htmlFor="" className='relative w-full'>
              <p className='text-[0.875rem] text-richblack-5 mb-1 leading-[1.375]  '>Confirm Password<sup className=' text-pink-200'>*</sup> </p>
              <input type={showPassword2 ? "text" : "password"} required name='confirmPassword' onChange={changeHandler} placeholder='Enter Confirm Password' value={formData.confirmPassword}
                className=' bg-richblack-800 rounded-[0.5rem] text-richblack-5 w-full p-[12px] mt-1 didi'
              />


              <span onClick={() =>setShowPassword2((prev) => !prev)}
              className=' absolute right-3 top-[38px] cursor-pointer'>
              {/* this function helps us toggle between true and false of showPassword on clik of the image  */}
              {/* these are 2 icons which will be used to show or hide password  */}
              {showPassword2 ? (
                <AiOutlineEyeInvisible fontSize={24} fill='#AFB2BF'></AiOutlineEyeInvisible>
              ) : (
                <AiOutlineEye fontSize={24} fill='#AFB2BF'></AiOutlineEye>
              )}
              </span>
          </label>
        </div>
        
        <button className=' w-full bg-yellow-50 rounded-[8px] font-medium text-richblack-900 px-3 py-2 mt-5'>Create Account</button>
      </form>
    </div>
   
  )
}

export default SignupForm