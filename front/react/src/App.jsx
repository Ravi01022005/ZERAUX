import { useState } from 'react';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Header from './common/header/header';
import Landing from './pages/source/Landing';
import About from './pages/source/About';
import Services from './pages/source/Services';
import Contact from './pages/source/Contact';

function App() {
  return (
    <div className="app" style={{backgroundColor:"black"}}>
      <div className="content-container" style={{height:"100%",zIndex:"1"}}>
        <Header />
        <Routes>
          <Route element={<Landing />} index />
          <Route element={<About />} path="/ABOUT" />
          <Route element={<Services />} path="/SERVICES" />
          <Route element={<Contact />} path="/CONTACT" />
        </Routes>
      </div>
    </div>
  );
}

export default App;
