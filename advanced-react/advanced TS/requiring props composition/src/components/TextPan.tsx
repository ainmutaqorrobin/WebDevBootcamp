type TextPanProps = {
  children: string;
  short?: boolean;
  expanded?: boolean;
};

const shortString = (string: string, length = 50) =>
  string.slice(0, length) + "…";

const TextPan = ({
  children,
  short = false,
  expanded = false,
}: TextPanProps) => {
  const shouldTruncate = short && !expanded;
  return (
    <div aria-expanded={!!expanded}>
      {shouldTruncate ? shortString(children) : children}
    </div>
  );
};

export default TextPan;
