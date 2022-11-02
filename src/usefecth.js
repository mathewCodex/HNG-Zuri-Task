import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  //creating an additional peice of state..
  const [isPending, setIsPending] = useState(true);
  //
  const [error, setError] = useState(null);
  //
  //useeffect Hook and using it to fetch data
  useEffect(() => {
    setTimeout(() => {
      fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not fetch data :(");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          setIsPending(false);
          setError(err.message);
        });
    }, 1000);
  }, [url]);

  return { data, isPending, error };
};

export default useFetch;
