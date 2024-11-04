import { Coffee } from './Coffee.js';
import { Intensity } from './Intensity.js';

export class Americano extends Coffee {
    private mlOfWater: number;

    constructor(intensityOfCoffee: Intensity, mlOfWater: number) {
        super(intensityOfCoffee);
        this.mlOfWater = mlOfWater;
        this.setName("Americano");
    }

    public getMlOfWater(): number {
        return this.mlOfWater;
    }

    public printCoffeeDetails(): Americano {
        this.printCoffee();
        console.log(`Water Volume: ${this.mlOfWater} ml`);
        return this;
    }
}
