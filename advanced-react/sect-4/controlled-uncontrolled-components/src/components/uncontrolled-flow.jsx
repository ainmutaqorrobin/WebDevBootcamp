import React, { useState } from "react";

function UncontrolledFlow({ children, onDone }) {
  const [data, setData] = useState({});
  const [page, setPage] = useState(0);

  function goNext() {
    setPage((prevState) => prevState + 1);
  }
  const currentChild = React.Children.toArray(children)[page];
  if (React.isValidElement(currentChild))
    return React.cloneElement(currentChild, { goNext });
  return currentChild;
}

export default UncontrolledFlow;
