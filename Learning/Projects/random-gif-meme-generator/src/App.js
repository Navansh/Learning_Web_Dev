import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className=' relative'>
      <div className='background h-screen w-screen absolute -z-20'></div>

      <div className='w-full h-screen flex flex-col items-center'>
        <h1 className=' bg-white rounded-lg text-4xl font-bold mt-[40px] px-3 py-3 text-center w-11/12 border border-black'>Random GIFS and MEMES</h1>
        <div className=' flex flex-col w-full items-center gap-y-10 mt-[30px]'>
          <Random></Random>
          <Tag></Tag>
        </div>
      </div>
    
    </div>
  );
}

export default App;
