import Loader from "react-spinners/BeatLoader";

const Loading = () => {
  return (
    <div
      className={
        "w-screen h-screen flex items-center justify-center bg-[#FBF751]"
      }
    >
      <Loader size={30} color={"#000000"} />
    </div>
  );
};

export default Loading;
