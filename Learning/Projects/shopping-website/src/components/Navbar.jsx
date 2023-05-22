import React from 'react'
import {FaShoppingCart} from 'react-icons/fa'
import { NavLink } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className=' bg-blue-600'>
        <div className=' flex justify-between'>

            <NavLink to="/">
              <img src="https://codehelp-shopping-cart.netlify.app/logo.png" height="120px" width="100px" alt='Logo'/>
            </NavLink>

            <div>
              <NavLink to="/">
                <p>Home</p>
              </NavLink>

              <NavLink to="/cart">
                <FaShoppingCart></FaShoppingCart>
              </NavLink>
            </div>

        </div>

    </div>
  )
}

export default Navbar