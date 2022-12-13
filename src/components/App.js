import React from 'react';
import NavBar from "./NavBar";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./Home";
import AboutUs from './AboutUs';
import Contact from './Contact';
import './css/App.css';

function App() {
  return (
    <div className='App'>
      <Router>
      <NavBar/> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      </Router>
      {/* <Router>                
             <Route path='/AboutUs' component={AboutUs}/>  
             <Route path='/Contact' component={Contact}/>               
             <Route path='/' component={Home}/>            
      </Router> */}
    </div>
  );
}

export default App;
