import Ingredients from "./components/ingredients";
import IngredientsInfoHelper from "./components/ingredients-info-helper";

function App() {
  return (
    <>
      <Ingredients ingredientsInfoHelper={<IngredientsInfoHelper />} />
    </>
  );
}

export default App;
