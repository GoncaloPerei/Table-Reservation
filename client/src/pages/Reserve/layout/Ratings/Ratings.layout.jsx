import { Heading, Rating, ShowAllBTN, ShowLessBTN } from "../../components";
import { Line } from "../../../../components";

import useRatingFetcher from "../../hooks/useRatingFetcher.hook";
import useVisibleState from "../../../../hooks/useVisibleState.hook";

import { useState, useContext } from "react";

import { AuthContext } from "../../../../context/Auth.context";

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
        {ratings.length > 0 ? (
          ratings
            .slice(0, visible)
            .map((rating, index) => <Rating key={index} rating={rating} />)
        ) : (
          <span className="text-xl font-raleway font-light">
            No ratings in this restaurant!
          </span>
        )}
      </div>
      {visible < ratings.length ? (
        <ShowAllBTN onClick={showMoreItems} />
      ) : ratings.length > 3 ? (
        <ShowLessBTN onClick={showLessItems} />
      ) : null}
    </div>
  );
};

const Publish = () => {
  const [score, setScore] = useState("");
  const [comment, setComment] = useState("");

  const { authState } = useContext(AuthContext);

  const { postContent } = useRatingFetcher();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await postContent(score.trim(), comment.trim());
    clearFields();
  };

  const clearFields = () => {
    setScore("");
    setComment("");
  };

  return (
    <form
      className="w-full flex flex-col px-8 gap-6 items-end"
      onSubmit={handleSubmit}
    >
      <div className="relative w-full flex gap-6">
        <input
          type="number"
          className="h-20 border border-solid border-[#808080] placeholder-[#808080] font-raleway font-light text-lg rounded-xl px-6"
          placeholder="Score"
          value={score}
          onChange={(event) => {
            setScore(event.target.value);
          }}
          disabled={!authState.status}
        />
        <input
          type="text"
          className="w-full h-20 border border-solid border-[#808080] placeholder-[#808080]  font-raleway font-light text-lg rounded-xl px-6"
          placeholder="Share your thoughts about this restaurant...."
          value={comment}
          onChange={(event) => {
            setComment(event.target.value);
          }}
          disabled={!authState.status}
        />
      </div>
      <input
        type="submit"
        value="publish"
        className="w-fit px-6 py-5 border border-solid border-[#998650] text-[#998650] rounded-xl uppercase font-raleway font-light text-lg cursor-pointer transition ease-in duration-200 hover:bg-[#998650] hover:text-white"
        disabled={!authState.status}
      />
    </form>
  );
};

export default Ratings;
