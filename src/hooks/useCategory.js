import { useState, useEffect } from "react";
import axios from "axios";

export default function useCategory() {
  const [categories, setCategories] = useState([]);
  const [error, setError] = useState(null); // For handling errors
  const [loading, setLoading] = useState(true); // To manage loading state

  // Get categories
  const getCategories = async () => {
    try {
      const { data } = await axios.get("http://localhost:8080/api/v1/category/get-category");
      console.log(data); // Log the response for debugging
      if (data?.success) {
        setCategories(data.categories); // Use 'categories' instead of 'category'
      } else {
        setError("Failed to fetch categories.");
      }
    } catch (error) {
      console.error("Error fetching categories:", error);
      setError("An error occurred while fetching categories.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  return { categories, loading, error }; // Return loading and error states
}


