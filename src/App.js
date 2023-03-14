import { Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Components/About';
import Contact from './Components/Contact';
import Header from './Components/Header';
import Home from './Components/Home';
import Project from './Components/Project';
import Services from './Components/Services';

function App() {
  return (
    
     <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/Home" element={<Home/>} />
          <Route path="/About" element={<About/>} />
          <Route path="/Project" element={<Project/>} />
          <Route path="/Services" element={<Services/>} />
          <Route path="/Contact" element={<Contact/>} />
          <Route path="/*" element="404 page not found" />
        </Routes>
      </div>
   
  );
}

export default App;
// npm install react-router-dom 