// test/CoffeeFactory.test.ts
import { expect } from 'chai';
import CoffeeFactory from '../src/CoffeeFactory';

describe('CoffeeFactory Singleton', () => {
  it('should return the same instance', () => {
    const factory1 = CoffeeFactory.getInstance();
    const factory2 = CoffeeFactory.getInstance();

    // Check if both instances are the same
    expect(factory1).to.equal(factory2);
  });

  it('should brew the correct type of coffee', () => {
    const factory = CoffeeFactory.getInstance();
    const result = factory.brewCoffee('Espresso');

    // Check if the brewed coffee type is correct
    expect(result).to.equal('Brewing a cup of Espresso');
  });
});
