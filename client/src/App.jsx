import React from "react";
import "./App.css";
const HomePage = React.lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./pages/Home/Home")), 1500)
    )
);
const ReservePage = React.lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./pages/Reserve/Reserve")), 1500)
    )
);
const AboutPage = React.lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./pages/About/About")), 1500)
    )
);
const ContactPage = React.lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./pages/Contact/Contact")), 1500)
    )
);
const LoginPage = React.lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./pages/Auth/Login/Login")), 1500)
    )
);
const RegisterPage = React.lazy(
  () =>
    new Promise((resolve) =>
      setTimeout(() => resolve(import("./pages/Auth/Register/Register")), 1500)
    )
);
import { Routes, Route } from "react-router-dom";
import { Loading } from "./components/index";
import { AuthContext } from "./context/Auth.context";
import useAuthState from "./hooks/useAuthState.hook";

function App() {
  const { authState, setAuthState } = useAuthState();

  return (
    <>
      <React.Suspense
        fallback={
          <>
            <Loading />
          </>
        }
      >
        <AuthContext.Provider value={{ authState, setAuthState }}>
          <Routes>
            <Route index element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/reserve" element={<ReservePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </AuthContext.Provider>
      </React.Suspense>
    </>
  );
}

export default App;
