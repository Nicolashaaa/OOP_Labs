import { Coffee } from './Coffee.js';
import { Intensity } from '../task2/Intensity.js';
import { LoadingAnimation } from './LoadingAnimation.js';

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
        this.printCoffeeDetails(); // Вызов общего метода из родительского класса
        console.log(`Water Volume: ${this.mlOfWater} ml`);
    }

    public static async makeAmericano(instance: Americano): Promise<void> {
        await LoadingAnimation.animate(`Making ${instance.getName()}`);
        console.log(`Intensity set to ${instance.getIntensity()}`);
        console.log(`Water Volume: ${instance.mlOfWater} ml`);
    } 
}

