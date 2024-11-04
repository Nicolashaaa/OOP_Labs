import { Intensity } from './Intensity.js';

export class Coffee {
    private coffeeIntensity: Intensity;
    private name: string = "Coffee";
    private mlOfMilk: number = 0; 

    constructor(coffeeIntensity: Intensity) {
        this.coffeeIntensity = coffeeIntensity;
    }

    public getIntensity(): Intensity {
        return this.coffeeIntensity;
    }

    public getName(): string {
        return this.name;
    }

    protected setName(name: string): void {
        this.name = name;
    }

    public addMilk(ml: number): void {
        this.mlOfMilk += ml;
    }

    public makingCoffeeDetails(): void{
        console.log(`Making ${this.name}...`);
        console.log(`Intensity set to ${this.coffeeIntensity}`);
        if (this.mlOfMilk > 0) {
            console.log(`Adding ${this.mlOfMilk} ml of milk.`);
        }
    }
}
