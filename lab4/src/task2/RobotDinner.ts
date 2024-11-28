// RobotDinner.ts
import { IDineable } from './IDineable';

export class RobotDinner implements IDineable{
    static count: number = 0;
    serveDinner(carID: number): string {
        RobotDinner.count++;
        return `Serving dinner-oil to robots in car ${carID}.`;
    }
    static getTotalServed(): number {
        return RobotDinner.count;
    }
}