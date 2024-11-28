import { PeopleDinner } from '../task2/PeopleDinner';
import { RobotDinner } from '../task2/RobotDinner';
import { ElectricStation } from '../task2/ElectricStation';
import { GasStation } from '../task2/GasStation';

export class TestServices {
    private peopleDinner: PeopleDinner;
    private robotDinner: RobotDinner;
    private electricStation: ElectricStation;
    private gasStation: GasStation;

    constructor(
        peopleDinner: PeopleDinner,
        robotDinner: RobotDinner,
        electricStation: ElectricStation,
        gasStation: GasStation
    ) {
        this.peopleDinner = peopleDinner;
        this.robotDinner = robotDinner;
        this.electricStation = electricStation;
        this.gasStation = gasStation;
    }

    public runTests() {
        // Serve dinner to people
        this.peopleDinner.serveDinner(1);
        this.peopleDinner.serveDinner(2);

        // Serve dinner to robots
        this.robotDinner.serveDinner(3);
        this.robotDinner.serveDinner(4);
        this.robotDinner.serveDinner(5);

        // Refuel electric cars
        this.electricStation.refuel(2);

        // Refuel gas cars
        this.gasStation.refuel(1);
        this.gasStation.refuel(3);
        this.gasStation.refuel(4);
        this.gasStation.refuel(5);

        // Validate the total number of people served
        console.assert(PeopleDinner.getTotalServed() === 2, '❌ People served should be 2');

        // Validate the total number of robots served
        console.assert(RobotDinner.getTotalServed() === 3, '❌ Robots served should be 3');

        // Validate the total number of electric cars refueled
        console.assert(ElectricStation.getTotalServed() === 1, '❌ Electric cars refueled should be 1');

        // Validate the total number of gas cars refueled
        console.assert(GasStation.getTotalServed() === 4, '❌ Gas cars refueled should be 4');

        console.log('✔ Service tests completed successfully!');
    }
}

// Использование
const peopleDinner = new PeopleDinner();
const robotDinner = new RobotDinner();
const electricStation = new ElectricStation();
const gasStation = new GasStation();

const testServices = new TestServices(peopleDinner, robotDinner, electricStation, gasStation);
testServices.runTests();
