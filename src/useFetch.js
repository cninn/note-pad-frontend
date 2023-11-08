import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();
  const [isPending, setisPending] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const abortCont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Veriye ulaşamadık.");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setisPending(false);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("istek engellendi by the aborted function");
          } else {
            setisPending(false);
            return setError(true);
          }
        });
    }, 2000);
    return () => abortCont.abort();
  }, [url]);
  return { data, isPending, error };
};

export default useFetch;
