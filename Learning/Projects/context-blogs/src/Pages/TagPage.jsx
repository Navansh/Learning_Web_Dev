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

      <div className='flex gap-x-2 py-6  max-w-[690px] mx-auto w-11/12 mt-[100px] items-center'>

        <button className='border px-4 py-1 rounded-md'  onClick={clickHandler}>
          Back
        </button>

        <h2 className=' font-bold'>Blogs Tagged <span>{tag}</span></h2>

      </div>
      <div className=' mb-20'>
        <Blogs></Blogs>

      </div>
      <Pagination></Pagination>
    </div>
  )
}

export default TagPage