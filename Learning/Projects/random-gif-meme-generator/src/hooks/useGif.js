
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const randomUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`


const useGif = () => {
    const [gif, setGif] = useState("");
    const [loading,setLoading] = useState(false)
    
    async function fetchData(){
        setLoading(true);
        console.log(url)
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

  
}

export default useGif