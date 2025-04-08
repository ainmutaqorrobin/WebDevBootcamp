type Menu = "home" | "products" | "about";
type ButtonVariant = "primary" | "secondary";

type FlexibleMenu = FlexibleAutoComplete<Menu>;
type FlexibleButtonVariant = FlexibleAutoComplete<ButtonVariant>;

type FlexibleAutoComplete<T> = T | (string & {});

export const menus: FlexibleMenu[] = ["home", "products", "about", "other..."];

export const buttonVariants: FlexibleButtonVariant[] = [
  "primary",
  "secondary",
  "other...",
];
