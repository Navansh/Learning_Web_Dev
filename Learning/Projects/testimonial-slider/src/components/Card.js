import React from 'react'
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';

const Card = (props) => {
    let review = props.review;
  return (
    <div className='flex flex-col md:relative'>
        <div className='absolute top-[-7rem] z-[10] mx-auto'>
            <img
            className='aspect-square rounded-full w-[140px] h-[140px] z-[25]'
            src={review.image} alt="" />

            <div className='w-[150px] h-[150px] bg-violet-500 rounded-full absolute top-[-5px] left-[-5px] z-[-20]'>
                {/* this is the div for that purple circle */}
            </div>
        </div>

        <div className='text-center mt-7'>
            <p className='font-extrabold text-2xl capitalize tracking-wider '>{review.name}</p>
            <p className='uppercase text-sm text-violet-800'>{review.job}</p>
        </div>
        {/* this is for the heading name  */}

        {/* <div className='text-center mt-7'>
            
        </div> */}

        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteLeft></FaQuoteLeft>
        </div>

        <div className='text-center mt-4 text-slate-500'>
            {review.text}
        </div>

        <div className='text-violet-400 mx-auto mt-5'>
            <FaQuoteRight></FaQuoteRight>
        </div>

    </div>
  )
}

export default Card