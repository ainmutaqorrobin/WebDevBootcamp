import { useState } from "react";
import ControlledFlow from "./components/controlled-flow";

const StepOne = ({ goNext }) => (
  <>
    <h1>Enter your name:</h1>
    <button onClick={() => goNext({ name: "Robin" })}>Next</button>
  </>
);
const StepTwo = ({ goNext }) => (
  <>
    <h1>Enter you age:</h1>
    <button onClick={() => goNext({ age: 26 })}>Next</button>
  </>
);
const StepThree = ({ goNext }) => (
  <>
    <h1>Final Page</h1>
    <button onClick={() => goNext({})}>Next</button>
  </>
);
const StepFour = ({ goNext }) => (
  <>
    <h1>Enter country:</h1>
    <button onClick={() => goNext({ country: "Malaysia" })}>Next</button>
  </>
);

function App() {
  const [data, setData] = useState({});
  const [page, setPage] = useState(0);

  function goNext(latestData) {
    setData((prevData) => ({ ...prevData, ...latestData }));
    setPage(page + 1);
    console.log(data);
  }

  return (
    <>
      <ControlledFlow
        currentPage={page}
        onNext={goNext}
        onDone={() => console.log("finished")}
      >
        <StepOne />
        <StepTwo />
        {data.age > 25 && <StepThree />}

        <StepFour />
      </ControlledFlow>
    </>
  );
}

export default App;
