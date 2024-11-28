import { Car } from '../task3/Car';
import { Semaphore } from "../task4/Semaphore";
export class TestSemaphore {
    private car1 = new Car(3, "ELECTRIC", "ROBOTS", true, 41);
    private car2 = new Car(11, "GAS", "PEOPLE", true, 13);
    private car3 = new Car(6, "GAS", "ROBOTS", false, 22);
    private car4 = new Car(12, "ELECTRIC", "PEOPLE", true, 24);
    private car5 = new Car(14, "ELECTRIC", "PEOPLE", true, 55);
    private semaphore = new Semaphore;
    public testService() {
        const stations = this.semaphore.getCarStations();
        this.semaphore.navigateCars(this.car1);
        this.semaphore.navigateCars(this.car2);
        this.semaphore.navigateCars(this.car3);
        this.semaphore.navigateCars(this.car4);
        this.semaphore.navigateCars(this.car5);

         console.assert(stations.station1.size() === 1, 'People served should be 2');
    // Validate the total number of robots served
        console.assert(stations.station2.size() === 2, 'Robots served should be 3');
    // Validate the total number of electric cars refueled
        console.assert(stations.station3.size() === 1, 'Electric cars refueled should be 2');
    // Validate the total number of gas cars refueled
        console.assert(stations.station4.size() === 4 , 'Gas cars refueled should be 4');

        stations.station1.serveCars();
        stations.station2.serveCars();
        stations.station3.serveCars();
        stations.station4.serveCars();

        console.assert(stations.station1.isQueueEmpty(), 'Gas cars refueled should be 4');
        console.assert(stations.station2.isQueueEmpty(), 'Gas cars refueled should be 4');
        console.assert(stations.station3.isQueueEmpty(), 'Gas cars refueled should be 4');
        console.assert(stations.station4.isQueueEmpty(), 'Gas cars refueled should be 4');

        console.log('✔ Semaphore tests completed successfully!');

    }
}

const test = new TestSemaphore();
test.testService();
