import { Barista } from './Barista.js';
import { Cappuccino } from './Cappuccino.js';
import { PumpkinSpiceLatte } from './PumpkinSpiceLatte.js';
import { Americano } from './Americano.js';
import { SyrupCappuccino } from './SyrupCappuccino.js';
import { Intensity } from './Intensity.js';
import { SyrupType } from './SyrupType.js';

function main() {
    const barista = new Barista();

    const cappuccino = new Cappuccino(Intensity.NORMAL, 150);
    const pumpkinSpiceLatte = new PumpkinSpiceLatte(Intensity.STRONG, 200, 50);
    const americano = new Americano(Intensity.LIGHT, 300);
    const syrupCappuccino = new SyrupCappuccino(Intensity.NORMAL, 100, SyrupType.CARAMEL);

    barista.addCoffee(cappuccino);
    barista.addCoffee(pumpkinSpiceLatte);
    barista.addCoffee(americano);
    barista.addCoffee(syrupCappuccino);

    barista.makeCoffees();
}

main();
