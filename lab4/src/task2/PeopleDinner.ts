// PeopleDinner.ts
import { IDineable } from './IDineable';

export class PeopleDinner implements IDineable{
    static count: number = 0;
    serveDinner(carID: number): string {
        PeopleDinner.count++;
        return `Serving dinner to people in car ${carID}.`;
    }
    static getTotalServed(): number {
        return PeopleDinner.count;
    }
}