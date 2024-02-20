import { Heading } from "../../components";
import useScoreFetcher from "../../hooks/useScoreFetcher.hook";

const InfoHeader = () => {
  const { score } = useScoreFetcher();
  const formattedScore = score.averageScore.toFixed(1);

  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex gap-2.5 text-lg underline uppercase font-raleway leading-relaxed tracking-wider">
        <span>portuguese</span>
        <span>traditional cuisine</span>
      </div>
      <div className="w-auto flex justify-between leading-relaxed tracking-wider">
        <Heading first="churrascaria" second="chão verde" />
        <span className="font-raleway text-3xl font-raleway font-light">
          {formattedScore}
          <span className="text-2xl">/10.0</span>
        </span>
      </div>
    </div>
  );
};

export default InfoHeader;
