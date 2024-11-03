import { Coffee } from './Coffee.js';
import { Cappuccino } from './Cappuccino.js';
import { PumpkinSpiceLatte } from './PumpkinSpiceLatte.js';
import { Americano } from './Americano.js';
import { SyrupCappuccino } from './SyrupCappuccino.js';
import { Intensity } from './Intensity.js';
import { SyrupType } from './SyrupType.js';

export class Barista {
    private coffeeList: Coffee[] = [];

    // Метод для добавления кофе в список
    public addCoffee(coffee: Coffee): void {
        this.coffeeList.push(coffee);
    }

    // Метод для приготовления и печати деталей каждого кофе в списке
    public makeCoffees(): void {
        this.coffeeList.forEach(coffee => {
            if (coffee instanceof Cappuccino) {
                coffee.makeCappuccino();
            } else if (coffee instanceof PumpkinSpiceLatte) {
                coffee.makePumpkinSpiceLatte();
            } else if (coffee instanceof Americano) {
                coffee.makeAmericano();
            } else if (coffee instanceof SyrupCappuccino) {
                coffee.makeSyrupCappuccino();
            }
            console.log('---------------------------'); // Разделение между выводами
        });
    
    }
}
