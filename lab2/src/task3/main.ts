import { Assistant } from './Assistant.js';
import { Display } from '../task1/Display.js';

// Примеры использования
const display1 = new Display(1920, 1080, 100, "Acer VG270M");
const display2 = new Display(2560, 1440, 110, "Asus VA24EHF");
const display3 = new Display(1920, 1080, 90, "AOC e970Swn");

const assistant = new Assistant("Tech Assistant");

assistant.assignDisplay(display1);
assistant.assignDisplay(display2);
assistant.assignDisplay(display3);

assistant.assist(); 

const boughtDisplay = assistant.buyDisplay(display2);
if (boughtDisplay) {
    console.log(`Куплен дисплей: ${boughtDisplay.getModel()}`);
}
