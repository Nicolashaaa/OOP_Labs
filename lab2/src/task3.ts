import { Display } from './task1.js';

class Assistant {
    private assistantName: string;
    private assignedDisplays: Display[];

    constructor(assistantName: string) {
        this.assistantName = assistantName;
        this.assignedDisplays = [];
    }

    // Геттер для assistantName
    public getAssistantName(): string {
        return this.assistantName;
    }

    // Метод для добавления дисплея
    public assignDisplay(display: Display): void {
        this.assignedDisplays.push(display);
    }

    // Геттер для получения списка дисплеев
    public getAssignedDisplays(): Display[] {
        return this.assignedDisplays;
    }

    public assist(): void {
        if (this.assignedDisplays.length < 2) {
            console.log("Недостаточно дисплеев для сравнения.");
            return;
        }
        console.log(`Помощник ${this.assistantName} выполняет сравнение дисплеев:`);

        // Цикл для сравнения каждого дисплея со всеми остальными
        for (let i = 0; i < this.assignedDisplays.length; i++) {
            for (let j = i + 1; j < this.assignedDisplays.length; j++) {
                const current = this.assignedDisplays[i];
                const next = this.assignedDisplays[j];
                console.log(current.compareWithMonitor(next));
            }
        }
    }

    public buyDisplay(display: Display): Display | null {
        const index = this.assignedDisplays.indexOf(display);
        if (index !== -1) {
            return this.assignedDisplays.splice(index, 1)[0];
        } else {
            console.log("Дисплей не найден.");
            return null;
        }
    }
}

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
