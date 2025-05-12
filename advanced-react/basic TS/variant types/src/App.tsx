import Alert from "./components/alert";

function App() {
  return (
    <div>
      <Alert variant="with-code" code="101" btnColor="" />
      <Alert variant="no-code" btnColor="" />

      {/* The following should show an error */}
      <Alert variant="no-code" btnColor="" />
    </div>
  );
}

export default App;
