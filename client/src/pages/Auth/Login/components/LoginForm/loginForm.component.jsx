import { useState } from "react";
import axiosInstance from "../../../../../axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../../context/Auth.context";

function LoginForm() {
  let navigate = useNavigate();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { setAuthState } = useContext(AuthContext);

  const fetchContent = async () => {
    try {
      const response = await axiosInstance.post("/api/users/login", {
        user_email: email,
        user_password: password,
      });
      if (response.data.err) {
        alert(response.data.err);
      } else {
        localStorage.setItem("accessToken", response.data);
        setAuthState(true);
        alert("Logged In!");
        navigate(-1);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchContent();
  };

  return (
    <form action="" className="flex flex-col gap-12" onSubmit={handleSubmit}>
      <div className="w-full flex flex-col gap-5">
        <label
          htmlFor=""
          className="block font-raleway font-light text-lg w-full"
        >
          email
          <input
            type="email"
            placeholder="example@gmail.com"
            className="block mt-1.5 text-normal border-b border-solid border-black/20 w-full outline-none py-4"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </label>
        <label
          htmlFor=""
          className="block font-raleway font-light text-lg w-full"
        >
          password
          <input
            type="password"
            placeholder="example123_"
            className="block mt-1.5 text-normal border-b border-solid border-black/20 w-full outline-none py-4"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </label>
      </div>
      <input
        type="submit"
        value="Sign In"
        className="w-full text-center text-normal font-montserrat font-bold uppercase bg-[#75B09C] text-white py-3.5 rounded-xl cursor-pointer"
      />
    </form>
  );
}

export default LoginForm;
