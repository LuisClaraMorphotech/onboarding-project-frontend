import { useEffect, useState } from "react";

const useFetch = <T>(url: string) => {
  const [data, setData] = useState<T | undefined>();
  const [error, setError] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      
      try {
        const res = await fetch(url);
        const responseData: T = await res.json();
        
        setData(responseData);
        setLoading(false);
      } catch (error) {
        if (error instanceof Error) {
          console.error(error.message);
          setError(error.message);
        }
        setLoading(false);
      }
    }

    fetchData();
  }, [url]);

  return { loading, error, data };
}

export default useFetch;
