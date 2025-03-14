import Card from "./components/card";
import ParentComponent from "./components/parent";
import mitt from "mitt";
export const emitter = mitt();

function App() {
  return <ParentComponent />;
}

export default App;
