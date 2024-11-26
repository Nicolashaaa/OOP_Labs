import { PeopleDinner } from '../task2/PeopleDinner';
import { RobotDinner } from '../task2/RobotDinner';
import { ElectricStation } from '../task2/ElectricStation';
import { GasStation } from '../task2/GasStation';
import { CarStation } from '../task3/CarStation';
import { ICar } from '../task3/ICar';
import { Queue } from '../task1/Queue';

export function testCarStation(
    carStation: CarStation
    ){
    carStation.addCar({"id": 3, "type": "ELECTRIC", "passengers": "ROBOTS", "isDining": true, "consumption": 41});
    carStation.addCar({"id": 11, "type": "GAS", "passengers": "PEOPLE", "isDining": true, "consumption": 13});
    carStation.addCar({"id": 6, "type": "GAS", "passengers": "ROBOTS", "isDining": false, "consumption": 22});
    carStation.addCar({"id": 12, "type": "ELECTRIC", "passengers": "PEOPLE", "isDining": false, "consumption": 24});
    carStation.addCar({"id": 14, "type": "ELECTRIC", "passengers": "PEOPLE", "isDining": true, "consumption": 55});

    carStation.serveCars();
    console.assert(queue.isEmpty(), 'Queue should be empty after serving all cars');

    console.assert(ElectricStation.count === 3, 'Electric cars refueled should be 3');
    console.assert(GasStation.count === 2, 'Gas cars refueled should be 2');
    console.assert(PeopleDinner.count === 2, 'People served should be 2');
    console.assert(RobotDinner.count === 1, 'Robots served should be 1');
}

const queue = new Queue<ICar>(); // Очередь для машин
const peopleDinner = new PeopleDinner(); // Сервис для людей
const robotDinner = new RobotDinner(); // Сервис для роботов
const electricStation = new ElectricStation(); // Станция для электрических машин
const gasStation = new GasStation(); // Станция для газовых машин
const carStation = new CarStation(
    peopleDinner,
    robotDinner,
    electricStation,
    gasStation,
    queue
);

// Запускаем тест
testCarStation(carStation);
console.log('✔ All tests have been successfully completed!');