
import './App.css';
import {apiUrl,filterData} from './data';
import Filter from './components/Filter'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';


function App() {

  const[courses,setCourses] = useState(null);

  useEffect( ()=>{
    const fetchData = async() =>{
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
    }
    fetchData();
  },[]); 

  return (
    <div>
       <Navbar></Navbar>
       <Filter filterData={filterData}></Filter>
       <Cards courses={courses}></Cards>
    </div>
  );
}

export default App;
