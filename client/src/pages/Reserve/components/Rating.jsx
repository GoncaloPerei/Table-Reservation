import {
  PersonFill,
  HandThumbsUp,
  HandThumbsDown,
} from "react-bootstrap-icons";

const RatingComponent = () => {
  return (
    <div className="w-full flex flex-col gap-5">
      <div className="w-full flex gap-5 items-center">
        <div className="flex items-center rounded-full border border-solid border-black p-4">
          <PersonFill className="text-2xl" />
        </div>
        <div className="w-full uppercase tracking-wider leading-relaxed">
          <div className="flex gap-2.5">
            <span className="font-montserrat font-bold">Lorem</span>
            <span className="font-raleway font-light text-[#A8A8A8]">
              1 rating
            </span>
          </div>
          <div className="w-full flex items-center justify-between">
            <span className="font-raleway font-light text-[#A8A8A8]">
              29 of november 2023
            </span>
            <span className="text-2xl font-raleway font-light">
              10.00
              <span className="text-xl">/10.0</span>
            </span>
          </div>
        </div>
      </div>
      <div>
        <span className="text-lg font-raleway font-light tracking-wider leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum
          mi, tempus in tellus ac, ultrices aliquet urna. Nullam ac nibh orci.
          Proin imperdiet convallis dui eget scelerisque. Aenean in.
        </span>
      </div>
      <div className="flex gap-5 uppercase tracking-wider leading-relaxed">
        <div className="flex items-center gap-2.5">
          <HandThumbsUp className="text-xl text-[#75B09C]" />
          <span className="text-[#75B09C]">like</span>
        </div>
        <div className="flex items-center gap-2.5">
          <HandThumbsDown className="text-xl text-[#75B09C]" />
          <span className="text-[#75B09C]">not like</span>
        </div>
      </div>
    </div>
  );
};

export default RatingComponent;
