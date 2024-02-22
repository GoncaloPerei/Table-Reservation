import { useState, useContext } from "react";
import axiosInstance from "../../../../axios";
import { AuthContext } from "../../../../context/Auth.context";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const { setAuthState } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const register = async (
    firstName,
    lastName,
    phoneNumber,
    email,
    password
  ) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post("/api/users/register", {
        user_first_name: firstName,
        user_last_name: lastName,
        user_phone_number: phoneNumber,
        user_email: email,
        user_password: password,
      });

      if (response.data.error) {
        setError(response.data.error);
      } else {
        localStorage.setItem("accessToken", response.data);
        setAuthState({
          firstname: response.data.user_first_name,
          lastname: response.data.user_last_name,
          email: response.data.user_email,
          phonenumber: response.data.user_phone_number,
          id: response.data.id,
          status: true,
        });
        alert("User registered");
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return { register, loading, error };
};

export default useLogin;
