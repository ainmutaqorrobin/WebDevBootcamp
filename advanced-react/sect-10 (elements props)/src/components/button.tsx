import React, { ReactElement } from "react";
import { Loading } from "./icons";

const Button = ({
  icon,
  type,
  size,
}: {
  type?: string;
  icon: ReactElement;
  size?: string;
}) => {
  const defaultProps = {
    size: size === "lg" ? "lg" : "md",
    color: type === "primary" ? "white" : "black",
  };
  const newProps = {
    ...defaultProps,
    ...icon?.props,
  };

  const clonedIcon = React.cloneElement(icon, newProps);

  return <button className="button">Submit {clonedIcon}</button>;
};

export default Button;
