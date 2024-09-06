
import { expect } from 'chai';
import { CoffeeBuilder } from '../src/CoffeeBuilder';
import { CoffeeDirector } from '../src/CoffeeDirector';

describe('Coffee Builder Pattern', () => {
  it('should build a basic coffee with milk', () => {
    const coffee = new CoffeeBuilder().setType('Basic Coffee').setSize('Medium').addMilk().build();
    expect(coffee.type).to.equal('Basic Coffee');
    expect(coffee.size).to.equal('Medium');
    expect(coffee.milk).to.be.true;
  });

  it('should build a coffee without milk', () => {
    const coffee = new CoffeeBuilder().setType('Basic Coffee').setSize('Small').addSugar(1).build();
    expect(coffee.type).to.equal('Basic Coffee');
    expect(coffee.size).to.equal('Small');
    expect(coffee.sugar).to.equal(1);
    expect(coffee.milk).to.be.false;
  });

  it('should use the director to make an Espresso', () => {
    const builder = new CoffeeBuilder();
    const director = new CoffeeDirector(builder);
    const coffee = director.makeEspresso().build();
    expect(coffee.type).to.equal('Espresso');
    expect(coffee.size).to.equal('Small');
    expect(coffee.sugar).to.equal(1);
    expect(coffee.milk).to.be.true;
  });

  it('should use the director to make a Latte', () => {
    const builder = new CoffeeBuilder();
    const director = new CoffeeDirector(builder);
    const coffee = director.makeLatte().build();
    expect(coffee.type).to.equal('Latte');
    expect(coffee.size).to.equal('Large');
    expect(coffee.sugar).to.equal(2);
    expect(coffee.milk).to.be.true;
  });
});
