import { Layers } from "../1-layers-pattern/start";
import { Grid } from "../4-grid-pattern/start";
import { InlineBundle } from "../5-inline-bundle-pattern/start";
import {
  Bottom,
  Button,
  Card,
  Description,
  Name,
  Price,
  Top,
} from "./component";

const GiftCard = () => {
  return (
    <Card>
      <Top>
        <Name>Gift Card</Name>
        <Description>This is one of our gift cards you can buy.</Description>
        <Price>$25.99</Price>
        <InlineBundle gutter="none" justify="center">
          <Button>Buy</Button>
        </InlineBundle>
      </Top>

      <Bottom>
        <Layers gutter="m">
          <span>Includes:</span>
          <ul>
            <li>This is inclusion number 1</li>
            <li>
              This is inclusion number 2 which comes after inclusion number1
            </li>
            <li>This is inclusion number 3</li>
          </ul>
        </Layers>
      </Bottom>
    </Card>
  );
};

const GiftCardList = () => {
  return (
    <Grid gutter="xl" minItemWidth="16rem">
      <GiftCard />
      <GiftCard />
      <GiftCard />
      <GiftCard />
    </Grid>
  );
};

export default GiftCardList;
