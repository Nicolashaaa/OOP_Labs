import { Coffee } from './Coffee.js';
import { Intensity } from '../task2/Intensity.js';
import { SyrupType } from '../task2/SyrupType.js';
import { LoadingAnimation } from './LoadingAnimation.js';

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

    public static async makeSyrupCappuccino(instance: SyrupCappuccino): Promise<void> {
        await LoadingAnimation.animate(`Making ${instance.getName()}`);
        console.log(`Intensity set to ${instance.getIntensity()}`);
        console.log(`Adding ${instance.getMlOfMilk()} ml of milk`);
        console.log(`Adding syrup type: ${instance.getSyrup()}`);
    }
}
