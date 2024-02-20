import { PersonFill, BoxArrowRight, PersonCircle } from "react-bootstrap-icons";
import PropTypes from "prop-types";

import useSetOpen from "../../hooks/useSetOpen.hook";

const DropdownMenu = (props) => {
  const { open, toggleOpen, menuRef } = useSetOpen();

  return (
    <div className="menu-container" ref={menuRef}>
      <div className="menu-trigger" onClick={toggleOpen}>
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
