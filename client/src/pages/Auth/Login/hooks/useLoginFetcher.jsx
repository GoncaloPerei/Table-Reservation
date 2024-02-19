import { useEffect } from "react";
import axiosInstance from "../../../../axios";

function useLoginFetcher() {
  const fetchContent = async (email, password) => {
    try {
      const data = { email: email, password: password };
      const loginResponse = await axiosInstance.post("api/users/login", data);
      console.log(loginResponse.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  useEffect(() => {
    fetchContent();

    return () => {};
  }, []);

  return fetchContent;
}

export default useLoginFetcher;
