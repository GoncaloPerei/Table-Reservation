import { Heading } from "../../components";

const Description = () => {
  return (
    <div className="w-full flex flex-col gap-7">
      <Heading first="restaurant" second="description" />
      <span className="text-xl font-raleway font-light leading-relaxed tracking-wider">
        The menu at this restaurant is recommended for culinary lovers.
        Churrascaria Chão Verde is advised because of the courteous staff. The
        service is always professional. It has a quiet atmosphere, according to
        visitors.
      </span>
    </div>
  );
};

export default Description;
