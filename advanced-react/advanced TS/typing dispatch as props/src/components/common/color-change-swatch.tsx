import clsx from "clsx"; // Importing clsx library for combining class names
import Button from "./button"; // Importing the Button component
import { useContext } from "../../context/context";

type ColorChangeSwatchProps = {
  hexColor: string;
  colorName?: string;
  className?: string;
};

const ColorChangeSwatch = ({
  hexColor,
  colorName,
  className,
}: ColorChangeSwatchProps) => {
  const { dispatch } = useContext();

  return (
    <Button
      className={clsx("color-input", className)} // Concatenate class names using clsx
      style={{
        // Inline CSS styles for the ColorChangeSwatch component
        backgroundColor: hexColor,
        width: "100%",
        height: "100%",
        maxHeight: "43px",
      }}
      onClick={() => dispatch({ type: "update-hex", payload: { hexColor } })} // Pass the onClick event handler to the Button component
    >
      {/* Display the colorName and hexColor */}
      {colorName}
      <br />
      {hexColor}
    </Button>
  );
};

export default ColorChangeSwatch;
