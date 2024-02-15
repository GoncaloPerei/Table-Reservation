import { Main } from "./layout";

const Login = () => {
  return (
    <div className="w-full h-screen bg-[#FBF751] flex justify-center items-center py-8">
      <div className="w-fit h-full bg-white px-10 py-24 uppercase flex flex-col gap-20 items-center justify-center rounded-xl">
        <img src="./tr.svg" className="w-10" />
        <div className="w-full flex flex-col gap-6 mx-10 px-2.5">
          <span className="w-full text-center text-lg font-raleway font-light">
            insert your credentials bellow
            <br />
            to sign in...
          </span>
          <div className="flex flex-col gap-12">
            <Main />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
