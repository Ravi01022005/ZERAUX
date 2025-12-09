import { useState } from 'react';
import './App.css';
import {toast,ToastContainer} from 'react-toastify'
import { Route, Routes } from 'react-router-dom';
import Header from './common/header/header';
import Landing from './pages/source/Landing';
import About from './pages/source/About';
import Services from './pages/source/Services';
import Contact from './pages/source/Contact';
import 'react-toastify/ReactToastify.css';


function App() {
  return (
    <div className="app" style={{backgroundColor:"black"}}>
   <style>
  {`
    #toast * {
      background-color: transparent !important;
    }
  `}
</style>

      <div className="content-container" style={{height:"100%",zIndex:"1"}}>
        <Header />
        <ToastContainer id="toast" className="bt mt-5" style={{backgroundColor:"transparent",color:"#FFC97A"}} />
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
