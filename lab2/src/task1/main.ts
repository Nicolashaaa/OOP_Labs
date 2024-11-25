import { Display } from './Display.js'; // Импортируем класс Display

function main(): void {
    // Создание объектов Display
    const display1 = new Display(1920, 1080, 100, "Acer VG270M");
    const display2 = new Display(2560, 1440, 110, "Asus VA24EHF");
    const display3 = new Display(1920, 1080, 90, "AOC e970Swn");

    // Сравнения между дисплеями
    console.log(display1.compareSharpness(display2));
    console.log(display2.compareWithMonitor(display3));
    console.log(display1.compareWithMonitor(display3));
}

// Вызов функции
main();
