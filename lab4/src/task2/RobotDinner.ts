// PeopleDinner.ts
import { IDineable } from './IDineable';

export class RobotDinner implements IDineable<string> {
    static count: number = 0;
    serveDinner(carID: string): string {
        RobotDinner.count++;
        return `Serving dinner-oil to robots in car ${carID}.`;
    }
    static getTotalServed(): number {
        return RobotDinner.count;
    }
}