import { useState, useEffect, useCallback } from "react";
import axiosInstance from "../../../axios";

const checkFields = (score, comment) => {
  if (!score && !comment) {
    alert("Fields are empty.");
    throw new Error("Fields are empty.");
  }
  if (!score) {
    alert("Score field is empty.");
    throw new Error("Score field is empty.");
  }
  if (score < 1 || score > 10) {
    alert("Score value ( between 1-10).");
    throw new Error("Score field is empty.");
  }
  if (!comment) {
    alert("Comment field is empty.");
    throw new Error("Comment field is empty.");
  }
};

function useRatingFetcher() {
  const [ratings, setRatings] = useState([]);

  const fetchContent = useCallback(async () => {
    try {
      const response = await axiosInstance.get("/api/ratings");
      setRatings(response.data);
    } catch (error) {
      console.error("An error ocurred: ", error);
    }
  }, [setRatings]);

  const postContent = async (score, comment) => {
    checkFields(score, comment);
    const date = new Date().toISOString().slice(0, 10);
    try {
      const response = await axiosInstance.post(
        "/api/ratings",
        {
          rating_comment: comment,
          rating_score: score,
          rating_date: date,
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
        alert("Rating created!");
        window.location.reload();
      }
    } catch (error) {
      alert("An error ocurred.");
      console.log("An error ocurred: ", error);
    }
  };

  useEffect(() => {
    fetchContent();

    return () => {};
  }, []);

  return { ratings, postContent };
}

export default useRatingFetcher;
