import "./App.css";
import { SplitScren } from "./components/split-screen";

const LeftSideComponent = ({ title }) => {
  return <h2 style={{ backgroundColor: "crimson" }}>{title}</h2>;
};
const RightSideComponent = ({ title }) => {
  return <h2 style={{ backgroundColor: "yellow" }}>{title}</h2>;
};
function App() {
  return (
    <SplitScren Left={LeftSideComponent} Right={RightSideComponent}>
      <LeftSideComponent title={"Right"} />
      <RightSideComponent title={"Left"} />
    </SplitScren>
  );
}

export default App;
