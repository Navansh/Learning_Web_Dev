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
    <div className=' w-11/12 mx-auto max-w-[690px] mt-12 py-14 flex flex-col gap-y-7 relative'>
    {
        loading ? (<Spinner  className="" ></Spinner>) : (
            
                 posts.length === 0 ? (
                    <div>
                        <p>Error 404</p>
                    </div>
                ) : (
                    posts.map((post) => (<Card post={post} key={post.id}/>))
                ) 
                
                /* <Spinner className="absolute top-5"></Spinner> */
            
        )
    }
    </div>
  )
}

export default Blogs