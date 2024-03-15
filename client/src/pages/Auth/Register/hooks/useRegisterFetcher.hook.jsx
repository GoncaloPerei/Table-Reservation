import { useState } from "react";
import axiosInstance from "../../../../axios";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const [loading, setLoading] = useState(false);
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
      const userData = {
        user_first_name: firstName,
        user_last_name: lastName,
        user_phone_number: phoneNumber,
        user_email: email,
        user_password: password,
      };
      await axiosInstance.post("/api/users/register", userData);
      navigate("/login");
    } catch (error) {
      alert(error.response.data.error);
    }
    setLoading(false);
  };

  return { register, loading };
};

export default useLogin;
