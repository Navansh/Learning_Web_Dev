
import { useState } from 'react';
import './App.css';
import { func } from 'prop-types';

function App() {

  const [count,setCount] = useState(0);

  function decreaseHandler(){
    setCount(count-1);
  }

  function increaseHandler(){
    setCount(count+1);
  }

  function resetHandler(){
    setCount(0);
  }

  return (
    <div id="wrapper" className="w-[100vw] h-[100vh] flex justify-center items-center bg-[#a0a7ae] flex-col gap-10">
      <h1 className='text-[#0e276b] font-medium text-2xl'>Increment or Decrement Counter</h1>

      <div className='flex bg-white justify-center gap-12 py-3 rounded-sm text-[25px]text-[#0e276b]  '>
        <button className='border-r-2 w-20 text-center border-[#bfbfbf] text-5xl' onClick={decreaseHandler}>-</button>
        <div className='font-bold gap-12 text-5xl'>{count}</div>
        <button className='border-l-2 w-20 text-center border-[#bfbfbf] text-5xl' onClick={increaseHandler}>+</button>
      </div>

      <button onClick={resetHandler} className='bg-[#2789eb] text-white px-5 py-2 rounded-md text-lg'>Reset</button>
    </div>
  );
}

export default App;
