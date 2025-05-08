import { defer } from "react-router";
import delay from "../util/delay";

export function mainLoader() {
  return defer({ promise: delay("Fetched Data", 1000) });
}
