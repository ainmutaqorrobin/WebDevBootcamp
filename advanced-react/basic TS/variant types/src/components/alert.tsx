type AlertProps = {
  variant: "no-code" | "with-code";
  code?: string;
};

const Alert = (props: AlertProps) => {
  if (props.variant === "no-code") {
    return <div>No code </div>;
  } else {
    return <div>Alert Code: {props.code}</div>;
  }
};

export default Alert;
