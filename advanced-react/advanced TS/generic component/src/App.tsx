import { ReactNode } from "react";

interface ProductListProps<T> {
  rows: T[];
  renderRow: (row: T) => ReactNode;
}

export const ProductList = <T,>(props: ProductListProps<T>) => {
  return <ul>{props.rows.map((row) => props.renderRow(row))}</ul>;
};

interface Product {
  id: number;
  title: string;
}

function App() {
  return (
    <div>
      <ProductList<Product>
        rows={[12, "test", 5]} //will produce an error since we passing type to Component
        renderRow={(row) => <li>{row.title}</li>}
      />
      <ProductList<Product>
        rows={[
          { id: 1, title: "test" },
          { id: 2, title: 123123 }, //will produce an error since Product.title is string value
        ]}
        renderRow={(row) => {
          return <li>{row.title}</li>;
        }}
      ></ProductList>
    </div>
  );
}

export default App;
