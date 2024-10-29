import * as fs from 'fs';

export class FileReader {
    public static readFileIntoString(filePath: string): string {
        try {
            return fs.readFileSync(filePath, 'utf-8');
        } catch (error) {
            console.error("Ошибка при чтении файла:", error);
            return "";
        }
    }
}
