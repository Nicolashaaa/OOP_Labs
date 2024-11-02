import { Coffee } from './Coffee';
import { Intensity } from './Intensity';

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
}
