import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About'
import Footer from './components/Footer';
import Usage from './components/Usage';
import News from './components/News';

import { BrowserRouter as Router, Routes , Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
    <Router>
    <Navbar/>
    <Routes>
    <Route path='/home' element={<Home/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/usage' element={<Usage/>}/>
      <Route path='/news' element={<News/>}/>
    
    </Routes>
    </Router>
     
      
      
      <Footer/>
      
    </div>
  );
}

export default App;
