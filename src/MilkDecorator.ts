
import { Coffee } from './Coffee';

export class MilkDecorator implements Coffee {
  private coffee: Coffee;

  constructor(coffee: Coffee) {
    this.coffee = coffee;
  }

  cost(): number {
    return this.coffee.cost() + 1.5; // Milk adds $1.50 to the base price
  }

  description(): string {
    return `${this.coffee.description()}, with milk`;
  }
}
