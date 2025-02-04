import { useState } from "react";
import ControlledModal from "./components/controlled.modal";

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <ControlledModal display={show} onClose={() => setShow(false)}>
        <h3>I am children of modal</h3>
      </ControlledModal>
      <button onClick={() => setShow(!show)}>
        {show ? "Hide Modal" : "Display Modal"}
      </button>
    </>
  );
}

export default App;
