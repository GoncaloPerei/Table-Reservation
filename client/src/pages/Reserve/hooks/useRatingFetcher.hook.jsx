import { useState, useEffect } from "react";
import axiosInstance from "../../../axios";

function useRatingFetcher() {
  const [ratings, setRatings] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchContent = async () => {
    try {
      const ratingsResponse = await axiosInstance.get("/api/ratings");
      console.log(ratingsResponse.data);
      setRatings(ratingsResponse.data);
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

  return { ratings, loading };
}

export default useRatingFetcher;
