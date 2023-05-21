import { createContext, useEffect, useState } from "react";
import { baseUrl } from '../baseUrl'
import { useNavigate } from "react-router-dom";


export const AppContext = createContext();

export default function AppContextProvider({children}){
    
    //we dont have to explicitly send children to AppContextProvider Function
    //hence jahaan par AppContextProcider ke hum opening and closing tag lagayenge, wahaan se children(uske andar jo data hoga woh mil jayega) mil jayenge

    const [loading,setLoading] = useState(false)
    const [posts,setPosts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPages,setTotalPages] = useState(null)
    //as we currently don't know ki kitne totalPages hai hamaari Blogs mein
    const navigate = useNavigate();
    //data filling 
    async function fetchBlogPosts(page = 1,tag=null, category){
        //we've set the default value of the page to be 1
        setLoading(true)
        let url = `${baseUrl}?page=${page}`
        if(tag){
            url += `&tag=${tag}`
        } 
        if (category) {
            url += `&category=${category}`
        }
        

         console.log(url)
         try {
            const result = await fetch(url)
            const data = await result.json()
            console.log(data)
            setPage(data.page);
            setPosts(data.posts)
            setTotalPages(data.totalPages)
         } catch (error) {
            alert("Error in Fetching Data")
            setPage(1)
            setPosts([])
            setTotalPages(null)
         } 
        //this is the specific url we need for every page
        setLoading(false)
    }

    // useEffect(() => {
    //     //Runs only on the first render
    //     fetchBlogPosts(1)
    //   }, []);

    function handlePageChange(page){
        //the page in the input is the page no. we want the data of 
        navigate({search : `?page=${page}`})
        setPage(page)
        // fetchBlogPosts(page)

    }


    const value = {
        //value signifies an object which has all the required data which is to be sent 
        loading,
        setLoading,
        posts,
        setPosts,
        page,
        setPage,
        totalPages,
        setTotalPages,
        fetchBlogPosts,
        handlePageChange
    };

    //step 2 : Providing Context
    return <AppContext.Provider value={value}>
        {children}
    </AppContext.Provider>


}

