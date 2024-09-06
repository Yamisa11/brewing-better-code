
import { Coffee } from './Coffee';

export class SugarDecorator implements Coffee {
  private coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  cost(): number {
    return this.coffee.cost() + 0.5; // Sugar adds $0.50 to the base price
  }

  description(): string {
    return `${this.coffee.description()}, with sugar`;
  }
}
