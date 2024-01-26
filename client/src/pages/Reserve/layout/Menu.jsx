import { Heading } from "../.";

const Menu = () => {
  return (
    <div className="w-full flex flex-col gap-7 items-center uppercase">
      <Heading first="restaurant" second="menu" />
      <ul className="w-full tracking-wider leading-relaxed">
        <li className="flex justify-between font-raleway font-light text-xl border-b border-dashed border-black pb-1 mb-3.5">
          Lorem, ipsum.<span className="font-bold">0.00€</span>
        </li>
        <li className="flex justify-between font-raleway font-light text-xl border-b border-dashed border-black pb-1 mb-3.5">
          Lorem, ipsum.<span className="font-bold">0.00€</span>
        </li>
        <li className="flex justify-between font-raleway text-xl border-b border-dashed border-black pb-1 mb-3.5">
          Lorem, ipsum.<span className="font-bold">0.00€</span>
        </li>
      </ul>
      <a className="hover:before:bg-blackborder-[#998650]-500 relative w-fit text-2xl text-[#998650] font-raleway font-light rounded-xl px-16 py-5 overflow-hidden border border-[#998650] bg-transparent transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-[#998650] before:transition-all before:rounded-xl before:duration-500 hover:text-white hover:rounded-xl hover:before:left-0 hover:before:w-full">
        <span className="relative z-10">see all...</span>
      </a>
    </div>
  );
};

export default Menu;
