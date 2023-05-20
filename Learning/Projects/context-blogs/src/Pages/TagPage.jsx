import React from 'react'
import Header from '../components/Header'
import Pagination from '../components/Pagination'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs'

const TagPage = () => {

  const naviagte = useNavigate();
  const location = useLocation();

  const tag = location.pathname.split("/").at(-1);


  function clickHandler(){
    naviagte(-1);
  }
  return (
    <div>
      <Header></Header>

      <div className=''>

        <button onClick={clickHandler}>
          Back
        </button>

        <h2>Blogs Tagged <span>3{tag}</span></h2>

      </div>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>
  )
}

export default TagPage