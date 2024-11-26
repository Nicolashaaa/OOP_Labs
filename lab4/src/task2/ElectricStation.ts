// ElectricStation.ts
import { IRefuelable } from './IRefuelable';

export class ElectricStation implements IRefuelable<string> {
    static count: number = 0;
    refuel(carID: string): string {
        ElectricStation.count++;
        return `Refueling electric car ${carID}.`;
    }
    static getTotalServed(): number {
        return ElectricStation.count;
    }
}