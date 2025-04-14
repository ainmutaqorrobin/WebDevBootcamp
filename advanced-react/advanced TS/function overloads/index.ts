type Callback = (anotherNumber: number) => number;

function addNumber(a: number): Callback;
function addNumber(a: number, b: number): number;
function addNumber(a: number, b?: number): number | Callback {
  if (b === undefined) return (b: number) => addNumber(a, b);
  return a + b;
}

const addThree = addNumber(3);
const result = addThree(9);
console.log(result);

const result2 = addNumber(3, 3);
console.log(result2);
