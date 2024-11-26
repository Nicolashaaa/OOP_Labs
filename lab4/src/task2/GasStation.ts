// GasStation.ts
import { IRefuelable } from './IRefuelable';

export class GasStation implements IRefuelable<string> {
    static count: number = 0;
    refuel(carID: string): string {
        GasStation.count++;
        return `"Refueling gas car ${carID}.`;
    }
    static getTotalServed(): number {
        return GasStation.count;
    }
}