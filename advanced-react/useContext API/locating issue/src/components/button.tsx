import styled from "styled-components";
import { useNavApi } from "../context/nav-controller";
import withNavClose from "./hoc";

const ToggleButton = styled.button`
  margin-bottom: 20px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 3px;
  cursor: pointer;
`;

export const Button = () => {
  const { collapsed, toggle } = useNavApi();

  return <ToggleButton onClick={toggle}>{collapsed ? ">" : "<"}</ToggleButton>;
};
export const CloseButton = withNavClose(
  ({ closeNav }: { closeNav: () => void }) => {
    console.log("close button rendered");
    return <ToggleButton onClick={closeNav}>Close Nav</ToggleButton>;
  }
);
