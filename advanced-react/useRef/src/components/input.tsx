import React, { ForwardedRef, forwardRef } from "react";

interface InputProps {
  changeHandler: (val: string) => void;
}
function Input(
  { changeHandler }: InputProps,
  ref: ForwardedRef<HTMLInputElement>
) {
  return (
    <input
      type="text"
      name="username"
      ref={ref}
      onChange={(e) => changeHandler(e.target.value)}
    />
  );
}

export default forwardRef(Input);
