import { Car } from '../task3/Car';
import { CarStation } from '../task3/CarStation';
import { ElectricStation } from '../task2/ElectricStation';
import { GasStation } from '../task2/GasStation';
import { PeopleDinner } from '../task2/PeopleDinner';
import { RobotDinner } from '../task2/RobotDinner';
import {Queue} from "../task1/Queue";

class Semaphore {
    private carStation1: CarStation;
    private carStation2: CarStation;
    private carStation3: CarStation;
    private carStation4: CarStation;


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
    public navigateCars(car: Car): void {
        if (car.getIsDining()) {
            switch (car.getPassengers()) {
                case 'PEOPLE':
                    switch (car.getType()) {
                        case 'GAS':
                            this.carStation1.addCar(car);
                            break;
                        case 'ELECTRIC':
                            this.carStation2.addCar(car);
                            break;
                    }
                    break;
                case 'ROBOTS':
                    switch (car.getType()) {
                        case 'GAS':
                            this.carStation3.addCar(car);
                            break;
                        case 'ELECTRIC':
                            this.carStation4.addCar(car);
                            break;
                    }
                    break;
            }
        } else {
            switch (car.getType()) {
                case 'GAS':
                    if (this.carStation1.size() <= this.carStation3.size()) {
                        this.carStation1.addCar(car);
                    } else {
                        this.carStation3.addCar(car);
                    }
                    break;
                case 'ELECTRIC':
                    if (this.carStation2.size() <= this.carStation4.size()) {
                        this.carStation2.addCar(car);
                    } else {
                        this.carStation4.addCar(car);
                    }
                    break;
            }
        }
    }
}