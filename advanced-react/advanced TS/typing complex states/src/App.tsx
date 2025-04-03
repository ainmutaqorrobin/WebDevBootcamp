import { useUser } from "./components/use-user";
import { useUser2 } from "./components/use-user2";

function App() {
  const [status, value] = useUser2<{ name: string }>("/user");

  if (status === "fetching") {
    return <div>Fetching...</div>;
  }

  if (status === "error") {
    return <div>Error: {value.message}</div>;
  }

  return <div>{value.name}</div>;
}

export default App;
