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

type Linked<T> = {
  value: T;
  next?: Linked<T>;
};

const TextLinked: Linked<string> = {
  value: "one",
  next: {
    value: "two",
  },
};

const buildLink = <T>(value: T): Linked<T> => {
  return { value };
};

const stringLinked = buildLink("Hi");
const numberLinked = buildLink(2);
