export type PopupProps = { isOpen: boolean } & (
  | {
      variant: "with-controls";
      label: string;
      onClick: () => void;
    }
  | { variant: "no-controls" }
);

export type AllowedVariants = "with-controls" | "no-controls";

export const Popup = <T extends AllowedVariants>(props: PopupProps) => {
  return <></>;
};
