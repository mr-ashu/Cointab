import logo from './logo.svg';
import './App.css';
import { Home } from './Pages/Home';
import { Router } from './Pages/Routes';
import { Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link to="/"> <Image src="https://www.cointab.in/wp-content/uploads/2021/06/cointab_green-1.png"/></Link>
      <Router/>
    </div>
  );
}

export default App;
