import { useState, useContext } from "react";
import useRatingFetcher from "../../hooks/useRatingFetcher.hook";

import { AuthContext } from "../../../../context/Auth.context";

const emptyFields = (setScore, setComment) => {
  setScore("");
  setComment("");
};

const Publish = () => {
  const [score, setScore] = useState("");
  const [comment, setComment] = useState("");

  const { authState } = useContext(AuthContext);

  const { postContent } = useRatingFetcher();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await postContent(score.trim(), comment.trim());
    if (!response.error) {
      emptyFields(setScore, setComment);
    }
  };

  return (
    <form
      className="w-full flex flex-col px-8 gap-6 items-end"
      onSubmit={handleSubmit}
    >
      <div className="relative w-full flex gap-6">
        <input
          type="number"
          className="h-20 border border-solid border-[#808080] placeholder-[#808080] font-raleway font-light  rounded-xl px-6"
          placeholder="Score"
          onChange={(event) => {
            setScore(event.target.value);
          }}
          disabled={!authState.status}
        />
        <input
          type="text"
          className="w-full h-20 border border-solid border-[#808080] placeholder-[#808080]  font-raleway font-light rounded-xl px-6"
          placeholder="Share your thoughts about this restaurant...."
          onChange={(event) => {
            setComment(event.target.value);
          }}
          disabled={!authState.status}
        />
      </div>
      <input
        type="submit"
        value="publish"
        className="w-fit px-6 py-5 border border-solid border-[#998650] text-[#998650] rounded-xl uppercase font-raleway font-light cursor-pointer transition ease-in duration-200 hover:bg-[#998650] hover:text-white"
        disabled={!authState.status}
      />
    </form>
  );
};

export default Publish;
