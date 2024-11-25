import { Coffee } from './Coffee.js';
import { Intensity } from './Intensity.js';

export class PumpkinSpiceLatte extends Coffee {
    private mgOfPumpkinSpice: number;

    constructor(intensityOfCoffee: Intensity, mlOfMilk: number, mgOfPumpkinSpice: number) {
        super(intensityOfCoffee);
        this.addMilk(mlOfMilk);
        this.mgOfPumpkinSpice = mgOfPumpkinSpice;
        this.setName("Pumpkin Spice Latte");
    }

    public getMgOfPumpkinSpice(): number {
        return this.mgOfPumpkinSpice;
    }

    public printCoffeeDetails(): PumpkinSpiceLatte {
        this.printCoffee();
        console.log(`Adding ${this.mgOfPumpkinSpice} mg of pumpkin spice.`);
        return this; 
    }

}