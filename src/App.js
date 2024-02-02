 
import { Route, Routes, useLocation } from 'react-router';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import DoctosList from './Pages/DoctosList';
 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

function App() {

  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const city = queryParams.get('city');


  return (
    <div className="App">
      <Navbar/>
    
     {
      city ? <DoctosList/> : <Home/>
     }
 
    <ToastContainer/>
    </div>
  );
}

export default App;
