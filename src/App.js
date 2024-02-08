 
import { Route, Routes, useLocation } from 'react-router';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import DoctosList from './Pages/DoctosList';
 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
 

function App() {

   const [showDoctors, setShowDoctors] = useState(false)

   const handleDoctors = (value) =>{
    setShowDoctors(value)
   }

  return (
    <div className="App">
      <Navbar handleDoctors={handleDoctors}/>
    
     {
      showDoctors ? <DoctosList/> : <Home handleDoctors={handleDoctors}/>
     }
 
    <ToastContainer/>
    </div>
  );
}

export default App;
