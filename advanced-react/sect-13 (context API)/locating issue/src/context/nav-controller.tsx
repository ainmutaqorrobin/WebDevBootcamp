import React, { useCallback, useContext, useMemo, useState } from "react";

const ContextData = React.createContext({
  collapsed: false,
});

const ContextApi = React.createContext({
  open: () => {},
  close: () => {},
});
export const useNavData = () => useContext(ContextData);
export const useNavApi = () => useContext(ContextApi);

function NavController({ children }: { children: React.ReactNode }) {
  const [collapsed, setCollapsed] = useState(false);

  const open = useCallback(() => {
    setCollapsed(false);
  }, []);

  const close = useCallback(() => {
    setCollapsed(true);
  }, []);

  const data = useMemo(() => {
    return { collapsed };
  }, [collapsed]);

  const api = useMemo(() => {
    return { open, close };
  }, [open, close]);

  return (
    <ContextData.Provider value={data}>
      <ContextApi.Provider value={api}>{children}</ContextApi.Provider>
    </ContextData.Provider>
  );
}

export default NavController;
