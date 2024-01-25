const btnRestaurantMenu = (props) => {
  return (
    <>
      <button
        onClick={props.click}
        className={`px-6 py-4 ${props.border} cursor-pointer uppercase tracking-wider`}
      >
        {props.name}
      </button>
    </>
  );
};

export default btnRestaurantMenu;
