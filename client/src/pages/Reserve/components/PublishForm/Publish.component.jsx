const Publish = () => {
  return (
    <form className="w-full flex flex-col px-8 gap-6 items-end">
      <div className="relative w-full flex gap-6">
        <input
          type="number"
          className="h-20 border border-solid border-[#808080] placeholder-[#808080] font-raleway font-light  rounded-xl px-6"
          placeholder="Score"
        />
        <input
          type="text"
          className="w-full h-20 border border-solid border-[#808080] placeholder-[#808080]  font-raleway font-light rounded-xl px-6"
          placeholder="Share your thoughts about this restaurant...."
        />
      </div>
      <input
        type="submit"
        value="publish"
        className="w-fit px-6 py-5 border border-solid border-[#998650] text-[#998650] rounded-xl uppercase font-raleway font-light cursor-pointer"
      />
    </form>
  );
};

export default Publish;
