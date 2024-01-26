const heading = (props) => {
  return (
    <>
      <h1 className="w-full text-4xl font-montserrat font-bold uppercase leading-relaxed tracking-wider mb-3.5">
        {props.first} <span className="text-[#75B09C]">{props.second}</span>
      </h1>
    </>
  );
};

export default heading;
