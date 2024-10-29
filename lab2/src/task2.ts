import * as fs from 'fs';
import * as path from 'path';

class FileReader {
    public static readFileIntoString(filePath: string): string {
        try {
            return fs.readFileSync(filePath, 'utf-8');
        } catch (error) {
            console.error("Ошибка при чтении файла:", error);
            return "";
        }
    }
}

class TextData {
    private fileName: string;
    private text: string;
    private numberOfVowels: number;
    private numberOfConsonants: number;
    private numberOfLetters: number;
    private numberOfSentences: number;
    private longestWord: string;

    constructor(text: string, fileName: string) {
        this.text = text;
        this.fileName = fileName;
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
}

// Главная функция, принимающая аргументы командной строки
function main(args: string[]) {
    if (args.length < 1) {
        console.error("Укажите путь к текстовому файлу в качестве аргумента.");
        return;
    }

    const filePath = args[0];
    const text = FileReader.readFileIntoString(filePath);

    if (!text) {
        console.error("Не удалось прочитать файл или он пустой.");
        return;
    }

    const fileName = path.basename(filePath);
    const textData = new TextData(text, fileName);

    console.log(`File Name: ${textData.getFilename()}`);
    console.log(`Text: ${textData.getText()}`);
    console.log(`Number of Vowels: ${textData.getNumberOfVowels()}`);
    console.log(`Number of Consonants: ${textData.getNumberOfConsonants()}`);
    console.log(`Number of Letters: ${textData.getNumberOfLetters()}`);
    console.log(`Number of Sentences: ${textData.getNumberOfSentences()}`);
    console.log(`Longest Word: ${textData.getLongestWord()}`);
}

// Запуск программы с аргументами командной строки
main(process.argv.slice(2));
