import { PersonFill, BoxArrowRight, PersonCircle } from "react-bootstrap-icons";
import PropTypes from "prop-types";

import useSetOpen from "../../hooks/useSetOpen.hook";

import { useContext } from "react";
import { AuthContext } from "../../../../context/Auth.context";

const DropdownMenu = (props) => {
  const { open, toggleOpen, menuRef } = useSetOpen();

  const { authState } = useContext(AuthContext);

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
        <span className="text-center text-lg font-montserrat font-bold tracking-wider leading-relaxed">
          {authState.firstname} {authState.lastname}
          <br />
          <span className="text-normal font-raleway font-light">Customer</span>
        </span>
        <ul>
          <a href="/profile">
            <li className="flex gap-5 items-center font-raleway font-light">
              <PersonCircle className="text-xl" /> My Profile
            </li>
          </a>
          <button onClick={props.onClick} className="w-full">
            <li className="flex gap-5 items-center font-raleway font-light">
              <BoxArrowRight className="text-xl" /> Logout
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
