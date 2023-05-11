import React from 'react'
import { FcLike} from 'react-icons/fc'

const Card = ({course}) => {
  return (
    <div className='w-[300px] bg-lime-200 rounded-md overflow-hidden'>
        <div className='relative'>
            <img src={course.image.url} alt="" />

            <div className='w-[40px] h-[40px] bg-white rounded-full absolute right-2 bottom-3 flex justify-center items-center'>
                <button className=''>
                    <FcLike fontSize="1.75rem"/>
                </button>
            </div>
            
        </div>
        
        <div className='p-4'>
            <p className='font-semibold text-lg leading-6'>{course.title}</p>
            <p className='mt-2'>{course.description}</p>
        </div>
     </div>
    
  )
}

export default Card