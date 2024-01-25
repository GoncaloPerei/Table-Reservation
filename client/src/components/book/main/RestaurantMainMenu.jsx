const RestaurantMainMenu = () => {
  return (
    <div className="w-full h-fit">
      <ul className="flex font-montserrat font-bold uppercase">
        <li className="border-b-2 border-solid border-[#75B09C] px-6 py-4 cursor-pointer">
          about
        </li>
        <li className="px-6 py-4 cursor-pointer">menu</li>
        <li className="px-6 py-4 cursor-pointer">rating</li>
      </ul>
    </div>
  );
};

export default RestaurantMainMenu;
