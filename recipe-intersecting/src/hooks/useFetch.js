import { useState, useEffect } from "react";

const useFetch = URL => {
  const [data, setData] = useState({
    result: null,
    loading: true,
    error: null,
    next: null
  });

  useEffect(() => {
    fetch(URL)
      .then(res => res.json())
      .then(data =>
        setData({
          result: data.hits,
          loading: false,
          error: null,
          next: data._links.next?.href
        })
      )
      .catch(error =>
        setData({
          result: null,
          loading: false,
          error,
          next: null
        })
      );
  }, [URL]);
  return data;
};

export default useFetch;
