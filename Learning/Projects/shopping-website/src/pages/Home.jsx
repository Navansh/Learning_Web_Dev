import React, { useState } from 'react'
import { toast } from 'react-hot-toast';
import { useEffect } from 'react';
import Spinner from '../components/Spinner';
import Product from '../components/Product';

const Home = () => {
  const API_URL = "https://fakestoreapi.com/products";
  const [loading,setLoading] = useState(false)
  const [products,setProducts] = useState([])
  async function fetchProductData(){
    setLoading(true)
    try {
      let data = await fetch(API_URL);
      let result = await data.json()
      console.log(result)
      setProducts(result)

    } catch (error) {
      toast.error("API Call error")
      setProducts([])
    }
    setLoading(false)
  }

  useEffect(() => {
    fetchProductData()
  }, [])
  
  return (
    <div>
      {
        loading ? (<Spinner></Spinner>) : (

          products.length===0 ? (<div className=' flex justify-center items-center'>No Products Found</div>) : (
            <div className=' min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 space-x-5 space-y-10 lg:grid-cols-4 max-w-6xl mx-auto p-2 '>
              {
                products.map((product) => (
                <Product product = {product} key = {product.id} ></Product>
                ))
              }
            </div>
            

          )
        )
      }
    </div>
  )
}

export default Home