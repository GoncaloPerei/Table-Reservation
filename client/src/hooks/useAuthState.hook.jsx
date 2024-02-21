import { useState, useEffect } from "react";
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
  useEffect(() => {
    axiosInstance
      .get("/api/users/auth", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({ ...authState, status: false });
        } else {
          setAuthState({
            firstname: response.data.user_first_name,
            lastname: response.data.user_last_name,
            email: response.data.user_email,
            phonenumber: response.data.user_phone_number,
            id: response.data.id,
            status: true,
          });
        }
      });
  }, [authState]);

  return { authState, setAuthState };
}

export default useAuthState;
