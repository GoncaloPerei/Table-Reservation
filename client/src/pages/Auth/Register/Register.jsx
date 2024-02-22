import { Main } from "./layout";

const Register = () => {
  return (
    <div className="w-full h-screen bg-[#FBF751] flex justify-center items-center py-8">
      <div className="box-border overflow-hidden w-fit h-full bg-white px-10 py-28 uppercase flex flex-col gap-16 items-center justify-center rounded-xl">
        <img src="./tr.svg" className="w-10" />
        <div className="w-full h-full overflow-hidden flex flex-col gap-12 mx-10 px-2.5">
          <Main />
        </div>
      </div>
    </div>
  );
};

export default Register;
