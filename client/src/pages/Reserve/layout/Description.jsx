import { Heading } from "../components";

const Description = () => {
  return (
    <div className="w-full">
      <Heading first="restaurant" second="description" />
      <span className="text-xl font-raleway font-light leading-relaxed tracking-wider">
        O menu deste restaurante é recomendado para os amantes da culinária.
        Muitos convidados supõem do tamboril aqui é bom. Churrascaria Chão Verde
        é recomendado por causa da funcionários cortêses. O serviço é sempre
        profissional. Tem uma atmosfera quieta neste restaurante, segundo os
        visitantes.
      </span>
    </div>
  );
};

export default Description;
