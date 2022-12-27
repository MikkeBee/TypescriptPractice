// let greet: Function;

let greet: (a: string, b: string) => void;

greet = (name: string, greeting: string) => {
  console.log(`${name} says ${greeting}`);
  //just because a and b are originally used does not mean they have to be the same, they can be whatever we want
  // because we don't return anything this function returns "void"
};

let calc: (a: number, b: number, c: string) => number;

calc = (numOne: number, numTwo: number, action: string) => {
  if (action === "add") {
    return numOne + numTwo;
  } else {
    return numOne - numTwo;
  }
};

let logDetails: (obj: { name: string; age: number }) => void;

logDetails = (ninja: { name: string; age: number }) => {
  console.log(`${ninja.name} is ${ninja.age} years old`);
  //again, no need for ninja to match obj
};

type person = { name: string; age: number };
// logDetails = (ninja: person) => {
//     console.log(`${ninja.name} is ${ninja.age} years old`);
//     //again, no need for ninja to match obj
// }
// possible to do like this as well
