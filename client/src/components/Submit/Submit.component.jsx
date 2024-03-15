import PropTypes from "prop-types";

const Submit = ({ value, disable }) => {
  return (
    <>
      <input
        type="submit"
        value={value}
        className="w-full text-center text-normal font-montserrat font-bold uppercase transition ease-in duration-200 bg-[#75B09C] text-white py-3.5 rounded-xl cursor-pointer hover:bg-[#75B09C]/80"
        disabled={disable}
      />
    </>
  );
};

Submit.propTypes = {
  value: PropTypes.string.isRequired,
  disable: PropTypes.bool,
};

export default Submit;
