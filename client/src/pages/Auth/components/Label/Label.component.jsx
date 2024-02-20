import PropTypes from "prop-types";

const LabelForm = ({ input, type, onChange }) => {
  return (
    <>
      <label
        htmlFor={input}
        className="block font-raleway font-light text-lg w-full"
      >
        {input}
        <input
          type={type}
          name={input}
          placeholder={input}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          className="block mt-1.5 text-normal border-b border-solid border-black/20 w-full outline-none py-4"
        />
      </label>
    </>
  );
};

LabelForm.propTypes = {
  input: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default LabelForm;
