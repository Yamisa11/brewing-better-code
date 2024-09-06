
import { expect } from 'chai';
import { SimpleCoffee } from '../src/Coffee';
import { MilkDecorator } from '../src/MilkDecorator';
import { SugarDecorator } from '../src/SugarDecorator';
import { CreamDecorator } from '../src/CreamDecorator';

describe('Coffee Decorator Pattern', () => {
  it('should return correct description and cost for a simple coffee', () => {
    const coffee = new SimpleCoffee();
    expect(coffee.description()).to.equal('Simple coffee');
    expect(coffee.cost()).to.equal(5);
  });

  it('should add milk to the coffee', () => {
    let coffee = new SimpleCoffee();
    coffee = new MilkDecorator(coffee);
    expect(coffee.description()).to.equal('Simple coffee, with milk');
    expect(coffee.cost()).to.equal(6.5);
  });

  it('should add sugar to the coffee', () => {
    let coffee = new SimpleCoffee();
    coffee = new SugarDecorator(coffee);
    expect(coffee.description()).to.equal('Simple coffee, with sugar');
    expect(coffee.cost()).to.equal(5.5);
  });

  it('should add cream to the coffee', () => {
    let coffee = new SimpleCoffee();
    coffee = new CreamDecorator(coffee);
    expect(coffee.description()).to.equal('Simple coffee, with cream');
    expect(coffee.cost()).to.equal(6);
  });

  it('should add multiple extras to the coffee', () => {
    let coffee = new SimpleCoffee();
    coffee = new MilkDecorator(coffee);
    coffee = new SugarDecorator(coffee);
    coffee = new CreamDecorator(coffee);
    expect(coffee.description()).to.equal('Simple coffee, with milk, with sugar, with cream');
    expect(coffee.cost()).to.equal(8);
  });

  it('should return the same cost and description regardless of decorator order', () => {
    let coffee = new SimpleCoffee();
    coffee = new SugarDecorator(coffee);
    coffee = new MilkDecorator(coffee);
    coffee = new CreamDecorator(coffee);
    expect(coffee.description()).to.equal('Simple coffee, with sugar, with milk, with cream');
    expect(coffee.cost()).to.equal(8);
  });
});
