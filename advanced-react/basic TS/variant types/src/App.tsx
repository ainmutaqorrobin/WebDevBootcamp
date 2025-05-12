import Alert from "./components/alert";

function App() {
  return (
    <div>
      <Alert variant="with-code" code="101" />
      <Alert variant="no-code" />

      {/* The following should show an error */}
      <Alert variant="no-code" code="500" />
    </div>
  );
}

export default App;
