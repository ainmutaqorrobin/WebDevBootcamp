import { useState, useEffect } from "react";

type Status = "fetching" | "fetched" | "error";

export const useUser = (src: string) => {
  const [state, setState] = useState<Status>("fetching");

  useEffect(() => {
    setState("fetching");

    let aborted = false;

    fetch(src)
      .then((data) => {
        if (aborted) {
          return;
        }

        //do something with the data

        setState("fetched");
      })
      .catch((error) => {
        if (aborted) {
          return;
        }
        setState("error");
      });

    return () => {
      aborted = true;
    };
  }, [src]);

  return state;
};
