import React from 'react'
import { toast } from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux'
import { add, remove } from '../redux/Slices/CartSlice';

const Product = ({product}) => {

    const {cart} = useSelector((state) => state);
    console.log(cart)
    const dispatch = useDispatch();

    // const cart = Object.values(carty)

    function removeFromCart(){
      dispatch(remove(product.id));
      toast.error("Item removed from Cart")
    }
    const addToCart = ()=> {
      //this is same as writing function addToCart
      dispatch(add(product))
      toast.success("Item added to the Cart")
    }

    // const isInCart = cart && cart.some((cartProduct) => cartProduct.id === product.id);
    console.log(product.id)

  return (
    <div className=' hover:scale-110 transition duration-300 ease-in flex flex-col items-center 
    justify-between shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] hover:shadow-[0px_0px_95px_53px_#00000024]
     gap-3 p-4 mt-10 ml-5  rounded-xl'>
        <p className=' text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1'>{product.title}</p>
        <p className=' w-40 text-gray-400 font-normal text-[10px] text-left'>{product.description.split(" ").slice(0,10).join(" ")+"..."}</p>
        <img className=' h-[180px] object-contain' src={`${product.image}`} alt="photox"></img>

        <div className=' flex items-center justify-between w-full mt-5'>
          <p className=' text-green-600 font-semibold '>${product.price}</p>

          {
            <div className='transition duration-300 ease-in text-gray-700 border-2 border-gray-700 
             hover:bg-gray-700 hover:text-white rounded-full font-semibold p-1 px-3 text-[12px] uppercase tracking-wide'> 
            {
              cart.some((cartProduct) => cartProduct.id === product.id) ? <button onClick={removeFromCart}>Remove Item</button> : <button onClick={addToCart}>Add to Cart</button>
              /* so according to this if the product which is in the cart has the same id as the product passed on
              then, it means that it was already added to the Cart, which means Remove from Cart text should appear on the 

              button*/
            } 
            </div>
          }
        </div>
        
    </div>
  )
}

export default Product