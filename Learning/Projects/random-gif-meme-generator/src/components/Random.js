import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Random = () => {

    const [gif, setGif] = useState("");
    const [loading,setLoading] = useState(false)
    
    async function fetchData(){
        setLoading(true);
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
        const {data} = await axios.get(url);
        // console.log(data)
        const imageSource = data.data.images.downsized_large.url;
        // console.log(imageSource)
        setGif(imageSource)
        setLoading(false)
    }

    useEffect(()=>{
        //sirf pehle render par hi call karna hai
        fetchData();
    },[])

    function clickHandler(){
        fetchData()
    }
  return (
    <div className=' bg-green-500 w-1/2 rounded-md border border-black flex flex-col items-center gap-y-5
    mt-[15px]'>
        <h1 className=' mt-[15px] text-3xl underline uppercase font-bold'>Random GIF</h1>

        {
            loading ? (<Spinner></Spinner>) : (<img src={gif} alt="" width="450"/>)
        }
        
        <button onClick={clickHandler} className=' mb-[15px] bg-white w-10/12 text-lg py-3 rounded-lg'>Generate</button>
    </div>
  )
}

export default Random