import * as readline from 'readline';
import { Coffee } from '../task3/Coffee.js';
import { Cappuccino } from '../task3/Cappuccino.js';
import { PumpkinSpiceLatte } from '../task3/PumpkinSpiceLatte.js';
import { Americano } from '../task3/Americano.js';
import { SyrupCappuccino } from '../task3/SyrupCappuccino.js';
import { Intensity } from '../task2/Intensity.js';
import { SyrupType } from '../task2/SyrupType.js';

export class Barista {
    private coffeeList: Coffee[] = [];
    private rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    public prepareMenu(): void {
        // Prepare default coffee types with customizable parameters
        const cappuccino = new Cappuccino(Intensity.NORMAL, 150);
        const pumpkinSpiceLatte = new PumpkinSpiceLatte(Intensity.STRONG, 200, 50);
        const americano = new Americano(Intensity.LIGHT, 300);
        const syrupCappuccino = new SyrupCappuccino(Intensity.NORMAL, 100, SyrupType.CARAMEL);

        this.addCoffee(cappuccino);
        this.addCoffee(pumpkinSpiceLatte);
        this.addCoffee(americano);
        this.addCoffee(syrupCappuccino);
    }

    public addCoffee(coffee: Coffee): void {
        this.coffeeList.push(coffee);
    }

    private askCoffeeType(): Promise<string> {
        return new Promise(resolve => {
            console.log('What coffee would you like me to make?');
            console.log('1. Cappuccino');
            console.log('2. Pumpkin Spice Latte');
            console.log('3. Americano');
            console.log('4. Syrup Cappuccino');
            console.log('0. Exit');
            this.rl.question('Enter your choice: ', answer => resolve(answer));
        });
    }

    private askIntensity(): Promise<Intensity> {
        return new Promise(resolve => {
            console.log('Select Intensity:');
            console.log('1. Light');
            console.log('2. Normal');
            console.log('3. Strong');
            this.rl.question('Enter intensity number: ', answer => {
                const intensityMap = {
                    '1': Intensity.LIGHT,
                    '2': Intensity.NORMAL,
                    '3': Intensity.STRONG,
                };
                resolve(intensityMap[answer] || Intensity.NORMAL);
            });
        });
    }

    private askSyrupType(): Promise<SyrupType> {
        return new Promise(resolve => {
            console.log('Select Syrup Type:');
            console.log('1. Macadamia');
            console.log('2. Vanilla');
            console.log('3. Coconut');
            console.log('4. Caramel');
            console.log('5. Chocolate');
            console.log('6. Popcorn');
            this.rl.question('Enter syrup type number: ', answer => {
                const syrupMap = {
                    '1': SyrupType.MACADAMIA,
                    '2': SyrupType.VANILLA,
                    '3': SyrupType.COCONUT,
                    '4': SyrupType.CARAMEL,
                    '5': SyrupType.CHOCOLATE,
                    '6': SyrupType.POPCORN,
                };
                resolve(syrupMap[answer]);
            });
        });
    }

    private askPumpkinSpiceAmount(): Promise<number> {
        return new Promise(resolve => {
            this.rl.question('Enter the amount of Pumpkin Spice (in mg): ', answer => {
                const amount = parseInt(answer);
                resolve(isNaN(amount) ? 0 : amount);
            });
        });
    }

    public async makeCoffees(): Promise<void> {
        while (true) {
            const coffeeChoice = await this.askCoffeeType();
            if (coffeeChoice === '0') {
                this.rl.close(); // Close readline interface on exit
                break;
            }
    
            const coffeeIndex = parseInt(coffeeChoice) - 1;
            let intensity: Intensity;
            let syrup: SyrupType | undefined;
            let pumpkinSpiceAmount: number | undefined;
    
            switch (coffeeIndex) {
                case 0: // Cappuccino
                    intensity = await this.askIntensity();
                    const cappuccino = new Cappuccino(intensity, 150);
                    await Cappuccino.makeCappuccino(cappuccino); // Process the coffee making
                    break;
                case 1: // Pumpkin Spice Latte
                    intensity = await this.askIntensity();
                    pumpkinSpiceAmount = await this.askPumpkinSpiceAmount();
                    const pumpkinSpiceLatte = new PumpkinSpiceLatte(intensity, 200, pumpkinSpiceAmount);
                    await PumpkinSpiceLatte.makePumpkinSpiceLatte(pumpkinSpiceLatte); // Pass parameters
                    break;
                case 2: // Americano
                    intensity = await this.askIntensity();
                    const americano = new Americano(intensity, 300);
                    await Americano.makeAmericano(americano); // Process the coffee making
                    break;
                case 3: // Syrup Cappuccino
                    intensity = await this.askIntensity();
                    syrup = await this.askSyrupType();
                    const syrupCappuccino = new SyrupCappuccino(intensity, 100, syrup);
                    await SyrupCappuccino.makeSyrupCappuccino(syrupCappuccino); // Pass syrup parameter
                    break;
                default:
                    console.log('Invalid choice, please try again.');
                    continue;
            }
    
            console.log('Your coffee is ready!');
            console.log('---------------------------');
        }
    }
    
}
