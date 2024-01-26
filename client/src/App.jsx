import React from "react";
import "./App.css";
import { Header, Footer } from "./layout";
const Home = React.lazy(() => import("./pages/Home/Home"));
const About = React.lazy(() => import("./pages/About"));
const Contact = React.lazy(() => import("./pages/Contact"));
const Reserve = React.lazy(() => import("./pages/Reserve/Reserve"));
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <React.Suspense fallback={<p>Loading page...</p>}>
        <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/book" element={<Reserve />} />
        </Routes>
        <Footer />
      </React.Suspense>
    </div>
  );
}

export default App;
