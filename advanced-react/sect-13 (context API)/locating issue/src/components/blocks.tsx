import styled from "styled-components";

const BottomBlock = styled.div<{ collapsed?: boolean }>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.collapsed ? "repeat(3, 1fr)" : "repeat(2, 1fr)"};
  gap: 10px;
  margin-top: 20px;
  text-align: center;
`;
const Blocks = () => {
  return (
    <>
      <BottomBlock>
        <div>one</div>
        <div>two</div>
        <div>three</div>
      </BottomBlock>
    </>
  );
};

export default Blocks;
