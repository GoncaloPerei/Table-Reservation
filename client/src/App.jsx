import './App.css';
// import {useState, useEffect} from 'react';
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Book from './pages/Book';
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
        <Route path='/book' element={<Book/>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;