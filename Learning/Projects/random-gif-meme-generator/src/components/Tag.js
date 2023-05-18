 import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from '../hooks/useGif';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;

const Tag = () => {
    // const [gif, setGif] = useState("");
    // const [loading,setLoading] = useState(false)
    const [tag, setTag] = useState("car")
    
    // async function fetchData(){
    //     setLoading(true);
    //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`
    //     console.log(url)
    //     const {data} = await axios.get(url);
    //     // console.log(data)
    //     const imageSource = data.data.images.downsized_large.url;
    //     // console.log(imageSource)
    //     setGif(imageSource)
    //     setLoading(false)
    // }

    // useEffect(()=>{
    //     //sirf pehle render par hi call karna hai
    //     fetchData();
    // },[])

    const {gif, loading, fetchData} = useGif(tag);

    function clickHandler(){
        fetchData(tag)
    }

    function changeHandler(event){
        setTag(event.target.value)
    }

    function handleKeyUp(event){
        if (event.keyCode === 13) {
            fetchData(tag)
        }
    }
  return (
    <div className=' bg-blue-500 w-1/2 rounded-md border border-black flex flex-col items-center gap-y-5
    mt-[15px]'>
        <h1 className=' mt-[15px] text-3xl underline uppercase font-bold'>Random {tag} GIF</h1>

        {
            loading ? (<Spinner></Spinner>) : (<img src={gif} alt="" width="450"/>)
        }

        <input 
        type="text" 
        name="tag" id="tag"
        value={tag}
        onChange={changeHandler}
        className=' mb-[5px] w-10/12 text-lg py-3 rounded-lg text-center' 
        onKeyUp={handleKeyUp}
        />       
        <button onClick={clickHandler} className=' mb-[15px] bg-white w-10/12 text-lg py-3 rounded-lg'>Generate</button>
    </div>
  )
}

export default Tag