import { useValueContext } from "./cart-context";

const Display = () => {
  const { count } = useValueContext();
  return <span className="span">{count}</span>;
};

export default Display;
