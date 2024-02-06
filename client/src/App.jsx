import React from "react";
import "./App.css";
import { Header, Footer } from "./layout";
const HomePage = React.lazy(() => import("./pages/Home/Home"));
const ReservePage = React.lazy(() => import("./pages/Reserve/Reserve"));
const AboutPage = React.lazy(() => import("./pages/About"));
const ContactPage = React.lazy(() => import("./pages/Contact/Contact"));
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div>
      <React.Suspense fallback={<p>Loading page...</p>}>
        <Header />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/reserve" element={<ReservePage />} />
        </Routes>
        <Footer />
      </React.Suspense>
    </div>
  );
}

export default App;
