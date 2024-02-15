import PropTypes from "prop-types";

const MenuItem = ({ meal }) => {
  const formattedPrice = meal.meal_price_dose.toFixed(2);

  return (
    <>
      <li className="flex uppercase justify-between font-raleway font-light text-xl border-b border-dashed border-black pb-1 mb-3.5 tracking-wider leading-relaxed">
        {meal.meal_title}
        <span className="font-bold">{formattedPrice}€</span>
      </li>
    </>
  );
};

MenuItem.propTypes = {
  meal: PropTypes.shape({
    meal_title: PropTypes.string.isRequired,
    meal_price_dose: PropTypes.number.isRequired,
  }).isRequired,
};

export default MenuItem;
