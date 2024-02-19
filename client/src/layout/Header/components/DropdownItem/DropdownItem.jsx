import PropTypes from "prop-types";

const DropdownItem = (props) => {
  return (
    <>
      <a href="">
        <li className="flex gap-5 items-center font-raleway font-light">
          {props.icon} {props.text}
        </li>
      </a>
    </>
  );
};

DropdownItem.propTypes = {
  text: PropTypes.string.isRequired,
  icon: PropTypes.element.isRequired,
};

export default DropdownItem;
