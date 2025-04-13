import { ReactNode } from "react";

interface ProductListProps<T> {
  rows: T[];
  renderRow: (row: T) => ReactNode;
}

export const ProductList = <T,>(props: ProductListProps<T>) => {
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
          return <li>{row.title}</li>;
        }}
      ></ProductList>
    </div>
  );
}

export default App;
