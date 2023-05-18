import './App.css';
import Pagination from './components/Pagination';
import Blogs from './components/Blogs';
import Header from './components/Header';


function App() {
  return (
    <div>
      <Header></Header>
      <Blogs></Blogs>
      <Pagination></Pagination>
    </div>
  );
}

export default App;
