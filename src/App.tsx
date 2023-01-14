import './App.css';
import { HomePage } from './Pages/Homepage/Homepage';
import { NavBar } from './Pages/NavBar/NavBar';

const App = () => {
  return (
    <div className='App-Background'>
      <NavBar/>
      <HomePage/>
    </div>
  );
}

export default App;
