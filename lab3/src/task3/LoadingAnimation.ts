export class LoadingAnimation {
    private static async loading(message: string): Promise<void> {
        process.stdout.write(`${message}`);
        for (let i = 0; i < 4; i++) {
            await new Promise(resolve => setTimeout(resolve, 500));
            process.stdout.write('.');
        }
        console.log(); 
    }

    public static async animate(message: string): Promise<void> {
        await this.loading(message);
    }
}
