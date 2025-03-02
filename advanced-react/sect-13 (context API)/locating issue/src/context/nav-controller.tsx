import React, { useCallback, useContext, useMemo, useState } from "react";

const ContextApi = React.createContext({
  collapsed: false,
  open: () => {},
  close: () => {},
  toggle: () => {},
});
export const useNavApi = () => useContext(ContextApi);

function NavController({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  const open = useCallback(() => {
    setCollapsed(false);
  }, []);

  const close = useCallback(() => {
    setCollapsed(true);
  }, []);

  const toggle = useCallback(() => {
    setCollapsed(!collapsed);
  }, [collapsed]);

  const api = useMemo(() => {
    return { collapsed, open, close, toggle };
  }, [collapsed, open, close, toggle]);

  return <ContextApi.Provider value={api}>{children}</ContextApi.Provider>;
}

export default NavController;
