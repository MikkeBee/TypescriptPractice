// explicit types
let someCharacter: string;
let ageNow: number;
let isLoggedIn: boolean;

ageNow = 35;
isLoggedIn = true;

//arrays
let ninjas: string[] = [];
//can then only be an array of strings in the future
// array needs to be initialised ( = []), otherwise ninjas.push('shaun') would not work, unless you do something like ninjas = [];

// union types
let mixedTypes: (string | number | boolean)[] = [];
mixedTypes.push("hello");
mixedTypes.push(20);
mixedTypes.push(false);

let uid: string | number;
uid = 123;
uid = "123";

//objects
let ninjaOne: object;
ninjaOne = { name: "yoshi", age: 30 };

let ninjaTwo: {
  name: string;
  age: number;
  beltColour: string;
};

ninjaTwo = {
  name: "mario",
  age: 20,
  beltColour: "blue",
};
