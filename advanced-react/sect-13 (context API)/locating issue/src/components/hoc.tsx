import React from "react";
import { useNavApi } from "../context/nav-controller";

function withNavClose(Component: any) {
  const MemoizedComponent = React.memo(Component);
  return (props: any) => {
    const { close } = useNavApi();

    return <MemoizedComponent {...props} closeNav={close} />;
  };
}

export default withNavClose;
