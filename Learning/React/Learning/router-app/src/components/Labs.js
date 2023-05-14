import React from 'react'
import { useNavigate } from 'react-router-dom'
const Labs = () => {
    const navigate = useNavigate();

    function clickHandler(){
        //move to about page 
        navigate("/about");
    }
  return (
    <div>
        Labs
        <button onClick={clickHandler}>Take me to the About Page</button>
    </div>
  )
}

export default Labs