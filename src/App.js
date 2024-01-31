 
import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import DoctosList from './Pages/DoctosList';
 
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

function App() {
  return (
    <div className="App">
      <Navbar/>
    
     <Routes>
     <Route path="/"   element={<Home/>} />
     <Route path="/doctors" element={<DoctosList/>} />
     </Routes>
 
    <ToastContainer/>
    </div>
  );
}

export default App;
