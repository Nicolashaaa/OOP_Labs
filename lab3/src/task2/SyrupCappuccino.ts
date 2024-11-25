import { Coffee } from './Coffee.js';
import { Intensity } from './Intensity.js';
import { SyrupType } from './SyrupType.js';

export class SyrupCappuccino extends Coffee {
    private syrup: SyrupType;

    constructor(intensityCoffee: Intensity, mlOfMilk: number, syrup: SyrupType) {
        super(intensityCoffee);
        this.addMilk(mlOfMilk);
        this.syrup = syrup;
        this.setName("Syrup Cappuccino");
    }

    public getSyrup(): SyrupType {
        return this.syrup;
    }

    public printCoffeeDetails(): SyrupCappuccino {
        this.printCoffee(); 
        console.log(`Syrup Type: ${this.syrup}`);
        return this;
    }
}
