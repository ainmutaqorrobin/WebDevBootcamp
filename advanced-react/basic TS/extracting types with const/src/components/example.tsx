const BUTTON_TYPES = {
  0: "warning",
  1: "success",
  2: "error",
} as const;

type ButtonTypes = typeof BUTTON_TYPES;
type TypesKeys = keyof ButtonTypes; // 0 | 1 | 2
type Typesvalues = ButtonTypes[TypesKeys]; // "warning" | "success" | "error"
