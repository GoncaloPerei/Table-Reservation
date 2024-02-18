import { Facebook, Instagram } from "react-bootstrap-icons";

const Navbar = () => {
  return (
    <>
      <img src={"./tr.svg"} alt="" className="w-10" />
      <div className=" flex flex-col gap-8 tracking-wider">
        <a href="/home" className="relative flex justify-center">
          <span className="text-3xl">home</span>
        </a>
        <a href="/about" className="relative flex justify-center">
          <span className="text-3xl">about us</span>
        </a>
        <a href="/reserve" className="relative flex justify-center">
          <span className="text-3xl">reserve</span>
        </a>
        <a href="/contact" className="relative flex justify-center">
          <span className="text-3xl">contact</span>
        </a>
      </div>
      <div className="relative flex gap-12">
        <a href="#">
          <Facebook className="text-3xl" />
        </a>
        <a href="#">
          <Instagram className="text-3xl" />
        </a>
      </div>
    </>
  );
};

export default Navbar;
