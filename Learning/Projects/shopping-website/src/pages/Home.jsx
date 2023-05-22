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

          products.length===0 ? (<div>No Products Found</div>) : (
            <div>
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