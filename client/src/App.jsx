import React from "react";
import "./App.css";
const HomePage = React.lazy(() => import("./pages/Home/Home"));
const ReservePage = React.lazy(() => import("./pages/Reserve/Reserve"));
const AboutPage = React.lazy(() => import("./pages/About/About"));
const ContactPage = React.lazy(() => import("./pages/Contact/Contact"));
const LoginPage = React.lazy(() => import("./pages/Auth/Login/Login"));
const RegisterPage = React.lazy(() => import("./pages/Auth/Register/Register"));
const ProfilePage = React.lazy(() => import("./pages/Profile/Profile"));

import { Routes, Route } from "react-router-dom";
import { Loading } from "./components";
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
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </AuthContext.Provider>
      </React.Suspense>
    </>
  );
}

export default App;
