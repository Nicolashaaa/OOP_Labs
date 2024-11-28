// CarStation.ts
import { IDineable } from "../task2/IDineable";
import { IRefuelable } from "../task2/IRefuelable";
import { Queue } from '../task1/Queue';
import { Car } from "./Car";

// Define the CarStation class
export class CarStation {
    private diningService: IDineable;
    private refuelingService: IRefuelable;
    private queue: Queue<Car>;

    constructor(
        diningService: IDineable,
        refuelingService: IRefuelable,
        queue: Queue<Car>
    ) {
        this.diningService = diningService;
        this.refuelingService = refuelingService;
        this.queue = queue;
    }

    // Add a car to the queue
    addCar(car: Car): void {
        this.queue.enqueue(car);
    }

    // Serve cars in the queue
   serveCars(): void {
        while (!this.queue.isEmpty()) {
            const car = this.queue.dequeue();

            // Refuel the car
            this.refuelingService.refuel(car.getId());

            // If the car's passengers need to dine
            if (car.getIsDining()) {
                this.diningService.serveDinner(car.getId());
            }
        }
    }

    public isQueueEmpty(): boolean {
        return this.queue.isEmpty();
    }

    public size(): number {
        return this.queue.size();
    }
}
