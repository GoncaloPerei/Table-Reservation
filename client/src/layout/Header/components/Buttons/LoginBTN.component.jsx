import { PersonFill } from "react-bootstrap-icons";

const LoginBTN = () => {
  return (
    <>
      <a
        href="/login"
        className="w-fit h-fit rounded-xl border border-black border-solid px-9 py-4 cursor-pointer flex gap-3 items-center"
      >
        <PersonFill className="text-3xl" />
        <span className="font-montserrat font-bold uppercase text-xl tracking-wider">
          login
        </span>
      </a>
    </>
  );
};

export default LoginBTN;
