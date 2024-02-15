import { Heading } from "../components";
import useMealFetcher from "../hooks/useMealFetcher.hook";
import { MenuItem } from "../components";
import useVisibleState from "../../../hooks/useVisibleState.hook";

const Menu = () => {
  const { meals } = useMealFetcher();
  const { visible, showMoreItems, showLessItems } = useVisibleState(
    meals.length
  );

  return (
    <div className="w-full flex flex-col gap-7 items-center">
      <Heading first="restaurant" second="menu" />
      <ul
        className={`w-full max-h-96 transition-all no-scrollbar overflow-y-scroll transition-all ease-in duration-700 tracking-wider leading-relaxed flex flex-col gap-2.5`}
      >
        {meals.slice(0, visible).map((meal) => (
          <MenuItem key={meal} meal={meal} />
        ))}
      </ul>
      {visible < meals.length ? (
        <button
          onClick={showMoreItems}
          className="tracking-wider hover:before:bg-blackborder-[#998650]-500 relative w-fit text-2xl text-[#998650] font-raleway font-light rounded-xl px-16 py-5 overflow-hidden border border-[#998650] bg-transparent transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#998650] before:transition-all before:rounded-xl before:duration-500 hover:text-white hover:rounded-xl hover:before:left-0 hover:before:w-full"
        >
          <span className="relative z-10">Show all...</span>
        </button>
      ) : (
        <button
          onClick={showLessItems}
          className="tracking-wider font-raleway hover:before:bg-blackborder-[#998650]-500 relative w-fit text-2xl text-[#998650] font-raleway font-light rounded-xl px-16 py-5 overflow-hidden border border-[#998650] bg-transparent transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#998650] before:transition-all before:rounded-xl before:duration-500 hover:text-white hover:rounded-xl hover:before:left-0 hover:before:w-full"
        >
          <span className="relative z-10">Show less...</span>
        </button>
      )}
    </div>
  );
};

export default Menu;
