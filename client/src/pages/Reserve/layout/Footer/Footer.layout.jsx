import { Calendar, Map } from "../../components";

const Footer = () => {
  const mapUrl =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3003.207485868805!2d-8.553153499999999!3d41.17364149999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2463977ed1c7a5%3A0xff5873155d97676d!2sChurrascaria%20Ch%C3%A3o%20Verde!5e0!3m2!1spt-PT!2spt!4v1708310681786!5m2!1spt-PT!2spt";
  return (
    <div className="relative w-full flex gap-2.5 justify-center">
      <div className="relative w-fit border border-solid border-black/20 rounded-xl">
        <div className="flex flex-col m-6 gap-2.5 tracking-wider leading-relaxed">
          <span className="text-2xl font-montserrat font-bold uppercase">
            book a table
          </span>
          <span className="text-lg font-raleway font-medium">
            Just reserve, sit and eat
          </span>
        </div>
        <div className="w-full flex justify-between">
          <Calendar />
        </div>
      </div>
      <Map src={mapUrl} />
    </div>
  );
};

export default Footer;
