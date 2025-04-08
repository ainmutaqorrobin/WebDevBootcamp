import { Dispatch, PropsWithChildren, useReducer } from "react";
import {
  colorReducer,
  ColorReducerAction,
  initialState,
} from "../reducer/color-reducer";
import { createContext } from "./create-context";

type ColorContextState = {
  hexColor: string;
  dispatch: Dispatch<ColorReducerAction>;
};

export const [useContext, ContextProvider] = createContext<ColorContextState>();

const useHexColor = () => {
  const { hexColor } = useContext();
  return hexColor;
};

const useDispatch = () => {
  const { dispatch } = useContext();
  return dispatch;
};

export const ColorProvider = ({ children }: PropsWithChildren) => {
  const [{ hexColor }, dispatch] = useReducer(colorReducer, initialState);

  return (
    <ContextProvider value={{ hexColor, dispatch }}>{children}</ContextProvider>
  );
};
