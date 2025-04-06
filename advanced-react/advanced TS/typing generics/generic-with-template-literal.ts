type Book = {
  author: string;
  title: string;
  price: number;
};

type ActionTypes = `update-${keyof Book}`;
// type ActionTypes = "update-author" | "update-title" | "update-price";

type Actions<T, K extends keyof T & string> = {
  type: `update-${K}`;
  payload: T[K];
};

type UpdateTitleAction = Actions<Book, "title">;
// type UpdateTitleAction = {
//   type: "update-title";
//   payload: string;
// };
