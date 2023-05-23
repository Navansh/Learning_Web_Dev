import React from 'react'
import './Spinner.css'

const Spinner = () => {
  return (
    <div className=' h-screen w-screen flex justify-center items-center'>
       <div className="loader">
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
          <div className="circle" />
        </div>
    </div>
   
  )
}

export default Spinner