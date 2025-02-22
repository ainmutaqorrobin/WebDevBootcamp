import { SlowComponent } from "./components/slow-component";
import { AdditionalComplexThings, BlaBla } from "./components/dummy-components";
import Combined from "./components/combined";

export default function App() {
  console.log("render");

  return (
    <>
      <Combined />
      <SlowComponent />
      <BlaBla />
      <AdditionalComplexThings />
    </>
  );
}
