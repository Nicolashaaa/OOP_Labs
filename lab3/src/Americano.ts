import { Coffee } from './Coffee';
import { Intensity } from './Intensity';

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
}
