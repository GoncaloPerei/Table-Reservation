import { useState, useEffect } from "react";
import axiosInstance from "../../../axios";

function useUsersCount() {
  const [usersCount, setUsersCount] = useState();
  const [reservationsCount, setReservationsCount] = useState();
  const [loading, setLoading] = useState(true);

  const fetchContent = async () => {
    try {
      const usersResponse = await axiosInstance.get("/api/users");
      const reservationsResponse = await axiosInstance.get("/api/reservations");

      setUsersCount(usersResponse.data.length);
      setReservationsCount(reservationsResponse.data.length);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchContent();

    return () => {};
  }, []);

  return { usersCount, reservationsCount, loading };
}

export default useUsersCount;
