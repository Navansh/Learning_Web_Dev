import React from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

const CategoryPage = () => {

  const naviagte = useNavigate()
  const location = useLocation();


  const category = location.pathname.split("/").at(-1);


  function clickHandler(){
    naviagte(-1);
  }
  return (
    <div>
      <Header></Header>

      <div className=' '>
        <button onClick={clickHandler}>
            Back
          </button>

          <h2>Blogs On <span>{category}</span></h2>
          
      </div>

      <Blogs></Blogs>
      <Pagination></Pagination>


    </div>
  )
}

export default CategoryPage