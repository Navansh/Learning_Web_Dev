import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner'
import Card from './Card'
// import Error404 from './Error404'

const Blogs = () => {

    //consuming the data 
    const {posts, loading} = useContext(AppContext)
    console.log(posts)

  return (
    <div className=' w-11/12 mx-auto max-w-[690px] scroll-smooth mb-10 justify-center items-center flex flex-col gap-y-7'>
    {
        loading ? (<Spinner></Spinner>) : (
            
                  posts.length === 0 ? (
                    <div>
                        <p>No Blogs Found</p>
                    </div>
                ) : (
                    posts.map((post) => (<Card post={post} key={post.id}/>))
                )
                
                
            
        )
    }
    </div>
  )
}

export default Blogs