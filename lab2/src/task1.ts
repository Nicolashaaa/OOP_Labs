class Display {
    private width: number;
    private height: number;
    private ppi: number;
    private model: string;

    constructor(width: number, height: number, ppi: number, model: string) {
        this.width = width;
        this.height = height;
        this.ppi = ppi;
        this.model = model;
    }

    public compareSize(other: Display): string {
        if (this.width * this.height > other.width * other.height) {
            return `${this.model} is bigger than ${other.model}.`;
        } else if (this.width * this.height < other.width * other.height) {
            return `${this.model} is smaller than ${other.model}.`;
        } else {
            return `${this.model} is the same size as ${other.model}.`;
        }
    }

    public compareSharpness(other: Display): string {
        if (this.ppi > other.ppi) {
            return `${this.model} is sharper than ${other.model}.`;
        } else if (this.ppi < other.ppi) {
            return `${this.model} is less sharp than ${other.model}.`;
        } else {
            return `${this.model} has the same sharpness as ${other.model}.`;
        }
    }

    public compareWithMonitor(other: Display): string {
        const sizeComparison = this.compareSize(other);
        const sharpnessComparison = this.compareSharpness(other);
        return `${sizeComparison}\n${sharpnessComparison}`;
    }
}

// Создание объектов Display
const display1 = new Display(1920, 1080, 100, "Acer VG270M");
const display2 = new Display(2560, 1440, 110, "Asus VA24EHF");
const display3 = new Display(1920, 1080, 90, "AOC e970Swn");

// Сравнения между дисплеями
console.log(display1.compareSharpness(display2));
console.log(display2.compareWithMonitor(display3));
console.log(display1.compareWithMonitor(display3));
