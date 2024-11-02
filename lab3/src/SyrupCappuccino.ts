import { Coffee } from './Coffee.js';
import { Intensity } from './Intensity.js';
import { SyrupType } from './SyrupType.js';

export class SyrupCappuccino extends Coffee {
    private mlOfMilk: number;
    private syrup: SyrupType;

    constructor(intensityCoffee: Intensity, mlOfMilk: number, syrup: SyrupType) {
        super(intensityCoffee);
        this.mlOfMilk = mlOfMilk;
        this.syrup = syrup;
        this.setName("Syrup Cappuccino");
    }

    public getMlOfMilk(): number {
        return this.mlOfMilk;
    }

    public getSyrup(): SyrupType {
        return this.syrup;
    }

    public printDetails(): void {
        this.printCoffeeDetails(); 
        console.log(`Milk Volume: ${this.mlOfMilk} ml`);
        console.log(`Syrup Type: ${this.syrup}`);
    }
}
