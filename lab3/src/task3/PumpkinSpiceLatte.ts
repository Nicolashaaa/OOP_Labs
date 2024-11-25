import { Coffee } from './Coffee.js';
import { Intensity } from '../task2/Intensity.js';
import { LoadingAnimation } from './LoadingAnimation.js';

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

    public static async makePumpkinSpiceLatte(instance: PumpkinSpiceLatte): Promise<void> {
        await LoadingAnimation.animate(`Making ${instance.getName()}`);
        console.log(`Intensity set to ${instance.getIntensity()}`);
        console.log(`Adding ${instance.getMlOfMilk()} ml of milk`);
        console.log(`Adding ${instance.getMgOfPumpkinSpice()} mg of pumpkin spice`);
    }
}
