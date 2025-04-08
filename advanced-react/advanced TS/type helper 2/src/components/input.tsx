import { ChangeEventHandler } from "react";

type RequiredProps<T> = T | OptionalProps<T>;

type OptionalProps<T> = Partial<Record<keyof T, undefined>>;

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
