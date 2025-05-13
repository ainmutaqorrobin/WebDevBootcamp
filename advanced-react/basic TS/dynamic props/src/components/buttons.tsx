import { ComponentPropsWithRef } from "react";

const buttonProps = {
  submit: {
    className: "submit-btn",
    type: "submit",
  },
  reset: {
    className: "reset-btn",
    type: "reset",
  },
  skip: {
    className: "skip-btn",
    type: "button",
  },
} satisfies Record<string, ComponentPropsWithRef<"button">>;

type ButtonProps = {
  variant: keyof typeof buttonProps;
};

const Button = (props: ButtonProps) => {
  return <button {...buttonProps[props.variant]}>Click me!</button>;
};

export default Button;
