
export class CoffeeOrder {
    public type: string;
    public size: string;
    public sugar: number;
    public milk: boolean;

    constructor() {
        this.type = '';
        this.size = '';
        this.sugar = 0;
        this.milk = false;
    }
}

export interface Coffee {
    cost(): number;
    description(): string;
}

export class SimpleCoffee implements Coffee {
    cost(): number {
        return 5; 
    }

    description(): string {
        return "Simple coffee";
    }
}

