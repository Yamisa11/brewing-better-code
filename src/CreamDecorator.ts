
import { Coffee } from './Coffee';

export class CreamDecorator implements Coffee {
  private coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  cost(): number {
    return this.coffee.cost() + 1.0; // Cream adds $1.00 to the base price
  }

  description(): string {
    return `${this.coffee.description()}, with cream`;
  }
}
