import { useUser } from "./components/use-user";

function App() {
  const state = useUser("/user");

  // if (state === "non-existing-state") {
  // }

  if (state.status === "fetching") {
    return "fetching...";
  }

  if (state.status === "fetched") {
    return "fetched";
  }

  if (state.status === "error") {
    return "Error";
  }
  return <></>;
}

export default App;
