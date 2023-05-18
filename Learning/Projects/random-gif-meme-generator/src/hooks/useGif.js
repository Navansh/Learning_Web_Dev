
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from '../components/Spinner';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`
// const tagUrl = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`



const useGif = (tag) => {
    const [gif, setGif] = useState("car");
    const [loading,setLoading] = useState(false)
  
    async function fetchData(tag){
        setLoading(true);
        // console.log(url)
        const {data} = await axios.get(tag ? (
            `${url}&tag=${tag}`
        ) : (
            `${url}`
        ));
        //which url to use depends on whether tag was passed during the use of the hook
        // console.log(data)
        const imageSource = data.data.images.downsized_large.url;
        // console.log(imageSource)
        setGif(imageSource)
        setLoading(false)
    }

    useEffect(()=>{
        //sirf pehle render par hi call karna hai
        fetchData(tag);
    },[])

    return { 
        gif, loading, fetchData
        //ye teeno cheezein use hongi, jahaan par bhi ham iss hook ko use karte hai 
    };
  //this depends on what we need the hook to do, like here we want it to return the gif (image url)
}

export default useGif