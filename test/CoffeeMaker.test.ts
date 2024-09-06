
import { expect } from 'chai';
import { CoffeeMaker } from '../src/CoffeeMaker';
import { EspressoStrategy } from '../src/EspressoStrategy';
import { FrenchPressStrategy } from '../src/FrenchPressStrategy';
import { PourOverStrategy } from '../src/PourOverStrategy';

describe('CoffeeMaker Strategy Pattern', () => {
  it('should brew coffee using the EspressoStrategy', () => {
    const espressoMaker = new CoffeeMaker(new EspressoStrategy());
    const result = espressoMaker.brewCoffee();
    expect(result).to.equal('Brewing coffee with an espresso machine.');
  });

  it('should brew coffee using the FrenchPressStrategy', () => {
    const frenchPressMaker = new CoffeeMaker(new FrenchPressStrategy());
    const result = frenchPressMaker.brewCoffee();
    expect(result).to.equal('Brewing coffee with a French press.');
  });

  it('should brew coffee using the PourOverStrategy', () => {
    const pourOverMaker = new CoffeeMaker(new PourOverStrategy());
    const result = pourOverMaker.brewCoffee();
    expect(result).to.equal('Brewing coffee with a pour-over method.');
  });

  it('should switch brewing strategies at runtime', () => {
    const coffeeMaker = new CoffeeMaker(new EspressoStrategy());
    let result = coffeeMaker.brewCoffee();
    expect(result).to.equal('Brewing coffee with an espresso machine.');

    coffeeMaker.setStrategy(new FrenchPressStrategy());
    result = coffeeMaker.brewCoffee();
    expect(result).to.equal('Brewing coffee with a French press.');

    coffeeMaker.setStrategy(new PourOverStrategy());
    result = coffeeMaker.brewCoffee();
    expect(result).to.equal('Brewing coffee with a pour-over method.');
  });
});
