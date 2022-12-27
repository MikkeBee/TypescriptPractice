let greet = () => {
  console.log("hello, world");
};

//greet = 'hello'

greet = () => {
  console.log("hello, again");
};

const add = (a: number, b: number, c: number | string = 10) => {
  console.log(a + b);
  // c?: means value is optional
  // c: x | y = jotain -> this profides default parameter, use one or the other with c?:
  //Always put required parameters in the front, optional at the back
};

add(5, 10);

const minus = (a: number, b: number) => {
  return a + b;
};

let result = minus(10, 7);

// let result = 'something';
// This doesn't work as we've already assigned a "type" to result
