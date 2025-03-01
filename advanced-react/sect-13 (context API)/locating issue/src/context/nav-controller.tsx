import React, { useCallback, useContext, useMemo, useState } from "react";

const Context = React.createContext({
  collapsed: false,
  toggle: () => {},
});

export const useNav = () => useContext(Context);

function NavController({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed]);

  const value = useMemo(() => {
    return { collapsed, toggle };
  }, [collapsed, toggle]);

  return <Context.Provider value={value}>{children}</Context.Provider>;
}

export default NavController;
