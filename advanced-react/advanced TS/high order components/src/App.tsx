import "./App.css";
import { useMousePosition } from "./components/hook/useMousePosition";

function App() {
  const { position, onMouseMove } = useMousePosition();
  return (
    <div className="container">
      <div className="relative-container" onMouseMove={onMouseMove}>
        <section className="absolute-section">
          <p>
            <span className="bold-span">X</span>:{position.x}
          </p>
          <p>
            <span className="bold-span">Y</span>:{position.y}
          </p>
        </section>
      </div>
    </div>
  );
}

export default App;
