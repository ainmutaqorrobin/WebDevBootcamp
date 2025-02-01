import "./App.css";
import { SplitScren } from "./components/split-screen";

const LeftSideComponent = () => {
  return <h2 style={{ backgroundColor: "crimson" }}>AT LEFT</h2>;
};
const RightSideComponent = () => {
  return <h2 style={{ backgroundColor: "yellow" }}>AT RIGHT</h2>;
};
function App() {
  return <SplitScren Left={LeftSideComponent} Right={RightSideComponent} />;
}

export default App;
