import React from "react";

export const createContext = <T extends {}>() => {
  const Context = React.createContext<T | undefined>(undefined);

  const useContext = () => {
    const stateContext = React.useContext(Context);

    if (stateContext === undefined)
      throw new Error("A value must be provided to the useContext");

    return stateContext;
  };

  return [useContext, Context.Provider] as const;
};
