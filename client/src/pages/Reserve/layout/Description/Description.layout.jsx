import { Heading } from "../../components";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import { QuestionLg } from "react-bootstrap-icons";

const Description = () => {
  return (
    <div className="w-full flex flex-col gap-7">
      <Heading first="restaurant" second="description" />
      <span className="flex gap-2.5 text-xl font-raleway font-light leading-relaxed tracking-wider">
        <a
          href="https://pt.restaurantguru.com/Churrascaria-Chao-Verde-Rio-Tinto"
          target="_blank"
          rel="noopener noreferrer"
          className="my-anchor-element p-2 border border-solid border-black rounded-full h-fit w-fit"
        >
          <QuestionLg className="text-lg" />
        </a>
        <Tooltip
          anchorSelect=".my-anchor-element"
          className="text-normal font-raleway font-light"
          place="top-start"
          variant="dark"
          opacity={1}
        >
          <span>
            We get this information from
            <br />
            Restaurant Guru.
            <br />
            Click on the icon to see the article!
          </span>
        </Tooltip>
        The menu at this restaurant is recommended for culinary lovers.
        Churrascaria Chão Verde is advised because of the courteous staff. The
        service is always professional. It has a quiet atmosphere, according to
        visitors.
      </span>
    </div>
  );
};

export default Description;
