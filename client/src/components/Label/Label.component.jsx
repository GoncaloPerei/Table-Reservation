import PropTypes from "prop-types";

const LabelForm = ({ input, type, onChange }) => {
  return (
    <>
      <label
        htmlFor={input}
        className="block font-raleway font-bold text-lg w-full tracking-wider leading-relaxed"
      >
        {input} <span className="text-red-500">*</span>
        <input
          type={type}
          name={input}
          placeholder={input}
          onChange={(e) => {
            onChange(e.target.value);
          }}
          className="block mt-1.5 font-raleway font-light text-normal border-b border-solid border-black/20 w-full outline-none py-4 tracking-wider leading-relaxed"
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
