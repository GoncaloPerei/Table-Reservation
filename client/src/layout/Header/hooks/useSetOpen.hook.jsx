import { useState, useRef, useEffect } from "react";

function useSetOpen() {
  const [open, setOpen] = useState(false);
  const menuRef = useRef();

  const toggleOpen = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  useEffect(() => {
    if (open) {
      let handler = (e) => {
        if (!menuRef.current.contains(e.target)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handler);
      return () => {
        document.removeEventListener("mousedown", handler);
      };
    }
  }, [open]);

  return { open, toggleOpen, menuRef };
}

export default useSetOpen;
