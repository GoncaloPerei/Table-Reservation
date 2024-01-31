import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import {
  add,
  eachDayOfInterval,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameMonth,
  isToday,
  parse,
  startOfToday,
} from "date-fns";
import { useState } from "react";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Calendar = () => {
  let today = startOfToday();
  let [currentMonth, setCurrentMonth] = useState(format(today, "MMM-yyyy"));
  let firstDayCurrentMonth = parse(currentMonth, "MMM-yyyy", new Date());

  let days = eachDayOfInterval({
    start: firstDayCurrentMonth,
    end: endOfMonth(firstDayCurrentMonth),
  });

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 });
    setCurrentMonth(format(firstDayNextMonth, "MMM-yyyy"));
  }

  let colStartClasses = [
    "",
    "col-start-2",
    "col-start-3",
    "col-start-4",
    "col-start-5",
    "col-start-6",
    "col-start-7",
  ];

  return (
    <div className="mx-auto md:max-w-4xl">
      <div className="flex justify-between items-center border-y border-solid border-black/20 px-6 py-5">
        <button
          type="button"
          onClick={previousMonth}
          className="flex flex-none items-center justify-center text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Previous month</span>
          <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
        </button>
        <h2 className="text-xl font-montserrat font-bold tracking-wider">
          {format(firstDayCurrentMonth, "MMMM yyyy")}
        </h2>
        <button
          onClick={nextMonth}
          type="button"
          className="flex flex-none items-center justify-center text-gray-400 hover:text-gray-500"
        >
          <span className="sr-only">Next month</span>
          <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
        </button>
      </div>
      <div className="grid grid-cols-7 p-5 pb-0 gap-2.5 items-center text-xl text-[#998650] font-raleway font-light tracking-wider text-center">
        <div>S</div>
        <div>M</div>
        <div>T</div>
        <div>W</div>
        <div>T</div>
        <div>F</div>
        <div>S</div>
      </div>
      <div className="grid grid-cols-7 gap-2.5 p-5 text-lg">
        {days.map((day, dayIdx) => (
          <div
            key={day.toString()}
            className={classNames(dayIdx === 0 && colStartClasses[getDay(day)])}
          >
            <button
              type="button"
              className={classNames(
                isEqual(day) && isToday(day) && "bg-[#FFFFFF]",
                isEqual(day) && !isToday(day) && "bg-gray-900",
                isEqual(day) && "hover:bg-[#EDEDEF]",
                (isEqual(day) || isToday(day)) && "bg-[#FFFFFF]",
                "mx-auto flex h-12 w-12 items-center justify-center border border-solid border-[#EDEDEF] rounded text-[#808080] font-raleway font-light bg-[#EDEDEF]"
              )}
            >
              <time dateTime={format(day, "yyyy-MM-dd")}>
                {format(day, "d")}
              </time>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
