import { Cappuccino } from './Cappuccino.js';
import { PumpkinSpiceLatte } from './PumpkinSpiceLatte.js';
import { Americano } from './Americano.js';
import { SyrupCappuccino } from './SyrupCappuccino.js';
import { Intensity } from './Intensity.js';
import { SyrupType } from './SyrupType.js';

function main() {
    const cappuccino = new Cappuccino(Intensity.NORMAL, 150);
    cappuccino.printCoffeeDetails();
    console.log('-----------------------------'); 

    const pumpkinSpiceLatte = new PumpkinSpiceLatte(Intensity.STRONG, 200, 50);
    pumpkinSpiceLatte.printCoffeeDetails();
    console.log('-----------------------------'); 

    const americano = new Americano(Intensity.LIGHT, 300);
    americano.printCoffeeDetails();
    console.log('-----------------------------'); 

    const syrupCappuccino = new SyrupCappuccino(Intensity.NORMAL, 100, SyrupType.CARAMEL);
    syrupCappuccino.printCoffeeDetails();
    console.log('-----------------------------'); 
}

// Call the function to create coffee and print details
main();
