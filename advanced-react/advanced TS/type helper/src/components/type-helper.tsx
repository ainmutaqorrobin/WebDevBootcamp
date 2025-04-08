type Menu = "home" | "products" | "about";
type ButtonVariant = "primary" | "secondary";

type FlexibleMenu = Menu | (string & {});
type FlexibleButtonVariant = ButtonVariant | (string & {});

export const menus: FlexibleMenu[] = ["home", "products", "about", "other..."];

export const buttonVariants: FlexibleButtonVariant[] = [
  "primary",
  "secondary",
  "other...",
];
