import PropTypes from "prop-types";

const Map = ({ src }) => {
  return (
    <iframe
      src={src}
      className="relative w-full max-w-96"
      allowFullScreen={false}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
  );
};

Map.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Map;
