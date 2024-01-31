import { Calendar } from "../components";

const Footer = () => {
  return (
    <div className="w-full flex justify-center">
      <div className="border border-solid border-black/20 rounded-xl">
        <div className="flex flex-col p-6 gap-2.5 tracking-wider leading-relaxed">
          <span className="text-2xl font-montserrat font-bold uppercase">
            book a table
          </span>
          <span className="text-lg font-raleway font-medium">
            Just reserve, sit and eat
          </span>
        </div>
        <div>
          <Calendar />
        </div>
      </div>
    </div>
  );
};

export default Footer;
