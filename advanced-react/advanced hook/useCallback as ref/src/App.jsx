import { useEffect, useRef, useState } from "react";

function App() {
  const [showInput, setShowInput] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <>
      <button onClick={() => setShowInput(!showInput)}>Switch</button>
      {showInput && <input type="text" ref={inputRef} />}
    </>
  );
}

export default App;
