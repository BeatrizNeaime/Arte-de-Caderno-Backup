import './App.css';
import About from './pages/about'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Gallery from '../src/pages/galeria/Galery'
import Main from './Components/Corpo/Main';
import NavBoot from './Components/Navbar/NavBoot'
import Login from './pages/login'

function App() {
  return (
    <div className="App">
      <Router>
        <NavBoot/>
        <Routes>
          <Route path="/sobre" element={<About/>} />
          <Route path="/" element={<Main/>} />
          <Route path="/galeria" element={<Gallery/>} />
          <Route path='/login' element={<Login/>} />
        </Routes>
      </Router>
    </div>
  );  
}

export default App;
