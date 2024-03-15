import { useState, useEffect, useCallback } from "react";
import axiosInstance from "../axios";

function useAuthState() {
  const [authState, setAuthState] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    id: 0,
    status: false,
  });

  const fetchData = useCallback(async () => {
    try {
      const accessToken = localStorage.getItem("accessToken");

      if (!accessToken) {
        return setAuthState((prevState) => ({
          ...prevState,
          status: false,
        }));
      }

      const response = await axiosInstance.get("/api/users/auth", {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });

      if (response.data.error) {
        setAuthState((prevState) => ({
          ...prevState,
          status: false,
        }));
      } else {
        const userData = response.data;
        setAuthState({
          firstname: userData.user_first_name,
          lastname: userData.user_last_name,
          email: userData.user_email,
          phonenumber: userData.user_phone_number,
          id: userData.id,
          status: true,
        });
      }
    } catch (error) {
      console.error("An error ocurred when obtaining auth data: ", error);
      setAuthState((prevState) => ({
        ...prevState,
        status: false,
      }));
    }
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { authState, setAuthState };
}

export default useAuthState;
