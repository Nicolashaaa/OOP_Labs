// CarStation.ts
import { IDineable } from "../task2/IDineable";
import { IRefuelable } from "../task2/IRefuelable";
import { Queue } from '../task1/Queue';
import { Car } from "./Car";
import { LoadingAnimation } from "./LoadingAnimation";

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
   async serveCars(): Promise<void> {
        while (!this.queue.isEmpty()) {
            const car = this.queue.dequeue();

            if (!car) continue; // Skip if no car found

            // Delay based on car consumption
            const delay = (car.getConsumption() / 20) * 1000; // Convert to milliseconds

            await LoadingAnimation.animate(`Serving car ID ${car.getId()}`, delay);

            // Refuel the car
            this.refuelingService.refuel(car.getId());

            // If the car's passengers need to dine
            if (car.getIsDining()) {
                this.diningService.serveDinner(car.getId());
            }

            console.log(`Car ID ${car.getId()} served. Waiting ${delay / 1000} seconds for next car.`);

            await new Promise((resolve) => setTimeout(resolve, delay));
        }
    }

    public isQueueEmpty(): boolean {
        return this.queue.isEmpty();
    }

    public size(): number {
        return this.queue.size();
    }
}
