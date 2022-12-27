interface IsPerson {
  name: string;
  age: number;
  speak(a: string): void;
  spend(a: number): number;
}

const me: IsPerson = {
  name: "mikke",
  age: 35,
  speak(text: string): void {
    console.log(text);
  },
  spend(amount: number): number {
    console.log("I spent", amount);
    return amount;
  },
};

console.log(me);

const greetPerson = (person: IsPerson) => {
  console.log("hello", person.name);
};

greetPerson(me);

import { Invoice } from "./classes/invoice.js";
import { ListTemplate } from "./classes/listtemplate.js";
import { Payment } from "./classes/payment.js";
import { HasFormatter } from "./interfaces/HasFormatter.js";
//when importing in ts always use js file endings, as we are importing it as a js file

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice("yoshi", "web work", 250);
docTwo = new Payment("mario", "plumbing work", 200);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

const anchor = document.querySelector("a");
// const anchor = document.querySelector('a')!;
// the ! means that it is not null and that there is actually something there

console.log(anchor);

// if (anchor) {
//   console.log(anchor.href);
// }
// without the if statement it would throw an error, as it is possible that the href doesn't exist

// const invOne = new Invoice("Mario", "work on website", 250);
// const invTwo = new Invoice("Luigi", "work on website", 300);

// console.log(invOne, invTwo);

// let invoices: string[] = [];
// let otherInvoices: Invoice[] = [];
// //using this only  invoices created using the Invoice class can be pushed into the array
// otherInvoices.push(invOne);
// otherInvoices.push(invTwo);

// // invOne.client = "Yoshi";
// // invTwo.amount = 400;

// otherInvoices.forEach((inv) => {
//   console.log(inv.client, inv.amount, inv.format());
// });

// console.log(invOne, invTwo);

// console.log(otherInvoices);

const form = document.querySelector(".new-item-form") as HTMLFormElement;
// as HTMLFormElement assigns form to it instead of Element
console.log(form.children);

//inputs
const type = document.querySelector("#type") as HTMLSelectElement;
const tofrom = document.querySelector("#tofrom") as HTMLInputElement;
const details = document.querySelector("#details") as HTMLInputElement;
const amount = document.querySelector("#amount") as HTMLInputElement;

// list template instance
const ul = document.querySelector("ul")!;
const list = new ListTemplate(ul);

form.addEventListener("submit", (e: Event) => {
  e.preventDefault();

  let doc: HasFormatter;
  if (type.value === "invoice") {
    doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
  } else {
    doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
  }

  console.log(doc);

  list.render(doc, type.value, "end");
  //or amount.valueAsNumber, as it turns value into number
});

const addUID = <T>(obj: T) => {
  // the <T> captures the properties of the object that is fed into it, so esim. docOne.name = yoshi, even though name has not been specified / initiated already.
  let uid = Math.floor(Math.random() * 100);
  return { ...obj, uid };
};

let documentOne = addUID({ name: "yoshi", age: 48 });
let documentTwo = addUID("hello");
// both are okay, because the <Y> acts as any and allows almost anything to be assigned, regardless of form

console.log(documentOne);

interface Resource<T> {
  uid: number;
  resourceName: string;
  data: T;
  //T allows data's value to be ns wild card
}
