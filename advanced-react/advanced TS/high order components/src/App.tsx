import "./App.css";
import DisplayMouseMove from "./components/hoc/display-mouse";
import withMouseMove from "./components/hoc/withMouseMove";
import MousePosition from "./components/position";
function App() {
  const Wrapper = withMouseMove(DisplayMouseMove);
  return (
    <div className="container">
      <Wrapper />
    </div>
  );
}

export default App;
