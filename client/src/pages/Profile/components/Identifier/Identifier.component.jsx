const identifier = ({ title, user }) => {
  return (
    <div className="w-full flex flex-col tracking-wider leading-relaxed">
      <span className="font-montserrat font-bold text-xl">{title}</span>
      <span className="font-raleway font-light text-lg">{user}</span>
    </div>
  );
};

export default identifier;
