import { Facebook, Instagram } from "react-bootstrap-icons";

const Footer = () => {
  return (
    <>
      <div className="w-full h-fit flex justify-between bg-[#FBF751] px-20 py-12 items-center">
        <img src={"./tr.svg"} alt="" />
        <div className="flex flex-col text-3xl leading-loose tracking-wider font-raleway">
          <a href="/home">Home</a>
          <a href="/about">About TR - Table reservation</a>
          <a href="/book">Book a table</a>
          <a href="/contact">Talk with us</a>
        </div>
        <div className="flex flex-col gap-3 font-montserrat font-bold">
          <div className="flex gap-12">
            <a href="#">
              <Facebook className="text-3xl" />
            </a>
            <a href="#">
              <Instagram className="text-3xl" />
            </a>
          </div>
          <span className="text-2xl tracking-wider leading-relaxed">
            © 2023 Gonçalo Pereira e Pedro Neves
            <br />– Todos os direitos reservados
          </span>
        </div>
      </div>
    </>
  );
};

export default Footer;
