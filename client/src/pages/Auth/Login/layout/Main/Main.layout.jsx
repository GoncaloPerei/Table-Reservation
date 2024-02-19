import { LoginForm } from "../../components";

const Main = () => {
  return (
    <>
      <LoginForm />
      <span className="text-lg font-raleway font-light">
        Don&apos;t have an account?&nbsp;
        <a href="/register" className="text-[#0000FF] underline">
          sign up
        </a>
      </span>
    </>
  );
};

export default Main;
