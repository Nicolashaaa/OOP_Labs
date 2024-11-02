import { Coffee } from './Coffee';
import { Intensity } from './Intensity';
import { SyrupType } from './SyrupType';

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
}
