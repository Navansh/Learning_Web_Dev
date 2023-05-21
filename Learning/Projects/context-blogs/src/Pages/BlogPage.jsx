import React, { useContext, useEffect, useState } from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { baseUrl } from '../baseUrl'
import Spinner from '../components/Spinner'
import Card from '../components/Card'
const BlogPage = () => {

  const [currentBlog,setCurrentBlog] = useState(null)
  //this is the blog on which the user has clicked upon
  const [relatedBlogs,setRelatedBlogs] = useState([])

  const location = useLocation();
  const navigate = useNavigate();
  const {setLoading,loading} = useContext(AppContext);

  //we'll get the Blog Id from the location pathName
  const blogId = location.pathname.split("/").at(-1);

  //now we don't specifically have a function to call for the blog ID, so make the function call here 
  async function fecthRelatedBlogs(){
    setLoading(true);
    let url = `https://codehelp-apis.vercel.app/api/get-blog?blogId=${blogId}`
    //this is NOT the url of opur app, this is the url of the API we are using to get ouw data 
    console.log(url)
    try {
      let data = await fetch(url)
      let result = await data.json()
      console.log(result)
      setCurrentBlog(result.blog)
      setRelatedBlogs(result.relatedBlogs)
    } catch (error) {
      console.log("Error in Fetching Blogs")
      setCurrentBlog(null)
      setRelatedBlogs([])
    }
    setLoading(false)
  }

  useEffect(()=>{
    if(blogId){
      fecthRelatedBlogs()
    }

  },[location.pathname])

  function clickHandler(){
    navigate(-1)
  }
  return (
    <div className=''>
      <Header></Header>

      <div className='py-6  max-w-[690px] mx-auto w-11/12 mt-[100px] '>
        <button className='border px-4 py-1 rounded-md' onClick={clickHandler}>Back</button>
      </div>


      <div className='w-11/12 mx-auto max-w-[690px] scroll-smooth mb-10 justify-center items-center flex flex-col'>
        {
          loading ? (<Spinner></Spinner>) : (
            /*In this we specifically verify first that we have data of the currentBlog  */
            currentBlog ? (
              <div>
                <div className=' mb-10'>
                  <Card post={currentBlog}></Card>
                </div>
              
                <h2 className=' py-6 font-bold text-3xl'>Related Blogs</h2>
                {
                  <div className=' flex flex-col gap-y-7'> {
                      relatedBlogs.map((post)=>(
                        <Card key={post.id} post={post}></Card>
                        
                      )) 
                    }
                  </div>
                  
                }
              </div>
              ) : <p>No Blog Found</p> 
          )
        }
      </div>
    </div>
  )

  
}

export default BlogPage