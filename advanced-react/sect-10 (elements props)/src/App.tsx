import { useState } from "react";
import Button from "./components/button";
import { Avatar, Loading } from "./components/icons";
import { Warning } from "./components/icons";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <>
      <Button type="primary" icon={<Loading />} />
      <Button type="secondary" icon={<Warning />} />
      <Button icon={<Avatar />} />
    </>
  );
}
