import { GreenSmallButton, RedButton } from "./components/composition";
import RecursiveComponent, { Recursive } from "./components/recursive";

const myNestedObject = {
  key1: "value1",
  key2: {
    innerKey1: "innerValue1",
    innerKey2: {
      innerInnerKey1: "innerInnerValue1",
      innerInnerKey2: "innerInnerValue2",
    },
  },
  key3: "value3",
};

function App() {
  return (
    <>
      {/* <RecursiveComponent data={myNestedObject} /> */}
      <RedButton text="I am red!" />
      <GreenSmallButton text="I am small and green!" />
    </>
  );
}

export default App;
