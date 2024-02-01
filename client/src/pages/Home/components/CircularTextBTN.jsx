import { CheckLg } from "react-bootstrap-icons";

const CircularTextBTN = () => {
  return (
    <>
      <a href="/reserve" className="relative">
        <img src="./circulartxt.svg" className="animate-spin-slow" alt="" />
        <CheckLg className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-6xl text-[#998650]" />
      </a>
    </>
  );
};

export default CircularTextBTN;
