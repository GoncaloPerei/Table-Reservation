const category = [
  "09:30 AM–02:30 PM",
  "closed",
  "09:30 AM–10:30 PM",
  "09:30 AM–10:30 PM",
  "09:30 AM–10:30 PM",
  "09:30 AM–10:30 PM",
  "09:30 AM–10:30 PM",
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

const Schedule = () => {
  return (
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
  );
};

export default Schedule;
