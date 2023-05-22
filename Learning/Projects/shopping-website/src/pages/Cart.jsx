import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import CartItem from '../components/CartItem'

const Cart = () => {

  const {cart} = useSelector((state) => state)
  const [totalAmount,setTotalAmount] = useState(0)

  useEffect(()=>{
    setTotalAmount(cart.reduce((acc,curr) => acc + curr.price,0 ));
    //********This is special */
    //this applies reduce function(which is applied on Arrays)
  },[cart])

  return (
    <div>
      {
        cart.length > 0 ? ( <div>
          <div>

            {
              cart.map((item,index) =>{
                return <CartItem item = {item} key = {item.id} itemIndex = {index}></CartItem>
              })
            }

          </div>

          <div>
            <div>
                <div>Your Cart</div>
                <div>Summary</div>
                <p>
                  Total Items : <span>{cart.length}</span>
                </p>
            </div>
            
            <div>
              <p>Total Amount <span> {totalAmount} </span></p>
              <button>
                Checkout
              </button>
            </div>
            
            
          </div>
        </div> ) : ( 
          <div>
            <h1>Cart Empty</h1>
            <NavLink path="/">
              <button>
                Shop Now
              </button>
            </NavLink>
          </div>
           )
      
      }
    </div>
  )
}

export default Cart