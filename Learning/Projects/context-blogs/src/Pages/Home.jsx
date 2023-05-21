import React from 'react'
import Header from '../components/Header'
import Blogs from '../components/Blogs'
import Pagination from '../components/Pagination'

const Home = () => {
  return (
    <div>
      <Header></Header>
      <div className=' mt-14 py-14'>
        <Blogs></Blogs>
      </div>
      <Pagination></Pagination>
    </div>
  )
}

export default Home