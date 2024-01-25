import { useState, useEffect, useRef } from "react";

function SetNav() {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  let menuRef = useRef();

  try {
    useEffect(() => {
      const handleOutsideClick = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
          setNav(false);
        }
      };
      document.addEventListener("mousedown", handleOutsideClick);

      return () => {
        document.removeEventListener("mousedown", handleOutsideClick);
      };
    });
  } catch (e) {
    console.log(e);
  }
}

export default SetNav;
