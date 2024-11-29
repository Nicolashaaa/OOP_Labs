export class LoadingAnimation {
    private static async loadingBar(message: string, delay: number): Promise<void> {
        const totalSteps = 40; // Количество шагов для заполнения полосы
        const stepDelay = delay / totalSteps; // Задержка между шагами
        const barWidth = 40; // Ширина полосы в символах
        let progress = 0;

        process.stdout.write(`${message} (progress)=> [${' '.repeat(barWidth)}] 0%`);

        for (let i = 0; i <= totalSteps; i++) {
            await new Promise(resolve => setTimeout(resolve, stepDelay));

            // Обновляем прогресс
            progress = Math.floor((i / totalSteps) * 100);

            const filledBars = Math.floor((i / totalSteps) * barWidth);
            const emptyBars = barWidth - filledBars;

            // Перерисовываем строку
            process.stdout.clearLine(0); // Очищаем текущую строку
            process.stdout.cursorTo(0); // Перемещаем курсор в начало строки
            process.stdout.write(`${message} (progress)=> [${'#'.repeat(filledBars)}${' '.repeat(emptyBars)}] ${progress}%`);
        }

        console.log(); // Переход на новую строку
    }

    public static async animate(message: string, delay: number): Promise<void> {
        await this.loadingBar(message, delay);
    }
}
