export class Invoice {
    //   readonly client: string;
    //   private details: string;
    //   public amount: number;
    //to prevent errors, could assign values immediately
    constructor(client, details, amount //this only works when using the visibility modifiers
    ) {
        this.client = client;
        this.details = details;
        this.amount = amount;
    }
    //   constructor(c: string, d: string, a: number) {
    //     // this.client = c;
    //     // this.details = d;
    //     // this.amount = a;
    //   }
    format() {
        return `${this.client} owes €${this.amount} for ${this.details}`;
    }
}
