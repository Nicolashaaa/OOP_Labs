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

    public printDetails(): void {
        this.printCoffeeDetails(); // Call the common method from the parent class
        console.log(`Water Volume: ${this.mlOfWater} ml`);
    }
}
