import { SlowComponent } from "./components/slow-component";
import { AdditionalComplexThings, BlaBla } from "./components/dummy-components";
import { useState } from "react";
import { Button } from "./components/button";
import { ModalDialog } from "./components/modal-dialog";
import Combined from "./components/combined";

export default function App() {
  return (
    <>
      <Combined />
      <SlowComponent />
      <BlaBla />
      <AdditionalComplexThings />
    </>
  );
}
