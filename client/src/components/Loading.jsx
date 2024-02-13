import DotLoader from "react-spinners/DotLoader";

const Loading = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#FBF751]">
      <DotLoader size={100} color={"#000000"} />
    </div>
  );
};

export default Loading;
