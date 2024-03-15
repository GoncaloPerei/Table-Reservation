import { useContext } from "react";
import axiosInstance from "../../../../axios";
import { AuthContext } from "../../../../context/Auth.context";

const useLogin = () => {
  const { setAuthState } = useContext(AuthContext);

  const postContent = async (email, password) => {
    try {
      const response = await axiosInstance.post("/api/users/login", {
        user_email: email,
        user_password: password,
      });
      localStorage.setItem("accessToken", response.data);
      setAuthState({
        firstname: response.data.user_first_name,
        lastname: response.data.user_last_name,
        id: response.data.id,
        status: true,
      });
    } catch (error) {
      return error;
    }
  };

  return { postContent };
};

export default useLogin;
