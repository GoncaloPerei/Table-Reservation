import { useState, useContext } from "react";
import axiosInstance from "../../../../axios";
import { AuthContext } from "../../../../context/Auth.context";
import { useNavigate } from "react-router-dom";

const useLogin = () => {
  const { setAuthState } = useContext(AuthContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const login = async (email, password) => {
    setLoading(true);
    try {
      const response = await axiosInstance.post("/api/users/login", {
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
          id: response.data.id,
          status: true,
        });
        navigate("/");
      }
    } catch (error) {
      setError(error.message);
    }
    setLoading(false);
  };

  return { login, loading, error };
};

export default useLogin;
