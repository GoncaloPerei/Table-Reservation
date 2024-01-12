import './App.css';
import {useState, useEffect} from 'react';
import Header from './components/header';
import Footer from './components/footer'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Reserve from './pages/Reserve'
import { Routes, Route } from 'react-router-dom';

function App(){
  return(
    <div>
      <Header />
      <Routes>
        <Route index element={<Home/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/reserve' element={<Reserve/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;