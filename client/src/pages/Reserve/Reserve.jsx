// import React from "react";
import { GeoAlt, Telephone } from "react-bootstrap-icons";

function Reserve() {
  return (
    <div className="w-full h-fit flex flex-col py-29 gap-12">
      <RestaurantImages />
      <div className="h-fit flex flex-col gap-10 mx-48">
        <RestaurantInfoHeader />
        <RestaurantInfoLinks />
        <RestaurantMainMenu />
        <RestaurantMainDescription />
        <hr className="h-px bg-black/20 border-0"></hr>
        <RestaurantMenu />
        <hr className="h-px bg-black/20 border-0"></hr>
      </div>
    </div>
  );
}

const RestaurantImages = () => {
  return (
    <div className="w-full flex max-h-96 overflow-auto .no-scrollbar">
      <img className="max-w-md object-cover" src="./chaoverde-5.jpg" alt="" />
      <img className="max-w-md object-cover" src="./chaoverde-2.jpg" alt="" />
      <img className="max-w-md object-cover" src="./chaoverde-3.jpg" alt="" />
      <img className="max-w-md object-cover" src="./chaoverde-4.jpg" alt="" />
    </div>
  );
};

const RestaurantInfoHeader = () => {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex gap-2.5 text-lg underline uppercase font-raleway leading-relaxed tracking-wider">
        <span>português</span>
        <span>cozinha tradicional</span>
      </div>
      <div className="w-auto flex justify-between leading-relaxed tracking-wider">
        <span className="text-4xl font-montserrat font-bold uppercase">
          churrascaria chão verde
        </span>
        <span className="text-3xl font-raleway font-light">
          10.0<span className="text-2xl">/10.0</span>
        </span>
      </div>
    </div>
  );
};

const RestaurantInfoLinks = () => {
  const category = [
    "closed",
    "9:30 AM–10:30 PM",
    "9:30 AM–10:30 PM",
    "9:30 AM–10:30 PM",
    "9:30 AM–10:30 PM",
    "9:30 AM–10:30 PM",
    "9:30 AM–10:30 PM",
  ];

  const weekday = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  const d = new Date();
  let isDay = weekday[d.getDay()];

  return (
    <div className="h-fit flex justify-between uppercase">
      <div className="w-fit flex flex-col gap-3.5 underline">
        <div className="w-max flex gap-2.5 items-center">
          <div className="w-fit h-fit p-2.5 border border-solid border-[#998650] rounded-xl">
            <GeoAlt className="text-2xl text-[#998650]" />
          </div>
          <a
            href="https://maps.app.goo.gl/eNHbWUUNxxUG9r7x5"
            target="blank"
            className="text-lg font-raleway leading-loose tracking-wider"
          >
            Rua Pedro Álvares Cabral 31, 4435-123 Rio Tinto
          </a>
        </div>
        <div className="w-max flex gap-2.5 items-center">
          <div className="w-fit h-fit p-2.5 border border-solid border-[#998650] rounded-xl">
            <img src="./spoon.svg" className="w-6" alt="" />
          </div>
          <span className="text-lg font-raleway leading-loose tracking-wider">
            portuguesa
          </span>
        </div>
        <div className="w-max flex gap-2.5 items-center">
          <div className="w-fit h-fit p-2.5 border border-solid border-[#998650] rounded-xl">
            <Telephone className="text-2xl text-[#998650]" />
          </div>
          <a
            href="tel:+351224803090"
            className="text-lg font-raleway leading-loose tracking-wider"
          >
            +351 22 480 3090
          </a>
        </div>
      </div>
      <div className="flex gap-16">
        <ul className="w-max h-fit leading-relaxed">
          {(() => {
            return weekday.map((day) => {
              const istoday = day === isDay;
              return (
                <li
                  key={day}
                  className={`text-lg font-raleway leading-loose tracking-wider ${
                    istoday ? "font-bold" : ""
                  }`}
                >
                  {day}
                </li>
              );
            });
          })()}
        </ul>
        <ul className="w-max h-fit">
          {category.map((type) => (
            <li
              key={type}
              className="text-lg font-raleway leading-loose tracking-wider"
            >
              {type}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const RestaurantMainMenu = () => {
  return (
    <div className="w-full h-fit flex font-montserrat font-bold text-xl">
      <a
        className={`px-6 py-4 border-b-2 border-solid border-[#75B09C] cursor-pointer uppercase tracking-wider`}
      >
        about
      </a>
      <a className={`px-6 py-4 cursor-pointer uppercase tracking-wider`}>
        menu
      </a>
      <a className={`px-6 py-4 cursor-pointer uppercase tracking-wider`}>
        ratings
      </a>
    </div>
  );
};

const RestaurantMainDescription = () => {
  return (
    <div className="w-full uppercase">
      <h1 className="text-4xl font-montserrat font-bold leading-relaxed tracking-wider mb-3.5">
        Restaurant <span className="text-[#75B09C]">Description</span>
      </h1>
      <span className="text-xl font-raleway font-light leading-relaxed tracking-wider">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum mi,
        tempus in tellus ac, ultrices aliquet urna. Nullam ac nibh orci. Proin
        imperdiet convallis dui eget scelerisque. Aenean in.
      </span>
    </div>
  );
};

const RestaurantMenu = () => {
  return (
    <div className="w-full flex flex-col gap-7 items-center uppercase">
      <h1 className="w-full text-left text-4xl font-montserrat font-bold leading-relaxed tracking-wider">
        Restaurant <span className="text-[#75B09C]">Menu</span>
      </h1>
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

export default Reserve;
