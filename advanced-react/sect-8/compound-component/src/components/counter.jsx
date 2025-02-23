import { useEffect, useState } from "react";
import { emitter } from "../App";

function Counter() {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const naik = () => {
      setCounter((counter) => counter + 1);
    };
    const turun = () => {
      setCounter((counter) => counter - 1);
    };
    emitter.on("increment", naik);
    emitter.on("decrement", turun);

    return () => {
      emitter.off("increment", naik);
      emitter.off("decrement", turun);
    };
  }, []);

  return <div>Counter : {counter}</div>;
}

export default Counter;
