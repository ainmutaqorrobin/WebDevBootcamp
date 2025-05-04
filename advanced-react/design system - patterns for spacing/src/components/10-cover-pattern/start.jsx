import { Layers } from "../1-layers-pattern/start";
import { InlineBundle } from "../5-inline-bundle-pattern/start";
import { Button } from "./components";

const HeroPage = () => {
  return (
    <div>
      <InlineBundle gutter="xl" justify="end">
        <span>Home</span>
        <span>Product</span>
        <span>Blog</span>
        <span>Contact Us</span>
      </InlineBundle>

      <Layers gutter="l">
        <h1>CodeLicks</h1>
        <span>Learn and grow</span>
        <InlineBundle gutter="l">
          <Button primary>Enroll now</Button>
          <Button>Register</Button>
        </InlineBundle>
      </Layers>

      <InlineBundle gutter="xl" justify="center">
        <a href="/#">Terms and Rules</a>
      </InlineBundle>
    </div>
  );
};

export default HeroPage;
