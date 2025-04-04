import { rgb } from "color-convert";

type HexColor = `#${string}`;

const isHexColor = (str: string): str is HexColor => {
  return str.startsWith("#");
};

type RGBString = `rgb(${number},${number},${number})`;

type ColorFormats = "rgb" | "hex";
type ActionTypes = `update-${ColorFormats}`;

export type UpdateHexAction = {
  type: ActionTypes;
  payload: {
    hexColor: string;
  };
};

export type UpdateRGBAction = {
  type: "update-rgb";
  payload: { rgb: [number, number, number] };
};

type ColorState = { hexColor: string };

export type ColorReducerAction = UpdateHexAction | UpdateRGBAction;
export const initialState: ColorState = { hexColor: "#c2025e" };

export const colorReducer = (
  state: ColorState = initialState,
  action: ColorReducerAction
) => {
  switch (action.type) {
    case "update-hex":
      return { ...state, hexColor: action.payload.hexColor };

    case "update-rgb":
      if ("rgb" in action.payload) {
        const hexColorRGB = "#" + rgb.hex(action.payload.rgb);
        return { ...state, hexColor: hexColorRGB };
      }
      return state;

    default:
      return state;
  }
};
