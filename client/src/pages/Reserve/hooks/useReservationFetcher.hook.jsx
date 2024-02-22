import { useState } from "react";
import axiosInstance from "../../../axios";

function useReservationFetcher() {
  const [loading, setLoading] = useState(true);

  const postContent = async (date, number, message) => {
    try {
      const response = await axiosInstance.post(
        "/api/reservations",
        {
          reservation_date: date,
          reservation_nPersons: number,
          reservation_message: message,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      if (response.data.error) {
        throw new Error(response.data.error);
      } else {
        alert("Reservation created!");
      }
    } catch (error) {
      alert("An error ocurred.");
      console.log("An error ocurred: ", error);
    } finally {
      setLoading(false);
    }
  };

  return { postContent, loading };
}

export default useReservationFetcher;
