type Obj = {
  a: "A";
  b: "B";
  c: number;
};

type res = keyof Obj & string; // "a" | "b" | "c"
type resData = Obj[keyof Obj]; // "A" | "B" | number

type set1 = "a" | "b" | "c";
type set2 = "b" | "c" | "d";

type union = set1 | set2;
type intersection = set1 & set2;

type Obj2 = { a: string };

type ObjWithStringKeys = { [key: string]: number };

type ObjWithSpecificKeys = { [K in "a" | "b" | "c"]: number };
// type ObjWithSpecificKeys = {
//   a: number;
//   b: number;
//   c: number;
// };

type mask = {
  [K in keyof ObjWithSpecificKeys]: boolean;
};
const sample: Partial<ObjWithSpecificKeys> = {
  a: 2,
};

type newType = Pick<Obj, "a" | "c">; //if you want to create new type based on existed type
// type newType = {
//   a: "A";
//   c: number;
// };

type excludeType = Omit<Obj, "b">; //if you want to create new type excluding some of key existed type
// type excludeType = {
//   a: "A";
//   c: number;
// };