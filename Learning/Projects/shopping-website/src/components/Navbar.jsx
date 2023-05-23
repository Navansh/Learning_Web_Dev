import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

  const {cart} = useSelector((state)=>state)

  return (
    <div className=' '>
        <nav className=' flex items-center h-20 max-w-6xl mx-auto justify-between'>

            <NavLink to="/" className=" ml-5">
              <img src="https://codehelp-shopping-cart.netlify.app/logo.png" className=' h-14' alt='Logo'/>
            </NavLink>

            <div className=' flex items-center font-medium text-slate-100 mr-5 space-x-6'>
              <NavLink to="/">
                <p className=' text-lg'>Home</p>
              </NavLink>

              <NavLink to="/cart" className="relative">
                <FaShoppingCart className=' text-2xl'></FaShoppingCart>
                <div>
                  {
                    cart.length > 0 ? <span
                    className='absolute -top-1 -right-2 bg-green-600 h-5 w-5 flex justify-center items-center text-xs animate-bounce 
                    rounded-full text-white'>{cart.length}</span>  : <div></div>
                  }
                </div>
              </NavLink>
            </div>

        </nav>

    </div>
  )
}

export default Navbar