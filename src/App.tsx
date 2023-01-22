import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import { HomePage } from './Pages/Homepage/Homepage';
import { NavBar } from './Pages/NavBar/NavBar';

const App = () => {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/website/home' element={<HomePage/>}/>   
      </Routes>
    </BrowserRouter>
  );
}

export default App;
