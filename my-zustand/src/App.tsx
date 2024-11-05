import "./App.css";
import { useCounterStore } from "./store";

const logCount = () => {
  const count = useCounterStore.getState().count;
  console.log(count);
};

function App() {
  const count = useCounterStore((state) => state.count);
  return <OtherComponent count={count} />;
}

const OtherComponent = ({ count }: { count: number }) => {
  const increment = useCounterStore((state) => state.incrementAsync);
  const decrement = useCounterStore((state) => state.decrement);

  return (
    <div>
      <div className="mid">{count}</div>
      <div className="mid">
        <button onClick={increment}>Increment</button>
        <button onClick={decrement}>Decrement</button>
        <button onClick={logCount}>Log Count</button>
      </div>
    </div>
  );
};
export default App;
