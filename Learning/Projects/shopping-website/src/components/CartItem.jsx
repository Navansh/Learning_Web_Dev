import React from 'react'
import { MdDelete } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { remove } from '../redux/Slices/CartSlice';
import { toast } from 'react-hot-toast';

const CartItem = ({item, itemIndex,stylez}) => {
  console.log(stylez)
  const dispatch = useDispatch();

  function removeFromCart(){
    dispatch(remove(item.id))
    toast.error("Remove from Cart")
  }
  return (
    <div className='flex flex-col md:flex-row items-center p-2 md:p-5 justify-between border-slate-500 
     mt-2 mb-2 md:mx-5 gap-5 border-b-2 last:border-b-0 '>
      <div className=' w-[30%]'>
        <img src={item.image} className='object-cover ' alt="" />
      </div>

      <div className='md:ml-10 self-start space-y-5 w-[100%] md:w-[70%]'>
        <h1 className='text-xl text-slate-700 font-semibold'>{item.title}</h1>
        <p className='text-base text-slate-700 font-medium truncate'> {item.description} </p>
        <div className='flex items-center justify-between'>
          <p className='font-bold text-lg text-green-600'> ${item.price} </p>
          <div onClick={removeFromCart} className=' bg-red-200 group hover:bg-red-400 transition-transform duration-300 cursor-pointer rounded-full p-3 mr-3'>

            <MdDelete ></MdDelete>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartItem