import { useState } from "react";

export const useStateObject = <T,>(initial: T) => {
  const [value, set] = useState(initial);

  return { value, set };
};

function App() {
  const example = useStateObject({ name: "state", key: 12312 });

  return <></>;
}

export default App;
