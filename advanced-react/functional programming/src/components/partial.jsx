import React from "react";

function partialComponent(Component, partialProps) {
  return (props) => {
    return <Component {...partialProps} {...props} />;
  };
}

const Button = ({ size, color, text, ...props }) => {
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

export const RedButton = partialComponent(Button, { color: "red" });
export const SmallRedButton = partialComponent(RedButton, { size: "small" });
