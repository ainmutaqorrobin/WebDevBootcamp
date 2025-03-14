import updateResource from "./update-resource";

export const BookForm = updateResource(
  ({ book, onChangeBook, onSaveBook, onResetBook }) => {
    const { name, title, price, pages } = book || {};
    return book ? (
      <>
        <label htmlFor="name">
          Name:
          <input
            value={name}
            onChange={(e) => onChangeBook({ name: e.target.value })}
          />
        </label>
        <label htmlFor="title">
          Title:
          <input
            value={title}
            onChange={(e) => onChangeBook({ title: e.target.value })}
          />
        </label>
        <label htmlFor="pages">
          Pages:
          <input
            type="number"
            value={pages}
            onChange={(e) => onChangeBook({ pages: +e.target.value })}
          />
        </label>
        <label htmlFor="price">
          Price:
          <input
            type="number"
            value={price}
            onChange={(e) => onChangeBook({ price: +e.target.value })}
          />
        </label>
        <button onClick={onResetBook}>Reset</button>
        <button onClick={onSaveBook}>Save</button>
      </>
    ) : (
      <h3>Loading....</h3>
    );
  },
  "/books/3",
  "book"
);
