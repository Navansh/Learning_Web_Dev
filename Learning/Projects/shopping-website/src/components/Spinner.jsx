import React from 'react'
import './Spinner.css'

const Spinner = () => {
  return (
    <div className="loader">
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
        <div className="circle" />
    </div>
  )
}

export default Spinner