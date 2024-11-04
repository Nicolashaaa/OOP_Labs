import { FileReader } from '../task2/FileReader.js';
import { TextData } from '../task2/TextData.js';
import * as path from 'path';

// Главная функция для обработки нескольких файлов
function main(args: string[]): void {
    if (args.length === 0) {
        console.log("Пожалуйста, укажите пути к текстовым файлам для обработки.");
        return;
    }

    // Обрабатываем каждый файл и создаем объект TextData для каждого
    args.forEach((filePath) => {
        try {
            const text = FileReader.readFileIntoString(filePath);
            const fileName = path.basename(filePath);
            const textData = new TextData(fileName, text);
            textData.printInfo();
        } catch (error) {
            console.log(`Ошибка при чтении файла ${filePath}: ${error.message}`);
        }
    });
}

// Запуск программы с аргументами командной строки
main(process.argv.slice(2));
