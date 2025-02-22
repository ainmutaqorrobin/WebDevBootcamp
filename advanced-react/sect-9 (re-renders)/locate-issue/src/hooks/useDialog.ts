import { useState } from "react";
import useCounter from "./useCounter";

function useToggleDialog() {
  const [visible, setVisible] = useState(false);
  useCounter();

  return {
    isVisible: visible,
    show: () => setVisible(true),
    hide: () => setVisible(false),
  };
}

export default useToggleDialog;
