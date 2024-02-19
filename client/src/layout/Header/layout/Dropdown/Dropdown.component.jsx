import { PersonFill, BoxArrowRight, PersonCircle } from "react-bootstrap-icons";
import { useState, useEffect, useRef } from "react";
import { DropdownItem } from "../../components";

const DropdownMenu = () => {
  const [open, setOpen] = useState(false);

  let menuRef = useRef();

  useEffect(() => {
    let handler = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setOpen(false);
        console.log(menuRef.current);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });
  return (
    <div className="menu-container" ref={menuRef}>
      <div
        className="menu-trigger"
        onClick={() => {
          setOpen(!open);
        }}
      >
        <PersonFill className="w-fit h-fit text-3xl p-4 border border-solid border-black rounded-full cursor-pointer" />
      </div>
      <div
        className={`dropdown-menu flex flex-col gap-5 ${
          open ? "active" : "inactive"
        }`}
      >
        <span className="text-lg font-montserrat font-bold tracking-wider leading-relaxed">
          Gonçalo Pereira
          <br />
          <span className="text-normal font-raleway font-light">Customer</span>
        </span>
        <ul>
          <DropdownItem
            text="My Profile"
            icon={<PersonCircle className="text-lg" />}
          />
          <DropdownItem
            text="Logout"
            icon={<BoxArrowRight className="text-lg" />}
          />
        </ul>
      </div>
    </div>
  );
};
export default DropdownMenu;
