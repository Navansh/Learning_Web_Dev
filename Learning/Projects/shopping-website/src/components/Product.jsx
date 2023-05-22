import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Product = ({product}) => {

    const {cart} = useSelector((state) => state)
    const dispatch = useDispatch();


    function removeFromCart(){

    }
    function addToCart(){
      dispatch(add(product))
      
    }
  return (
    <div>
        <p>{product.title}</p>
        <p>{product.description}</p>
        <img src={`${product.image}`} alt="phyoyo"></img>
        <p>{product.price}</p>

          {
            cart.some((cartProduct) => cartProduct.id===product.id) ? <button onClick={removeFromCart}>Remove from Cart</button> : <button onClick={addToCart}>Add to Cart</button>
            /* so according to this if the product which is in the cart has the same id as the product passed on
            then, it means that it was already added to the Cart, which means Remove from Cart text should appear on the 
            button*/
          }
    </div>
  )
}

export default Product