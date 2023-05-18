import './App.css';
import Pagination from './components/Pagination';
import Blogs from './components/Blogs';
import Header from './components/Header';
import { useContext } from 'react';
import { AppContext } from './context/AppContext';
import { useEffect } from 'react';
 
function App() {

  const{ fetchBlogPosts } = useContext(AppContext)
  
  useEffect(() => {
    //Runs only on the first render
    fetchBlogPosts()
  }, []);

  return (
    <div className=' w-full h-full flex flex-col gap-y-1 justify-center items-center'>
      <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>
  );
}

export default App;
