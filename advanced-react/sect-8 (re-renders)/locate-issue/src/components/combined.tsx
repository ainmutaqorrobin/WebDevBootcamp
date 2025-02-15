import { Button } from "./button";
import { ModalDialog } from "./modal-dialog";
import useToggleDialog from "../hooks/useDialog";

function Combined() {
  const { hide, isVisible, show } = useToggleDialog();
  console.log("render combined");

  return (
    <>
      {" "}
      <Button onClick={show}>Click</Button>
      {isVisible && <ModalDialog onClose={hide} />}
    </>
  );
}

export default Combined;
