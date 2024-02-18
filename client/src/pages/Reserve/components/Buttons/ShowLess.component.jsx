import PropTypes from "prop-types";

const ShowLessBTN = ({ onClick }) => {
  return (
    <>
      <button
        onClick={onClick}
        className="tracking-wider font-raleway hover:before:bg-blackborder-[#998650]-500 relative w-fit text-2xl text-[#998650] font-raleway font-light rounded-xl px-16 py-5 overflow-hidden border border-[#998650] bg-transparent transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#998650] before:transition-all before:rounded-xl before:duration-500 hover:text-white hover:rounded-xl hover:before:left-0 hover:before:w-full"
      >
        <span className="relative z-10">Show less...</span>
      </button>
    </>
  );
};

ShowLessBTN.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default ShowLessBTN;
