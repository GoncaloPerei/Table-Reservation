import { useAuth0 } from "@auth0/auth0-react";
import useNav from "./hooks/UseNav.hook";
import Navbar from "./components/Navbar";

import { Hourglass, PersonFill } from "react-bootstrap-icons";

const Header = () => {
  const { loginWithRedirect, isAuthenticated, logout } = useAuth0();
  const { nav, handleNav, menuRef } = useNav();

  return (
    <>
      <div
        ref={menuRef}
        className="sticky top-0 w-full h-fit bg-[#FBF751] flex flex-row items-center justify-between px-20 py-4 z-50"
      >
        <div className="relative flex flex-row items-center gap-5">
          <Hourglass
            id="navbar-hamburguer"
            onClick={handleNav}
            className="text-3xl cursor-pointer"
          />
          <img src={"./tr.svg"} alt="" />
        </div>
        {(() => {
          if (isAuthenticated) {
            return (
              <button
                onClick={logout}
                className="w-fit h-fit rounded-xl border border-black border-solid px-9 py-4 cursor-pointer flex gap-3 items-center"
              >
                <PersonFill className="text-3xl" />
                <span className="font-montserrat font-bold uppercase text-xl tracking-wider">
                  Logout
                </span>
              </button>
            );
          }
          return (
            <button
              onClick={loginWithRedirect}
              className="w-fit h-fit rounded-xl border border-black border-solid px-9 py-4 cursor-pointer flex gap-3 items-center"
            >
              <PersonFill className="text-3xl" />
              <span className="font-montserrat font-bold uppercase text-xl tracking-wider">
                Login
              </span>
            </button>
          );
        })()}
        <div
          className={`absolute top-0 left-0 z-[100] bg-[#FBF751] flex flex-col items-center justify-between gap-8 w-[20%] h-screen font-raleway uppercase py-12 border-r border-black transition-all duration-500 ${
            nav ? "left-20%" : "left-[-20%]"
          }`}
        >
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Header;
