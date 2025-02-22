import { useEffect, useState } from "react";

function useCounter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((prevState) => prevState + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [counter]);

  return null;
}

export default useCounter;
