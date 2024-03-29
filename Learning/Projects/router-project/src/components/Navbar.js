import React from 'react'
import logo from '../assets/Logo.svg'
import { Link } from 'react-router-dom'
import { toast } from 'react-hot-toast';
const Navbar = (props) => {
  let isLoggedIn = props.isLoggedIn;
  let setIsLoggedIn = props.setIsLoggedIn;

  return (
    <div className=' flex justify-between py-4 items-center w-11/12 max-w-[1160px] mx-auto'>
      <Link to="/">
        <img src={logo} alt="logo" width={160} height={32} loading='lazy' />
      </Link>

      <nav >
        <ul className=' flex gap-3 text-richblack-100'>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/">About</Link>
          </li>
          <li> 
            <Link to="/">Contact</Link>
          </li>
        </ul>
      </nav>

      {/* Login - Signup- Logout- Dashboard  */}
      <div className=' flex items-center gap-4'>
        { !isLoggedIn &&
          /* we want this to be only rendered when the user is not logged in and we are using a State Variable to 
          find that out  */
          <Link to="/login">
            <button className=' bg-richblack-800 text-richblack-100 py-2 px-3 rounded-[8px] border border-richblack-700'>Log in</button>
          </Link>
        }
        { !isLoggedIn &&
          <Link to="/signup">
            <button className=' bg-richblack-800 text-richblack-100 py-2 px-3 rounded-[8px] border border-richblack-700'>Sign up</button>
          </Link>
        }
        { isLoggedIn &&
          <Link to="/">
            <button className=' bg-richblack-800 text-richblack-100 py-2 px-3 rounded-[8px] border border-richblack-700' onClick={()=>{
              setIsLoggedIn(false)
              toast.success("Logged Out")
            }} >Log Out</button>
          </Link>
        }
        { isLoggedIn &&
          <Link to="/dashboard">
            <button className=' bg-richblack-800 text-richblack-100 py-2 px-3 rounded-[8px] border border-richblack-700'>Dashboard</button>
          </Link>
        }

      </div>

    </div>
  )
}

export default Navbar
