import { Layers } from "../1-layers-pattern/start";
import { InlineBundle } from "../5-inline-bundle-pattern/start";
import { Button } from "./components";

const HeroPage = () => {
  return (
    <div>
      <Layers gutter="l">
        <h1>CodeLicks</h1>
        <span>Learn and grow</span>
        <InlineBundle gutter="l">
          <Button primary>Enroll now</Button>
          <Button>Register</Button>
        </InlineBundle>
      </Layers>
    </div>
  );
};

export default HeroPage;
