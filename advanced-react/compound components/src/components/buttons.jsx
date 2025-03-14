import { emitter } from "../App";

function Buttons() {
  const onIcrement = () => {
    emitter.emit("increment");
  };

  const onDecrement = () => {
    emitter.emit("decrement");
  };
  return (
    <>
      <button onClick={onIcrement}>+</button>
      <button onClick={onDecrement}>_</button>
    </>
  );
}

export default Buttons;
