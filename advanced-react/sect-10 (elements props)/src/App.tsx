import { useState } from "react";
import Button from "./components/button";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <Button isLoading={isLoading} />
    </>
  );
}
