import styled from "styled-components";
import MenuBasis from "./menu";
import { spaceSchema } from "../common/spaces";

const justifySchema = {
  start: "flex-start",
  end: "flex-end",
  center: "center",
};

export const InlineBundle = styled.div`
  --gutter: ${({ gutter }) => spaceSchema[gutter] ?? spaceSchema.l};
  --justify: ${({ justify }) => justifySchema[justify] ?? justifySchema.start};
  --align: ${({ align }) => justifySchema[align] ?? justifySchema.start};
  display: flex;
  flex-wrap: wrap;
  gap: var(--gutter);

  justify-content: var(--justify);
  align-items: var(--align);
`;

const Menu = () => {
  return (
    <MenuBasis>
      <InlineBundle justify="end" gutter="xxl" align="top">
        <span>Books</span>
        <span>Authors</span>
        <span>Deals</span>
        <span>About Us</span>
        <span>Sign-in</span>
      </InlineBundle>
    </MenuBasis>
  );
};

export default Menu;
