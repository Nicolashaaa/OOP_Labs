import { Coffee } from './Coffee.js';
import { Intensity } from './Intensity.js';

export class PumpkinSpiceLatte extends Coffee {
    private mlOfMilk: number;
    private mgOfPumpkinSpice: number;

    constructor(intensityOfCoffee: Intensity, mlOfMilk: number, mgOfPumpkinSpice: number) {
        super(intensityOfCoffee);
        this.mlOfMilk = mlOfMilk;
        this.mgOfPumpkinSpice = mgOfPumpkinSpice;
        this.setName("Pumpkin Spice Latte");
    }

    public getMlOfMilk(): number {
        return this.mlOfMilk;
    }

    public getMgOfPumpkinSpice(): number {
        return this.mgOfPumpkinSpice;
    }

    public printDetails(): void {
        this.printCoffeeDetails(); 
        console.log(`Milk Volume: ${this.mlOfMilk} ml`);
        console.log(`Pumpkin Spice Amount: ${this.mgOfPumpkinSpice} mg`);
    }
}
