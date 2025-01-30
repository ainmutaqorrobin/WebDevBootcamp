let apples: number = 5;
let speed: string = "fast";
let isName: boolean = true;
let nothingMuch: null = null;
let nothing: undefined = undefined;

let now: Date = new Date();

let colors: string[] = ["red", "green"];

// class Car {}

// let car: Car = new Car();

let point: { x: number; y: number } = {
  x: 10,
  y: 20,
};

const logNumber: (i: number) => void = (i: number) => {
  console.log(i);
};

//Type Annotation = We 'Developer' let TS know variable/function type
//Type Inference = TS guesses the variable/function type

//When to use type annotations
//1) Function that returns "any" type
const json = '{"x":10,"y":20, "z":20}';
const coordinates: { x: number; y: number } = JSON.parse(json);
console.log(coordinates);

//2) When we declare variable and initialize later
let words = ["red", "green", "blue"];
let foundWord: boolean;

for (let word of words) {
  if (word === "green") {
    foundWord = true;
  }
}

//3) Variable whose type cannot be inferred correctly
let numbers = [-10, -1, 12];
let numberAboveZero: boolean | number = false;

for (let number of numbers) {
  if (number > 0) numberAboveZero = number;
}
