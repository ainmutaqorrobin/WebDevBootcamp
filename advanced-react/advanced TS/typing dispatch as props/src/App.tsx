import { useReducer, useState } from "react";
import ColorSelect from "./components/color-selector";
import SetColors from "./components/set-colors";
import ColorGroups from "./components/color-group";
import SavedColors from "./components/saved-colors";
import "./App.css";
import { colorReducer, initialState } from "./reducer/color-reducer";

function App() {
  const [{ hexColor }, dispatch] = useReducer(colorReducer, initialState);
  return (
    <div className="grid">
      <ColorSelect
        hexColor={hexColor}
        onChange={(e) =>
          dispatch({
            type: "update-hex",
            payload: { hexColor: e.target.value },
          })
        }
      />
      <SetColors dispatch={dispatch} hexColor={hexColor} />
      <ColorGroups hexColor={hexColor} />
      <SavedColors hexColor={hexColor} />
    </div>
  );
}

export default App;
