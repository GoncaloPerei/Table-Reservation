import { useState, useEffect } from "react";
import axiosInstance from "../axios";

function useAuthState() {
  const [authState, setAuthState] = useState(false);
  useEffect(() => {
    axiosInstance
      .get("/api/users/auth", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState(false);
        } else {
          setAuthState(true);
        }
      });
  }, []);

  return { authState, setAuthState };
}

export default useAuthState;
