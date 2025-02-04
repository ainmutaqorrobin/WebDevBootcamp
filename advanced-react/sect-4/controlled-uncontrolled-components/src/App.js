import { useState } from "react";
import ControlledModal from "./components/controlled.modal";
import ControlledForm from "./components/controlled-form";
import UncontrolledFlow from "./components/uncontrolled-flow";

const StepOne = ({ goNext }) => (
  <>
    <h1>Enter your name:</h1>
    <button onClick={() => goNext({ name: "Robin" })}>Next</button>
  </>
);
const StepTwo = ({ goNext }) => (
  <>
    <h1>Enter you age:</h1>
    <button onClick={() => goNext({ age: 25 })}>Next</button>
  </>
);
const StepThree = ({ goNext }) => (
  <>
    <h1>Enter country:</h1>
    <button onClick={() => goNext({ country: "Malaysia" })}>Next</button>
  </>
);

function App() {
  const [show, setShow] = useState(false);

  return (
    <>
      <UncontrolledFlow
        onDone={(data) => {
          console.log(data);
        }}
      >
        <StepOne />
        <StepTwo />
        <StepThree />
      </UncontrolledFlow>
    </>
  );
}

export default App;
