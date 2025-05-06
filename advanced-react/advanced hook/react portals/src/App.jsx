import { useState } from "react";
import "./App.css";
import { createPortal } from "react-dom";

function App() {
  const [show, setShow] = useState(false);

  return (
    <div
      //use onClickCapture if want to avoid event bubbling
      onClickCapture={() => console.log("outer div")}
      style={{ position: "absolute", marginTop: "200px" }}
    >
      <h1>Other Content</h1>
      <button onClick={() => setShow(true)}>Show Message</button>
      <Alert show={show} onClose={() => setShow(false)}>
        A sample message to show.
        <br />
        Click it to close.
      </Alert>
    </div>
  );
}

const Alert = ({ children, onClose, show }) => {
  if (!show) return;

  return createPortal(
    <div
      className="alert"
      onClickCapture={() => {
        onClose();
        console.log("inner div");
      }}
    >
      {children}
    </div>,
    document.querySelector("#alert-handler")
  );
};

export default App;
