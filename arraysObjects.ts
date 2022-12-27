//arrays
// if arrays are declared using only one type, they cannot accept different types, unless declared as a mixed array at the start
let names = ["luigi", "mario", "yoshi"];

names.push("toad");
// names.push(10); will not work

let numbers = [10, 20, 30, 40];
numbers.push(25);
// numbers[0] = 'shaun'; will not work

let mixed = ["ken", 4, "chun-li", 8, 9];
mixed.push("ryu");
mixed.push(10);
mixed[0] = 3;

//objects
let ninja = {
  name: "mario",
  belt: "black",
  age: 30,
};

ninja.age = 40;
ninja.name = "ryu";
// ninja.age = "30";
// ninja.skills = ["fighting", "sneaking"];
// not possible

ninja = {
  name: "yoshi",
  belt: "orange",
  age: 40,
};

// ninja = {
//   name: "yoshi",
//   belt: "orange",
//   age: 40,
//   skills: []
// };
// not possible, as it needs to match the same structure as the original declaration
