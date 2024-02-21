import useSetOpen from "./hooks/useSetOpen.hook";
import { Navbar, LoginBTN } from "./components";
import { Dropdown } from "./layout";

import { useContext } from "react";
import { AuthContext } from "../../context/Auth.context";

import { Hourglass } from "react-bootstrap-icons";

const Header = () => {
  const { open, toggleOpen, menuRef } = useSetOpen();

  const { authState, setAuthState } = useContext(AuthContext);

  const logout = () => {
    try {
      localStorage.removeItem("accessToken");
      setAuthState({ ...authState, status: false });
      window.location.reload();
    } catch (e) {
      alert(e);
    }
  };

  return (
    <>
      <div
        ref={menuRef}
        className="sticky top-0 w-full h-fit bg-[#FBF751] flex flex-row items-center justify-between px-20 py-4 z-50"
      >
        <div className="relative flex flex-row items-center gap-5">
          <Hourglass
            id="navbar-hamburguer"
            onClick={toggleOpen}
            className="text-3xl cursor-pointer"
          />
          <a href="/home" className="cursor-pointer">
            <img src={"./tr.svg"} alt="" />
          </a>
        </div>
        {authState.status ? <Dropdown onClick={logout} /> : <LoginBTN />}
        <div
          className={`absolute top-0 left-0 z-[100] bg-[#FBF751] flex flex-col items-center justify-between gap-8 w-[20%] h-screen font-raleway uppercase py-12 border-r border-black transition-all duration-500 ${
            open ? "left-20%" : "left-[-20%]"
          }`}
        >
          <Navbar />
        </div>
      </div>
    </>
  );
};

export default Header;
