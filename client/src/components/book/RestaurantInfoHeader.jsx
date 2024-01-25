const RestaurantInfoHeader = () => {
  return (
    <div className="flex flex-col gap-3.5">
      <div className="flex gap-2.5 text-lg underline uppercase font-raleway leading-relaxed tracking-wider">
        <span>português</span>
        <span>cozinha tradicional</span>
      </div>
      <div className="w-auto flex justify-between leading-relaxed tracking-wider">
        <span className="text-4xl font-montserrat font-bold uppercase">
          churrascaria chão verde
        </span>
        <span className="text-3xl font-raleway font-light">
          10.0<span className="text-2xl">/10.0</span>
        </span>
      </div>
    </div>
  );
};

export default RestaurantInfoHeader;
