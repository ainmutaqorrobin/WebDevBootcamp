import React, { useState } from "react";

function ControlledFlow({ children, onDone, currentPage, onNext }) {
  function goNext(dataFromStep) {
    onNext(dataFromStep);
  }

  const currentChild = React.Children.toArray(children)[currentPage];
  if (React.isValidElement(currentChild))
    return React.cloneElement(currentChild, { goNext });
  if (currentPage === children.length) return onDone;
  return currentChild;
}

export default ControlledFlow;
