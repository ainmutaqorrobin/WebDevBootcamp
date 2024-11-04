import logo from "./logo.svg";
import "./App.css";
import CakeContainer from "./components/CakeContainer";

function App() {
  return (
    <div className="App">
      <CakeContainer number={10} age={20}/>
    </div>
  );
}

export default App;
