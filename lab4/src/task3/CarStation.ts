// CarStation.ts
import { PeopleDinner } from '../task2/PeopleDinner';
import { RobotDinner } from '../task2/RobotDinner';
import { ElectricStation } from '../task2/ElectricStation';
import { GasStation } from '../task2/GasStation';
import { Queue } from '../task1/Queue';
import { ICar } from "./ICar";

// Define the CarStation class
export class CarStation {
    private peopleDinnerService: PeopleDinner;
    private robotDinnerService: RobotDinner;
    private electricRefuelService: ElectricStation;
    private gasRefuelService: GasStation;
    private queue: Queue<ICar>;

    constructor(
        peopleDinnerService: PeopleDinner,
        robotDinnerService: RobotDinner,
        electricRefuelService: ElectricStation,
        gasRefuelService: GasStation,
        queue: Queue<ICar>
    ) {
        this.peopleDinnerService = peopleDinnerService;
        this.robotDinnerService = robotDinnerService;
        this.electricRefuelService = electricRefuelService;
        this.gasRefuelService = gasRefuelService;
        this.queue = queue;
    }

    // Add a car to the queue
    addCar(car: ICar): void {
        this.queue.enqueue(car);
    }

    // Serve cars in the queue
    serveCars(): void {
        while (!this.queue.isEmpty()) {
            const car = this.queue.dequeue();

            // Choose the correct refueling service based on the car type
            if (car.type === "ELECTRIC") {
                this.electricRefuelService.refuel(car.id); // Refuel electric cars
            } else if (car.type === "GAS") {
                this.gasRefuelService.refuel(car.id); // Refuel gas cars
            }

            // Serve dinner depending on the passengers (people or robots)
            if (car.passengers === "PEOPLE" && car.isDining) {
                this.peopleDinnerService.serveDinner(car.id); // Serve dinner to people
            } else if (car.passengers === "ROBOTS" && car.isDining) {
                this.robotDinnerService.serveDinner(car.id); // Serve oil to robots
            }
        }
    }
}
