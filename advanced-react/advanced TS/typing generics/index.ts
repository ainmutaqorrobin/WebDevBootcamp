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
