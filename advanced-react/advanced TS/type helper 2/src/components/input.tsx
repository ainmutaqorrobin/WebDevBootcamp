import { ChangeEventHandler } from "react";

type RequiredProps<T extends Record<string, any>> = T | OptionalProps<T>;

type OptionalProps<T extends Record<string, any>> = Partial<
  Record<keyof T, undefined>
>;

type InputProps = RequiredProps<{
  value: string;
  onChange: ChangeEventHandler;
}> & { label: string };

const Input = ({ label, ...props }: InputProps) => {
  return (
    <div>
      <label>
        {label}
        <input {...props} />
      </label>
    </div>
  );
};

export default Input;
