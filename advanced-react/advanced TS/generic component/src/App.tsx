import { ReactNode } from "react";

interface ProductListProps {
  rows: any[];
  renderRow: (row: any) => ReactNode;
}

export const ProductList = (props: ProductListProps) => {
  return <ul>{props.rows.map((row) => props.renderRow(row))}</ul>;
};

const products = [
  {
    id: 1,
    title: "product",
  },
];

function App() {
  return (
    <div>
      <ProductList rows={products} renderRow={(row) => <li>{row.title}</li>} />
      <ProductList
        rows={products}
        renderRow={(row) => {
          return <li>{row.nonExistingProp}</li>;
        }}
      ></ProductList>
    </div>
  );
}

export default App;
