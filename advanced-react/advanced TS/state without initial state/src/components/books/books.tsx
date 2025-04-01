import { PropsWithChildren, useState } from "react";
import "./books.css";

interface iProps {
  onSubmit: (value: number) => void;
}

export const Books = ({ children, onSubmit }: PropsWithChildren<iProps>) => {
  const [count, setCount] = useState(0);

  return (
    <section className="book-list gap-8">
      <form
        onSubmit={(e: any) => {
          e.preventDefault();
          onSubmit(count);
        }}
      >
        <label htmlFor="number-of-books-to-load" className="book-form-label">
          Number of Books to Load
        </label>
        <div className="flex">
          <input
            id="number-of-books-to-load"
            className="book-input w-full"
            type="number"
            min="0"
            max="20"
            value={count}
            onChange={(e) => setCount(e.target.valueAsNumber)}
          />
          <button type="submit" className="book-button">
            Load Books
          </button>
        </div>
      </form>
      <div className="book-grid">{children}</div>
    </section>
  );
};

export default Books;
