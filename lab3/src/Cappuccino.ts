import { Coffee } from './Coffee';
import { Intensity } from './Intensity';

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
}
