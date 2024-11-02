import { Coffee } from './Coffee.js';
import { Intensity } from './Intensity.js';

export class Cappuccino extends Coffee {
    private mlOfMilk: number;

    constructor(intensity: Intensity, mlOfMilk: number) {
        super(intensity);
        this.mlOfMilk = mlOfMilk;
        this.setName("Cappuccino");
    }

    public getMlOfMilk(): number {
        return this.mlOfMilk;
    }

    public printDetails(): void {
        this.printCoffeeDetails();
        console.log(`Milk Volume: ${this.mlOfMilk} ml`);
    }
}
