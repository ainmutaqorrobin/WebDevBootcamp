import { rgb } from "color-convert";

export type UpdateHexAction = {
  type: "update-hex";
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
      const hexColorHex = action.payload.hexColor;
      return { ...state, hexColor: hexColorHex };

    case "update-rgb":
      const hexColorRGB = "#" + rgb.hex(action.payload.rgb);
      return { ...state, hexColor: hexColorRGB };

    default:
      return state;
  }
};
