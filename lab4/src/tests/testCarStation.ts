import { PeopleDinner } from '../task2/PeopleDinner';
import { RobotDinner } from '../task2/RobotDinner';
import { ElectricStation } from '../task2/ElectricStation';
import { GasStation } from '../task2/GasStation';
import { CarStation } from '../task3/CarStation';
import { Car } from '../task3/Car';
import { Queue } from '../task1/Queue';

export class TestCarStation {
    private carStation1: CarStation;
    private carStation2: CarStation;
    private carStation3: CarStation;
    private carStation4: CarStation;

    private car1 = new Car(3, "ELECTRIC", "ROBOTS", true, 41);
    private car2 = new Car(11, "GAS", "PEOPLE", true, 13);
    private car3 = new Car(6, "GAS", "ROBOTS", false, 22);
    private car4 = new Car(12, "ELECTRIC", "PEOPLE", false, 24);
    private car5 = new Car(14, "ELECTRIC", "PEOPLE", true, 55);

    constructor() {
        const queue1 = new Queue<Car>();
        const queue2 = new Queue<Car>();
        const queue3 = new Queue<Car>();
        const queue4 = new Queue<Car>();

        this.carStation1 = new CarStation(new PeopleDinner(), new GasStation(), queue1);
        this.carStation2 = new CarStation(new RobotDinner(), new ElectricStation(), queue2);
        this.carStation3 = new CarStation(new RobotDinner(), new GasStation(), queue3);
        this.carStation4 = new CarStation(new PeopleDinner(), new ElectricStation(), queue4);
    }

    public testService() {
        // Добавляем машины в очереди
        this.carStation1.addCar(this.car2);
        this.carStation2.addCar(this.car1);
        this.carStation3.addCar(this.car3);
        this.carStation4.addCar(this.car4);
        this.carStation4.addCar(this.car5);

        // Обслуживаем машины
        this.carStation1.serveCars();
        this.carStation2.serveCars();
        this.carStation3.serveCars();
        this.carStation4.serveCars();

        // Проверяем, что очереди пусты после обслуживания
        console.assert(this.carStation1.isQueueEmpty(), 'Queue 1 should be empty after serving all cars');
        console.assert(this.carStation2.isQueueEmpty(), 'Queue 2 should be empty after serving all cars');
        console.assert(this.carStation3.isQueueEmpty(), 'Queue 3 should be empty after serving all cars');
        console.assert(this.carStation4.isQueueEmpty(), 'Queue 4 should be empty after serving all cars');
    }
}


const test = new TestCarStation();
test.testService();

console.log('✔ All tests have been successfully completed!');
