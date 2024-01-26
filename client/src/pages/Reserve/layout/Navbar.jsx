const Menu = () => {
  return (
    <div className="w-full h-fit flex font-montserrat font-bold text-xl">
      <a
        className={`px-6 py-4 border-b-2 border-solid border-[#75B09C] cursor-pointer uppercase tracking-wider`}
      >
        about
      </a>
      <a className={`px-6 py-4 cursor-pointer uppercase tracking-wider`}>
        menu
      </a>
      <a className={`px-6 py-4 cursor-pointer uppercase tracking-wider`}>
        ratings
      </a>
    </div>
  );
};

export default Menu;
