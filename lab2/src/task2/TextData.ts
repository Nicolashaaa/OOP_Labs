export class TextData {
    private fileName: string;
    private text: string;
    private numberOfVowels: number;
    private numberOfConsonants: number;
    private numberOfLetters: number;
    private numberOfSentences: number;
    private longestWord: string;

    constructor(fileName: string, text: string) {
        this.fileName = fileName;
        this.text = text;
        this.numberOfVowels = this.countVowels();
        this.numberOfConsonants = this.countConsonants();
        this.numberOfLetters = this.countLetters();
        this.numberOfSentences = this.countSentences();
        this.longestWord = this.findLongestWord();
    }

    private countVowels(): number {
        const vowels = this.text.match(/[aeiouAEIOU]/g);
        return vowels ? vowels.length : 0;
    }

    private countConsonants(): number {
        const consonants = this.text.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g);
        return consonants ? consonants.length : 0;
    }

    private countLetters(): number {
        const letters = this.text.match(/[a-zA-Z]/g);
        return letters ? letters.length : 0;
    }

    private countSentences(): number {
        const sentences = this.text.match(/[.!?]/g);
        return sentences ? sentences.length : 0;
    }

    private findLongestWord(): string {
        const words = this.text.match(/\b\w+\b/g);
        if (!words) return "";
        return words.reduce((longest, current) => current.length > longest.length ? current : longest, "");
    }

    public getFilename(): string {
        return this.fileName;
    }

    public getText(): string {
        return this.text;
    }

    public getNumberOfVowels(): number {
        return this.numberOfVowels;
    }

    public getNumberOfConsonants(): number {
        return this.numberOfConsonants;
    }

    public getNumberOfLetters(): number {
        return this.numberOfLetters;
    }

    public getNumberOfSentences(): number {
        return this.numberOfSentences;
    }

    public getLongestWord(): string {
        return this.longestWord;
    }

    public printInfo(): void {
        console.log(`\nFile: ${this.fileName}`);
        console.log(`Text: ${this.text}`); // Добавлено отображение текста
        console.log(`Number of Vowels: ${this.numberOfVowels}`);
        console.log(`Number of Consonants: ${this.numberOfConsonants}`);
        console.log(`Number of Letters: ${this.numberOfLetters}`);
        console.log(`Number of Sentences: ${this.numberOfSentences}`);
        console.log(`Longest Word: ${this.longestWord}`);
    }
}
