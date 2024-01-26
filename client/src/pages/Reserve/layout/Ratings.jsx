import { Heading, Rating } from "../.";

const Ratings = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <Heading first="restaurant" second="ratings" />
      <div className="flex flex-col gap-10">
        <Rating />
        <Rating />
        <Rating />
      </div>
    </div>
  );
};

export default Ratings;
