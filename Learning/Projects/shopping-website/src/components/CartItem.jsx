import React from 'react'
import { FcDeleteDatabase } from 'react-icons/fc'

const CartItem = ({item, itemIndex}) => {
  return (
    <div>
      <div>
        <img src={item.image} alt="" />
      </div>

      <div>
        <h1>{item.title}</h1>
        <p> {item.description} </p>
        <div>
          <p> {item.price} </p>
          <FcDeleteDatabase></FcDeleteDatabase>
        </div>
      </div>
    </div>
  )
}

export default CartItem