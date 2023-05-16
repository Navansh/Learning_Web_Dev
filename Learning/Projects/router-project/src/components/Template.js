import React from 'react'
import frameImage from '../assets/frame.png'
import SignupForm from './SignupForm'
import LoginForm from './LoginForm'
import { FcGoogle } from 'react-icons/fc'
const Template = ({title, desc1 ,desc2, image, formType, setIsLoggedIn}) => {
  return (
    // this will give the similar componenets in signup and login page 
    <div className=' flex w-11/12 max-w-[1160px] mx-auto py-12 gap-x-12 gap-y-0'>
        <div className=' w-11/12 max-w-[500px] mx-0'>
            <h1 className=' text-richblack-5 font-semibold text-[1.875rem] leading-[2.375rem]'>{title}</h1>
            <p className="text-[1.125rem] leading-[1.625rem] mt-4">
                <span className=' text-richblack-100'>{desc1}</span>
                <br />
                <span className=' text-blue-100 italic'>{desc2}</span>
            </p>

            {formType === "signup" ? (
                <SignupForm setIsLoggedIn={setIsLoggedIn}></SignupForm>
            ) : (<LoginForm setIsLoggedIn={setIsLoggedIn}></LoginForm>)}

            <div className=' flex w-full items-center py-4 gap-x-2'>
                <div className=' h-[1px] bg-richblack-700 w-full'></div>
                <p className=' text-richblack-700 font-medium leading-[1.375rem]'>OR</p>
                <div className=' h-[1px] bg-richblack-700 w-full'></div>
            </div>

            <button className=''>
                <FcGoogle/>
                <p>Sign Up with Google</p>
            </button>
        </div>

        <div>
            <img src={frameImage} alt="pattern" width={558} height={504} loading='lazy' />
            <img src={image} alt="students" width={558} height={504} loading='lazy' />

        </div>
    </div>
  )
}

export default Template