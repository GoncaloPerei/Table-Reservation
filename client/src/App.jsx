import React from "react";
import "./App.css";
const HomePage = React.lazy(() => import("./pages/Home/Home"));
const ReservePage = React.lazy(() => import("./pages/Reserve/Reserve"));
const AboutPage = React.lazy(() => import("./pages/About"));
const ContactPage = React.lazy(() => import("./pages/Contact/Contact"));
import { Routes, Route } from "react-router-dom";
import { Loading } from "./components/index";
function App() {
  return (
    <>
      <React.Suspense
        fallback={
          <>
            <Loading />
          </>
        }
      >
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/reserve" element={<ReservePage />} />
        </Routes>
      </React.Suspense>
    </>
  );
}

export default App;
