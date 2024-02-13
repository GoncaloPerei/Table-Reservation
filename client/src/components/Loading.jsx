import CircleLoader from "react-spinners/CircleLoader";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#FBF751]">
      <CircleLoader size={50} color={"#000000"} />
    </div>
  );
};

export default Loading;
