import { Cappuccino } from './Cappuccino.js';
import { PumpkinSpiceLatte } from './PumpkinSpiceLatte.js';
import { Americano } from './Americano.js';
import { SyrupCappuccino } from './SyrupCappuccino.js';
import { Intensity } from '../task2/Intensity.js';
import { SyrupType } from '../task2/SyrupType.js';

async function main() {
    const drinks = [
        { type: Cappuccino, intensity: Intensity.NORMAL, ml: 150 },
        { type: PumpkinSpiceLatte, intensity: Intensity.STRONG, ml: 200, spice: 50 },
        { type: Americano, intensity: Intensity.LIGHT, ml: 300 },
        { type: SyrupCappuccino, intensity: Intensity.NORMAL, ml: 100, syrup: SyrupType.CARAMEL }
    ];

    for (const drink of drinks) {
        const { type, intensity, ml, spice, syrup } = drink;
        let instance;

        if (type === PumpkinSpiceLatte) {
            instance = new type(intensity, ml, spice);
            await type.makePumpkinSpiceLatte(instance);
        } else if (type === SyrupCappuccino) {
            instance = new type(intensity, ml, syrup);
            await type.makeSyrupCappuccino(instance);
        } else if (type === Cappuccino) {
            instance = new type(intensity, ml);
            await type.makeCappuccino(instance);
        } else if (type === Americano){
            instance = new type(intensity, ml);
            await type.makeAmericano(instance); 
        }

        console.log('-----------------------------'); 
    }
}

// Call the function to create coffee and print details
main();
