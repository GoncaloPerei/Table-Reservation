import { Label, Submit } from "../../../components/index";
import useLoginFetcher from "./hooks/useLoginFetcher";
import { useState, useRef } from "react";
import { Alerts } from "../../../components";
import PropTypes from "prop-types";
import { Toast } from "primereact/toast";

import { useNavigate } from "react-router-dom";

const Login = () => {
  const toast = useRef(null);
  return (
    <>
      <Toast ref={toast} />
      <div className="w-full h-screen bg-[#FBF751] flex justify-center items-center py-8">
        <div className="w-fit h-full bg-white px-10 py-24 uppercase flex flex-col gap-16 items-center justify-center rounded-xl">
          <img src="./tr.svg" className="w-10" />
          <div className="w-full flex flex-col gap-12 mx-10 px-2.5">
            <span className="w-full text-center text-lg font-raleway font-light">
              insert your credentials bellow
              <br />
              to sign in...
            </span>
            <div className="flex flex-col gap-12">
              <Main toast={toast} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const Main = ({ toast }) => {
  return (
    <>
      <LoginForm toast={toast} />
      <span className="text-lg font-raleway font-light">
        Don&apos;t have an account?&nbsp;
        <a href="/register" className="text-[#0000FF] underline">
          sign up
        </a>
      </span>
    </>
  );
};

const LoginForm = ({ toast }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { postContent } = useLoginFetcher();
  const { alerts } = Alerts();
  const navigate = useNavigate();

  const checkFields = () => {
    if (!email && !password) {
      alerts(toast, "warn", "Fields are empty!", "Fields should not be empty!");
      return false;
    }
    if (!email) {
      alerts(
        toast,
        "warn",
        "Email field is empty!",
        "Email field should not be empty!"
      );
      return false;
    }
    if (!password) {
      alerts(
        toast,
        "warn",
        "Password field is empty!",
        "Password field should not be empty!"
      );
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!checkFields()) {
      return false;
    }
    try {
      const response = await postContent(email.trim(), password.trim());
      if (response) {
        throw new Error();
      }
      navigate("/");
    } catch (error) {
      alerts(
        toast,
        "error",
        "Login failed!",
        "Check if email and password are correct!"
      );
    }
  };

  return (
    <form action="" className="flex flex-col gap-12" onSubmit={handleSubmit}>
      <div className="w-full flex flex-col gap-6">
        <Label input="Email" type="text" onChange={setEmail} />
        <Label input="Password" type="password" onChange={setPassword} />
      </div>
      <Submit value="Sign In" />
    </form>
  );
};

Main.propTypes = {
  toast: PropTypes.object.isRequired,
};

LoginForm.propTypes = {
  toast: PropTypes.object.isRequired,
};

export default Login;
