import { Intensity } from './Intensity';

export class Coffee {
    private coffeeIntensity: Intensity;
    private name: string = "Coffee";

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
}
