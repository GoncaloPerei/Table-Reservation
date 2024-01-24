import { GeoAlt, Telephone } from "react-bootstrap-icons";

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

export default RestaurantInfoLinks;
