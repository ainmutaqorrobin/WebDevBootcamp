import React from "react";

interface RowsProps {
  renderRow: React.ReactNode;
}

const Rows = (props: RowsProps) => {
  return <div>{[0, 1, 2].map(props.renderRow)}</div>;
};

export default Rows;
