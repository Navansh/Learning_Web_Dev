import './App.css';
import Pagination from './components/Pagination';
import Blogs from './components/Blogs';
import Header from './components/Header';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import { useEffect } from 'react';
import { Route, Routes, useLocation, useSearchParams } from 'react-router-dom';
import Home from '../src/Pages/Home'
import BlogPage from '../src/Pages/BlogPage'
import TagPage from './Pages/TagPage';
import CategoryPage from './Pages/CategoryPage'
 
function App() {

  const{ fetchBlogPosts } = useContext(AppContext)

  const [searchParams,setSearchParams] = useSearchParams();
  const location = useLocation()
  
  useEffect(() => {
    //Runs only on the first render
    // fetchBlogPosts()
    const page = searchParams.get("page") ?? 1
    //this means that check if the searchParameter(the URL) contains page, if yes then give me the page no.(the value associated with that) but if not then set the page value to 1

    //now we check if the pathname includes tag keyword, if it does, then we show the tag wala page
    if(location.pathname.includes("tags")){

      const tag = location.pathname.split("/").at(-1).replace("-"," ");
      //this means ki last wale slash ke baad ke value hai usko nikaal ke dedo, plus ye jo hypen hai usko bhi hata do
      // https://codehelp-blogs-context-2.netlify.app/tags/Project-Management
      // ex here : It is Agile
      //and now as we have the value of the tag, we can use the fetchBlogPosts function now 
      fetchBlogPosts(Number(page), tag);

    }else if (location.pathname.includes("categories")) {
      //say tag nhi hai par categories naam ki key hai, then we extract that category and do the API call
      const category = location.pathname.split("/").at(-1).replace("-"," ");
      fetchBlogPosts(Number(page),category) 
      
    }else { 
      //if none this happens then it means a normal API call with page no was called, hence 
      fetchBlogPosts(Number(page));
    }

  }, [location.pathname, location.search]);
  //this will run on the 1st render and every time the location.pathName, page changes

  return (
    <div className=' w-full h-full flex flex-col gap-y-1'>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/blog/:blogId' element={<BlogPage></BlogPage>}></Route>
        <Route path='/tags/:tag' element={<TagPage></TagPage>}></Route>
        <Route path='/categories/:category' element={<CategoryPage></CategoryPage>}></Route>
      </Routes>

      {/* <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination> */}
    </div>
  );
}

export default App;
