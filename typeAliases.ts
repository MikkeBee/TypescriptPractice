type StringOrNum = string | number;
//can be used to simplify and shorten repetitive stuff
type objWithName = { name: string; uid: StringOrNum };

const logDetails = (uid: StringOrNum, item: string) => {
  console.log(`${item} has a uid of ${uid}`);
};

const greet = (user: { name: string; uid: string | number }) => {
  console.log(`${user.name} says hello`);
};

const greetAgain = (user: objWithName) => {
  console.log(`${user.name} says hello`);
};
