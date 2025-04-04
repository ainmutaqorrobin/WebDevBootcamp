import { createContext, Dispatch, PropsWithChildren, useReducer } from "react";
import {
  colorReducer,
  ColorReducerAction,
  initialState,
} from "../reducer/color-reducer";

type ColorContextState = {
  hexColor: string;
  dispatch: Dispatch<ColorReducerAction>;
};

export const ColorContext = createContext<ColorContextState>({
  hexColor: "#AAAAA",
} as ColorContextState);

export const ColorProvider = ({ children }: PropsWithChildren) => {
  const [{ hexColor }, dispatch] = useReducer(colorReducer, initialState);

  return (
    <ColorContext.Provider value={{ hexColor, dispatch }}>
      {children}
    </ColorContext.Provider>
  );
};
