import styled from "styled-components";
import { Layers } from "../1-layers-pattern/start";
import { InlineBundle } from "../5-inline-bundle-pattern/start";
import { Button } from "./components";
import { spaceSchema } from "../common/spaces";
import { Pad } from "../7-pad-pattern/start";

export const Cover = styled.div.attrs(({ children, top, bottom }) => {
  return {
    children: (
      <>
        {top && <div>{top}</div>}
        <div data-cover-child>{children}</div>
        {bottom && <div>{bottom}</div>}
      </>
    ),
  };
})`
  display: grid;
  gap: ${({ gutter }) => spaceSchema[gutter] ?? spaceSchema.l};
  min-block-size: ${({ minHeight }) => minHeight ?? "100vh"};

  grid-template-rows: ${({ top, bottom }) =>
    top && bottom
      ? "auto 1fr auto"
      : top
      ? "auto 1fr"
      : bottom
      ? "1fr auto"
      : "1fr"};

  > [data-cover-child] {
    align-self: center;
  }
`;

const Top = () => {
  return (
    <InlineBundle gutter="xl" justify="end">
      <span>Home</span>
      <span>Product</span>
      <span>Blog</span>
      <span>Contact Us</span>
    </InlineBundle>
  );
};

const Bottom = () => {
  return (
    <InlineBundle gutter="xl" justify="center">
      <a href="/#">Terms and Rules</a>
    </InlineBundle>
  );
};

const MainContent = () => {
  return (
    <Layers gutter="l">
      <h1>CodeLicks</h1>
      <span>Learn and grow</span>
      <InlineBundle gutter="l">
        <Button primary>Enroll now</Button>
        <Button>Register</Button>
      </InlineBundle>
    </Layers>
  );
};

const HeroPage = () => {
  return (
    <Cover as={Pad} padding="l" top={<Top />} bottom={<Bottom />}>
      <MainContent />
    </Cover>
  );
};

export default HeroPage;
