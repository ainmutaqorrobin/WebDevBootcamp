import tshirt from "../../images/tshirt.jpg";
import { Description } from "./components";
import { Grid } from "../4-grid-pattern/start";

const NewProducts = () => {
  return (
    <div>
      <img src={tshirt} alt="" />
      <Description>White T-shirt - $19.99</Description>
    </div>
  );
};

const NewProductsList = () => {
  return (
    <Grid gutter="xl" minItemWidth="18rem">
      <NewProducts />
      <NewProducts />
      <NewProducts />
      <NewProducts />
    </Grid>
  );
};

export default NewProductsList;
