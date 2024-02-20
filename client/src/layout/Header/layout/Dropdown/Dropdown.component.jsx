import { PersonFill, BoxArrowRight, PersonCircle } from "react-bootstrap-icons";
import { useState, useEffect, useRef } from "react";
import PropTypes from "prop-types";

const DropdownMenu = (props) => {
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
          <a href="">
            <li className="flex gap-5 items-center font-raleway font-light">
              <PersonCircle /> My Profile
            </li>
          </a>
          <button onClick={props.onClick} className="w-full">
            <li className="flex gap-5 items-center font-raleway font-light">
              <BoxArrowRight /> Logout
            </li>
          </button>
        </ul>
      </div>
    </div>
  );
};

DropdownMenu.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default DropdownMenu;
