
import './App.css';
import {apiUrl,filterData} from './data';
import Filter from './components/Filter'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import Spinner from './components/Spinner';


function App() {

  const[courses,setCourses] = useState(null);
  const[loading,setLoading] = useState(true);
  const[category, setCategory] = useState(filterData[0].title);

  async function fetchData(){
    setLoading(true);

    try{
      const response = await fetch(apiUrl);
      const output = await response.json();

      //now save this data into a variable
      setCourses(output.data);
      // console.log(data.data);
    }
    catch{
      //in case of an error we raising a toast with the error 
      toast.error("Something went wrong"); 
    }
    setLoading(false);
  }

  useEffect( ()=>{
    fetchData();
  },[]); 

  return (
    <div className='flex flex-col min-h-screen bg-[#3e363f]'>
       <Navbar></Navbar>
       <div className='bg-[#3e363f]'>
          <Filter filterData={filterData} category={category} setCategory={setCategory}></Filter>
          <div 
            className='w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh ]'>
            {loading ? (<Spinner/>) : (<Cards courses={courses} category={category}></Cards>)}
            {/* Yahaan par cards mein error isliya aa rha tha, cz hamne loading ka logic nhi daala tha(not the graphics) */}
            {/* rather the Spinner to load or Cards to load as jab tak api call se fetch ho rha tab cards wale se courses ka data pass hokar */}
            {/* which initially contained null, baaki saare components par jaa rha and null par hi operations ho rhe, which is causing error  */}
          </div>
       </div>
       
    </div>
  );
}

export default App;
 