import { Loading } from "./icons";

const Button = ({
  isLoading,
}: // iconName,
// iconLeftColor,
// iconLeftSize,
// iconLeftAvatar,
// iconRight,
{
  isLoading: boolean;
}) => {
  return (
    <button className="button">Submit {isLoading ? <Loading /> : null}</button>
  );
};

export default Button;
