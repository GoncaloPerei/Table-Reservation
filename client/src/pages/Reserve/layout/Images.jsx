const RestaurantImages = () => {
  return (
    <div className="w-full flex max-h-96 overflow-auto no-scrollbar">
      <img
        className="max-w-md object-cover"
        src="./assets/chaoverde-5.jpg"
        alt=""
      />
      <img
        className="max-w-md object-cover"
        src="./assets/chaoverde-2.jpg"
        alt=""
      />
      <img
        className="max-w-md object-cover"
        src="./assets/chaoverde-3.jpg"
        alt=""
      />
      <img
        className="max-w-md object-cover"
        src="./assets/chaoverde-4.jpg"
        alt=""
      />
    </div>
  );
};

export default RestaurantImages;
