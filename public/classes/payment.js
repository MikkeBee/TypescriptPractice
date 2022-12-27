export class Payment {
    constructor(recipient, details, amount //this only works when using the visibility modifiers
    ) {
        this.recipient = recipient;
        this.details = details;
        this.amount = amount;
    }
    format() {
        return `${this.recipient} is owed €${this.amount} for ${this.details}`;
    }
}
