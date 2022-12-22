import React from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import NavBar from "./NavBar";
import Home from './Home';
import Products from './Products';
import AboutUs from './AboutUs';
import Contact from './Contact';
import Foot from './Footer';
import './css/App.css';

function App() {
  return (
    <div className='App'>
      <Router>
      <NavBar/> 
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Contact" element={<Contact/>}/>
      </Routes>
      </Router>
      <Foot/>
    </div>
  );
}

export default App;
