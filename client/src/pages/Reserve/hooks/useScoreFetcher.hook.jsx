import { useState, useEffect } from "react";
import axiosInstance from "../../../axios";

function useScoreFetcher() {
  const [score, setScore] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchContent = async () => {
    try {
      const scoreResponse = await axiosInstance.get("/api/ratings/sum");
      setScore(scoreResponse.data);
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

  return { score, loading };
}

export default useScoreFetcher;
