import React, { useState } from "react";

function UncontrolledFlow({ children, onDone }) {
  const [data, setData] = useState({});
  const [page, setPage] = useState(0);

  function goNext(prevData) {
    const nextPage = page + 1;
    const newData = {
      ...data,
      ...prevData,
    };
    console.log(newData);
    if (nextPage < children.length) {
      setPage(nextPage);
    } else {
      onDone(newData);
    }

    setData(newData);
    setPage(page + 1);
  }

  const currentChild = React.Children.toArray(children)[page];
  if (React.isValidElement(currentChild))
    return React.cloneElement(currentChild, { goNext });
  return currentChild;
}

export default UncontrolledFlow;
