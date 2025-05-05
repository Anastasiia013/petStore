import { useState, useEffect } from "react";

const useFetch = ({ requestFunction, initialData }) => {
  const [data, setData] = useState(initialData);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const { data, error } = await requestFunction();
      setLoading(false);
      if (error) {
        return setError(error.message);
      }
      setData(data);
    };

    fetchData();
  }, [requestFunction]);

  return {
    data,
    loading,
    error,
    setData,
    setLoading,
    setError,
  }
}

export default useFetch;