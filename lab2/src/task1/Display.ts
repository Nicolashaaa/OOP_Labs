export class Display {
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

    public getWidth(): number {
        return this.width;
    }

    public getHeight(): number {
        return this.height;
    }

    public getPpi(): number {
        return this.ppi;
    }

    public getModel(): string {
        return this.model;
    }

    public compareSize(other: Display): string {
        if (this.width * this.height > other.getWidth() * other.getHeight()) {
            return `${this.model} is bigger than ${other.getModel()}.`;
        } else if (this.width * this.height < other.getWidth() * other.getHeight()) {
            return `${this.model} is smaller than ${other.getModel()}.`;
        } else {
            return `${this.model} is the same size as ${other.getModel()}.`;
        }
    }

    public compareSharpness(other: Display): string {
        if (this.ppi > other.getPpi()) {
            return `${this.model} is sharper than ${other.getModel()}.`;
        } else if (this.ppi < other.getPpi()) {
            return `${this.model} is less sharp than ${other.getModel()}.`;
        } else {
            return `${this.model} has the same sharpness as ${other.getModel()}.`;
        }
    }

    public compareWithMonitor(other: Display): string {
        const sizeComparison = this.compareSize(other);
        const sharpnessComparison = this.compareSharpness(other);
        return `${sizeComparison}\n${sharpnessComparison}`;
    }
}