import { Heading, ShowAllBTN } from "../../components";
import useMealFetcher from "../../hooks/useMealFetcher.hook";
import { MenuItem } from "../../components";
import useVisibleState from "../../../../hooks/useVisibleState.hook";
import ShowLessBTN from "../../components/Buttons/ShowLess.component";

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
        <ShowAllBTN onClick={showMoreItems} />
      ) : meals.length > 3 ? (
        <ShowLessBTN onClick={showLessItems} />
      ) : null}
    </div>
  );
};

export default Menu;
