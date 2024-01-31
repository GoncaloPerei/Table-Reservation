import { Heading } from "../components";

const Description = () => {
  return (
    <div className="w-full">
      <Heading first="restaurant" second="description" />
      <span className="text-xl font-raleway font-light leading-relaxed tracking-wider">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ipsum mi,
        tempus in tellus ac, ultrices aliquet urna. Nullam ac nibh orci. Proin
        imperdiet convallis dui eget scelerisque. Aenean in.
      </span>
    </div>
  );
};

export default Description;
