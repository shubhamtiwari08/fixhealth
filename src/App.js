 
import { Route, Routes } from 'react-router';
import './App.css';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import DoctosList from './Pages/DoctosList';
 

function App() {
  return (
    <div className="App bg-slate-800">
      <Navbar/>
    
     <Routes>
     <Route path="/"   element={<Home/>} />
     <Route path="/doctors/:city" element={<DoctosList/>} />
     </Routes>

    </div>
  );
}

export default App;
