import { Heading, Rating } from "../../components";

const Ratings = () => {
  return (
    <div className="w-full flex flex-col items-center gap-5">
      <Heading first="restaurant" second="ratings" />
      <div className="flex flex-col gap-10">
        <Rating />
        <Rating />
        <Rating />
      </div>
      <a className="tracking-wider hover:before:bg-blackborder-[#998650]-500 relative w-fit text-2xl text-[#998650] font-raleway font-light rounded-xl px-16 py-5 overflow-hidden border border-[#998650] bg-transparent transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#998650] before:transition-all before:rounded-xl before:duration-500 hover:text-white hover:rounded-xl hover:before:left-0 hover:before:w-full">
        <span className="relative z-10">See all...</span>
      </a>
    </div>
  );
};

export default Ratings;
