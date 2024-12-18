import { Coffee } from './Coffee.js';
import { Intensity } from './Intensity.js';

export class Cappuccino extends Coffee {
    constructor(intensity: Intensity, mlOfMilk: number) {
        super(intensity);
        this.addMilk(mlOfMilk);
        this.setName("Cappuccino");
    }

    public printCoffeeDetails(): Cappuccino {
        this.printCoffee();
        return this;
    }

}