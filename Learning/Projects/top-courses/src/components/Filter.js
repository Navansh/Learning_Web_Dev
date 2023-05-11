import React from 'react'

export const Filter = ({filterData}) => {
  return (
    <div className='w-11/12 flex flex-wrap max-w-max space-x-4 mx-auto gap-y-4 py-4 justify-center'>
        {filterData.map( (data) => {
            //map wale function mein its good practice to pass keys  
            return (<button
            className='text-lg px-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 transition-all duration-300'    
             key={data.id}>{data.title}</button>)

        }

        )} 
    </div>
  )
}

export default Filter;
