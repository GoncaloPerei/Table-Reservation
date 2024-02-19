import {
  Heading,
  Rating,
  ShowAllBTN,
  ShowLessBTN,
  Publish,
} from "../../components";
import { Line } from "../../../../components";
import useRatingFetcher from "../../hooks/useRatingFetcher.hook";
import useVisibleState from "../../../../hooks/useVisibleState.hook";

const Ratings = () => {
  const { ratings } = useRatingFetcher();
  const { visible, showMoreItems, showLessItems } = useVisibleState(
    ratings.length
  );
  return (
    <div className="w-full flex flex-col gap-7 items-center">
      <Heading first="restaurant" second="ratings" />
      <Publish />
      <Line />
      <div className="w-full flex flex-col gap-10">
        {ratings.slice(0, visible).map((rating) => (
          <Rating key={rating} rating={rating} />
        ))}
      </div>
      {visible < ratings.length ? (
        <ShowAllBTN onClick={showMoreItems} />
      ) : ratings.length > 3 ? (
        <ShowLessBTN onClick={showLessItems} />
      ) : null}
    </div>
  );
};

export default Ratings;
