import { Coffee } from './Coffee.js';
import { Intensity } from '../task2/Intensity.js';
import { LoadingAnimation } from './LoadingAnimation.js';

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

    public static async makeCappuccino(instance: Cappuccino): Promise<void> {
        await LoadingAnimation.animate(`Making ${instance.getName()}`);
        console.log(`Intensity set to ${instance.getIntensity()}`);
        console.log(`Adding ${instance.getMlOfMilk()} mls of milk`);
    }
}
