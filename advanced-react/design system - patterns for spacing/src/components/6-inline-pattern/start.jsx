import { InlineBundle } from "../5-inline-bundle-pattern/start";
import { Button, Logo, MenuWrapper } from "./components";

const Menu = () => {
  return (
    <MenuWrapper>
      <div>
        <div>
          <Logo />
        </div>
        <InlineBundle gutter="m" justify="center" align="center">
          <span>Books</span>
          <span>Authors</span>
          <span>Deals</span>
          <span>About Us</span>
        </InlineBundle>
        <div>
          <span>Login</span>
          <Button>Register</Button>
        </div>
      </div>
    </MenuWrapper>
  );
};

export default Menu;
