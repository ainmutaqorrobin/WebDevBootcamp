import styled from "styled-components";
import Card from "./card";
import { spaceSchema } from "../common/spaces";

const Grid = styled.div`
  display: grid;
  gap: ${({ gutter }) => spaceSchema[gutter] ?? spaceSchema.l};

  grid-template-columns: repeat(
    auto-fit,
    minmax(${({ minItemWidth }) => minItemWidth ?? "310px"}, 1fr)
  );
`;

const Cards = () => {
  return (
    <Grid minItemWidth="250px" gutter="l">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </Grid>
  );
};

export default Cards;
