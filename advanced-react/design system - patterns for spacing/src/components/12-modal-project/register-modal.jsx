import React from "react";
import { Cover } from "../10-cover-pattern/start";
import { Center } from "../8-center-pattern/start";
import styled from "styled-components";
import { Layers } from "../1-layers-pattern/start";
import { Pad } from "../7-pad-pattern/start";
import { InlineBundle } from "../5-inline-bundle-pattern/start";
import closeImg from "../../images/close.svg";
import registerImg from "../../images/register.svg";

const ContentArea = styled(Layers).attrs(() => ({
  as: Pad,
  padding: "l",
  gutter: "s",
}))`
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
  background-color: rgb(255, 255, 255);
`;

const StyledImg = styled(Center).attrs(() => ({ as: "img" }))`
  max-width: ${({ maxWidth }) => maxWidth};
`;

const Text = styled(Center).attrs(() => ({ as: "span" }))`
  font-size: ${({ fontSize }) => fontSize};
`;

const StyledButton = styled(Center).attrs(() => ({ as: "button" }))`
  border-radius: 5px;
  cursor: pointer;
  background-color: #03045e;
  color: white;
  border: 3px solid transparent;
  font-size: 18px;
`;

function Modal() {
  return (
    <Cover as={Center} maxWidth="50rem">
      <ContentArea>
        <InlineBundle justify="end">
          <img src={closeImg} />
        </InlineBundle>
        <StyledImg
          src={registerImg}
          alt="person-opening-door"
          maxWidth="30rem"
        />
        <Layers gutter="l">
          <Layers gutter="s">
            <Text fontSize="2rem">Register</Text>
            <Text fontSize="1.2rem">Register and Unlock All The Features</Text>
          </Layers>
          <StyledButton>
            <Pad padding={["m", "xl"]}>Register</Pad>
          </StyledButton>
        </Layers>
      </ContentArea>
    </Cover>
  );
}

export default Modal;
