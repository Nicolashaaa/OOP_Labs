import * as path from 'path';
import { FileReader } from './FileReader.js'; // Импортируем класс FileReader
import { TextData } from './TextData.js'; // Импортируем класс TextData

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

    try {
        const text = FileReader.readFileIntoString(filePath);
        const fileName = path.basename(filePath);
        const textData = new TextData(fileName, text);
        textData.printInfo();
    } catch (error) {
        console.log(`Ошибка при чтении файла ${filePath}: ${error.message}`);
    }

    
}

// Запуск программы с аргументами командной строки
main(process.argv.slice(2));
