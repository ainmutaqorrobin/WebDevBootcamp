import { useState, useEffect } from "react";

type Status =
  | { status: "fetching" | "fetched" }
  | { status: "error"; error: Error };

export const useUser = (src: string) => {
  const [state, setState] = useState<Status>({ status: "fetching" });

  useEffect(() => {
    setState({ status: "fetching" });

    let aborted = false;

    fetch(src)
      .then((data) => {
        if (aborted) {
          return;
        }

        //do something with the data

        setState({ status: "fetched" });
      })
      .catch((error) => {
        if (aborted) {
          return;
        }
        setState({ status: "error", error });
      });

    return () => {
      aborted = true;
    };
  }, [src]);

  return state;
};
