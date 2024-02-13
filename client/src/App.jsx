import React from "react";
import "./App.css";
const HomePage = React.lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./pages/Home/Home")), 2000)
    )
);
const ReservePage = React.lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./pages/Reserve/Reserve")), 2000)
    )
);
const AboutPage = React.lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./pages/About/About")), 2000)
    )
);
const ContactPage = React.lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./pages/Contact/Contact")), 2000)
    )
);
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
