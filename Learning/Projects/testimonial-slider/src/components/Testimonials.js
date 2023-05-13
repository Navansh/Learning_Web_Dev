import React, { useState } from 'react'
import Card from './Card'
import {FiChevronRight, FiChevronLeft  } from 'react-icons/fi'
import SurpriseButton from './SurpriseButton';
const Testimonials = (props) => {
  let reviews = props.reviews;

  const [index,setIndex] = useState(0);

  function leftShiftHandler(){
    if(index-1<0){
      setIndex(reviews.length - 1);
    } 
    else {
      setIndex(index-1);
    }
  }
  function rightShiftHandler(){
    let newIndex = ((index+1)%reviews.length);
    // console.log(newIndex);
    setIndex(newIndex);
  }
  function surpriseHandler(){
    console.log("clicked");
      let randIndex =  Math.floor(Math.random() * (reviews.length));
      setIndex(randIndex); 
  }

  return (
    <div className='w-[85vw] md:w-[700px] bg-white flex flex-col justify-center items-center mt-10 p-10 transition-all duration-700 rounded-md shadow-md hover:shadow-xl'>
      <Card review = {reviews[index]}></Card>

      {/* placing the buttons here as they aren't going to change based on the value paassed over to the card, so
      placing them all the data is being handled */}

      <div className=' flex text-3xl mt-7 gap-3 text-violet-400 font-bold justify-center'>
            <button className=' cursor-pointer hover:text-violet-500' onClick={leftShiftHandler}>
                <FiChevronLeft></FiChevronLeft>
            </button>
            <button className=' cursor-pointer hover:text-violet-500' onClick={rightShiftHandler}>
                <FiChevronRight></FiChevronRight>
            </button>
      </div>

      <div className=' px-10 py-2 mt-5'>
            {/* <button>Surprise Me !
            </button> */}
            <SurpriseButton onClick={surpriseHandler}>Surprise Me!</SurpriseButton>
      </div>
    </div>
  )
} 

export default Testimonials