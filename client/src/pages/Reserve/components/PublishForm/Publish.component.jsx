import { useState } from "react";
import axiosInstance from "../../../../axios";

const Publish = () => {
  const [score, setScore] = useState("");
  const [comment, setComment] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();
    axiosInstance
      .post(
        "/api/ratings",
        {
          rating_score: score,
          rating_comment: comment,
        },
        {
          headers: {
            accessToken: localStorage.getItem("accessToken"),
          },
        }
      )
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          alert("Rating Created!!!");
        }
      });
  };

  return (
    <form
      className="w-full flex flex-col px-8 gap-6 items-end"
      onSubmit={onSubmit}
    >
      <div className="relative w-full flex gap-6">
        <input
          type="number"
          className="h-20 border border-solid border-[#808080] placeholder-[#808080] font-raleway font-light  rounded-xl px-6"
          placeholder="Score"
          onChange={(event) => {
            setScore(event.target.value);
          }}
        />
        <input
          type="text"
          className="w-full h-20 border border-solid border-[#808080] placeholder-[#808080]  font-raleway font-light rounded-xl px-6"
          placeholder="Share your thoughts about this restaurant...."
          onChange={(event) => {
            setComment(event.target.value);
          }}
        />
      </div>
      <input
        type="submit"
        value="publish"
        className="w-fit px-6 py-5 border border-solid border-[#998650] text-[#998650] rounded-xl uppercase font-raleway font-light cursor-pointer"
      />
    </form>
  );
};

export default Publish;
