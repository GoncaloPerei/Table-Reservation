import { useState, useRef, useEffect } from "react";

function useNav() {
  const [nav, setNav] = useState(false);
  const menuRef = useRef();

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setNav(false);
    }
  };

  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  return { nav, handleNav, menuRef };
}

export default useNav;
