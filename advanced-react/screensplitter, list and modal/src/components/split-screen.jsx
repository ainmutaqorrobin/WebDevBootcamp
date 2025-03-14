import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

const Panel = styled.div`
  flex: ${(props) => props.flex};
`;

export const SplitScren = ({ children, leftWitdh = 1, rightWitdh = 1 }) => {
  const [left, right] = children;
  return (
    <Container>
      <Panel flex={leftWitdh}>{left}</Panel>
      <Panel flex={rightWitdh}>{right}</Panel>
    </Container>
  );
};
