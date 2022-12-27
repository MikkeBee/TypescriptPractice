import { HasFormatter } from "../interfaces/HasFormatter.js";

export class Invoice implements HasFormatter {
  //   readonly client: string;
  //   private details: string;
  //   public amount: number;
  //to prevent errors, could assign values immediately

  constructor(
    readonly client: string,
    private details: string,
    public amount: number //this only works when using the visibility modifiers
  ) {}

  //   constructor(c: string, d: string, a: number) {
  //     // this.client = c;
  //     // this.details = d;
  //     // this.amount = a;
  //   }

  format() {
    return `${this.client} owes €${this.amount} for ${this.details}`;
  }
  //this needs to be in the class, otherwise there's an error because it implements HasFormatter
}
