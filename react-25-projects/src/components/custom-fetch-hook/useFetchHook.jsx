import React, { useEffect, useState } from 'react'

function useFetch(url, options ={}) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  async function fetchData() {
    try {
        setLoading(true);

        const response = await fetch(url, {...options});
        if(!response.ok) throw new Error(response.statusText);

        const result = await response.json();
        setData(result);
        setError(null);
        setLoading(false);

    } catch (e) {
        setError(`${e}. Some Error Occured`);
        setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url])

  return { data, error, loading};
}

export default useFetch
