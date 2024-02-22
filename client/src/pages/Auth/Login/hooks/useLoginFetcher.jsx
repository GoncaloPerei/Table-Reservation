import { useState, useContext } from "react";
import axiosInstance from "../../../../axios";
import { AuthContext } from "../../../../context/Auth.context";
import { useNavigate } from "react-router-dom";

const checkFields = (email, password) => {
  if (!email && !password) {
    alert("Fields are empty.");
    throw new Error("Fields are empty.");
  }
  if (!email) {
    alert("Email field is empty.");
    throw new Error("Email field is empty.");
  }
  if (!password) {
    alert("Password field is empty.");
    throw new Error("Password field is empty.");
  }
};

const useLogin = () => {
  const { setAuthState } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  const postContent = async (email, password) => {
    checkFields(email, password);
    try {
      const response = await axiosInstance.post("/api/users/login", {
        user_email: email,
        user_password: password,
      });
      if (response.data.error) {
        alert(response.data.error);
        throw new Error(response.data.error);
      } else {
        alert("Logged In!");
        localStorage.setItem("accessToken", response.data);
        setAuthState({
          firstname: response.data.user_first_name,
          lastname: response.data.user_last_name,
          id: response.data.id,
          status: true,
        });
        navigate("/");
      }
    } catch (error) {
      alert("An error ocurred.");
      console.log("An error ocurred: ", error);
    }
    setLoading(false);
  };

  return { postContent, loading };
};

export default useLogin;
