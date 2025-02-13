import React from "react";

export const Button = ({ size, color, text, ...props }) => {
  return (
    <button
      style={{
        fontSize: size === "small" ? "8px" : "32px",
        backgroundColor: color,
      }}
    >
      {text}
    </button>
  );
};

export const RedButton = (props) => {
  return <Button {...props} color={"crimson"} />;
};
export const GreenSmallButton = (props) => {
  return <Button {...props} color={"green"} size="small" />;
};

function Composition() {
  return <div>Composition</div>;
}

export default Composition;
