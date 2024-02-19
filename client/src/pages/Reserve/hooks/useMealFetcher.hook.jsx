import { useState, useEffect } from "react";
import axiosInstance from "../../../axios";

function useMealFetcher() {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchContent = async () => {
    try {
      const mealsResponse = await axiosInstance.get("/api/meals");
      setMeals(mealsResponse.data);
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

  return { meals, loading };
}

export default useMealFetcher;
