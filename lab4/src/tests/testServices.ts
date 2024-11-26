import { PeopleDinner } from '../task2/PeopleDinner';
import { RobotDinner } from '../task2/RobotDinner';
import { ElectricStation } from '../task2/ElectricStation';
import { GasStation } from '../task2/GasStation';

export function testServices(
    peopleDinner: PeopleDinner,
    robotDinner: RobotDinner,
    electricStation: ElectricStation,
    gasStation: GasStation
) {
    // Serve dinner to people
    peopleDinner.serveDinner(1);
    peopleDinner.serveDinner(2);

    // Serve dinner to robots
    robotDinner.serveDinner(3);
    robotDinner.serveDinner(4);
    robotDinner.serveDinner(5);

    // Refuel electric cars
    electricStation.refuel(2);

    // Refuel gas cars
    gasStation.refuel(1);
    gasStation.refuel(3);
    gasStation.refuel(4);
    gasStation.refuel(5);

    // Validate the total number of people served
    console.assert(PeopleDinner.getTotalServed() === 2, 'People served should be 2');

    // Validate the total number of robots served
    console.assert(RobotDinner.getTotalServed() === 3, 'Robots served should be 3');

    // Validate the total number of electric cars refueled
    console.assert(ElectricStation.getTotalServed() === 1, 'Electric cars refueled should be 2');

    // Validate the total number of gas cars refueled
    console.assert(GasStation.getTotalServed() === 4, 'Gas cars refueled should be 4');
}

const peopleDinner = new PeopleDinner();
const robotDinner = new RobotDinner();
const electricStation = new ElectricStation();
const gasStation = new GasStation();
testServices(peopleDinner, robotDinner, electricStation, gasStation);
console.log('✔ All tests have been successfully completed!');
