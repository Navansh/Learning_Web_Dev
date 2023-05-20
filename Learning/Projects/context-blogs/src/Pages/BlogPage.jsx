import React, { useContext, useState } from 'react'
import Header from '../components/Header'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { baseUrl } from '../baseUrl'
const BlogPage = () => {

  const [cuurentBlog,setCurrentBlog] = useState(null)
  //this is the blog on which the user has clicked upon
  const [relatedBlogs,setRelatedBlogs] = useState([])

  const location = useLocation();
  const navigate = useNavigate();
  const {setLoading} = useContext(AppContext);

  //we'll get the Blog Id from the location pathName
  const blogId = location.pathname.split("/").at(-1);

  //now we don't specifically have a function to call for the blog ID, so make the function call here 
  async function fecthRelatedBlogs(){
    setLoading(true);
    let url = `${baseUrl}?blogId=${blogId}`
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

    }
  }
  return (
    <div>
      <Header></Header>

    </div>
  )

  
}

export default BlogPage