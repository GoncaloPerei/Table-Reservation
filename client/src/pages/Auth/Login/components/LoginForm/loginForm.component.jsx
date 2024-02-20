import { useState } from "react";
import axiosInstance from "../../../../../axios";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../../../context/Auth.context";
import { TextField } from "@mui/material";

function LoginForm() {
  let navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setAuthState } = useContext(AuthContext);

  const fetchContent = () => {
    console.log(email, password);
    axiosInstance
      .post("/api/users/login", {
        user_email: email,
        user_password: password,
      })
      .then((response) => {
        if (response.data.error) {
          alert(response.data.error);
        } else {
          localStorage.setItem("accessToken", response.data);
          setAuthState(true);
          alert("Logged In!");
          navigate("/");
        }
      })
      .catch((error) => {
        alert("Error fetching data:", error);
      });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchContent();
  };

  return (
    <form action="" className="flex flex-col gap-12" onSubmit={handleSubmit}>
      <div className="w-full flex flex-col gap-6">
        <TextField
          id="outlined-basic"
          label="Email"
          variant="outlined"
          type="email"
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          required={true}
        />
        <TextField
          variant="outlined"
          type="password"
          label="Password"
          onChange={(e) => {
            setPassword(e.target.value);
          }}
          required={true}
          fullWidth
        />
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
