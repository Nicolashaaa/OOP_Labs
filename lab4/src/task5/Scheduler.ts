import { spawn } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';
import { Semaphore} from "../task4/Semaphore";
import { Car} from "../task3/Car";

// Constants
const QUEUE_DIR = '../../queue';
const PYTHON_SCRIPT = '../generator.py';
const MAX_CARS = 30; // Number of cars to generate

export class Scheduler {
    private semaphore: Semaphore;

    constructor(semaphore: Semaphore) {
        this.semaphore = semaphore;
    }

    // Start the Python generator script
    private startPythonScript(): Promise<void> {
        return new Promise((resolve, reject) => {
            const pythonProcess = spawn('python3', [PYTHON_SCRIPT]);

            pythonProcess.stdout.on('data', (data) => {
                console.log(`Python: ${data}`);
            });

            pythonProcess.stderr.on('data', (data) => {
                console.error(`Python Error: ${data}`);
            });

            pythonProcess.on('close', (code) => {
                if (code === 0) {
                    resolve();
                } else {
                    reject(new Error(`Python script exited with code ${code}`));
                }
            });
        });
    }

    // Process a single JSON file
    private processFile(filePath: string): void {
        fs.readFile(filePath, 'utf8', (err, data) => {
            if (err) {
                console.error(`Error reading file ${filePath}:`, err);
                return;
            }

            const carData = JSON.parse(data);
            const car = new Car(
                carData.id,
                carData.type,
                carData.passengers,
                carData.isDining,
                carData.consumption
            );

            this.semaphore.navigateCars(car);
        });
    }

    // Monitor the queue directory
    private async monitorQueue(): Promise<void> {
        let processedFiles = 0;

        while (processedFiles < MAX_CARS) {
            const files = await fs.promises.readdir(QUEUE_DIR);

            for (const filename of files) {
                if (filename.endsWith('.json')) {
                    const filePath = path.join(QUEUE_DIR, filename);

                    // Обрабатываем файл, если он существует
                    if (fs.existsSync(filePath)) {
                        this.processFile(filePath);
                        processedFiles += 1;

                        if (processedFiles >= MAX_CARS) {
                            return;
                        }
                    }
                }
            }

            await new Promise((resolve) => setTimeout(resolve, 3000)); // Задержка 300 мс
        }
    }


    // Serve cars in all stations
    private async serveCars(): Promise<void> {
        const carStations = this.semaphore.getCarStations();

        for (const [stationName, station] of Object.entries(carStations)) {
            console.log(`-------------------------------------------`);
            console.log(`Starting to serve cars at ${stationName}`);
            console.log(`-------------------------------------------`);
            await station.serveCars();
            console.log(`-------------------------------------------`);
            console.log(`Finished serving cars at ${stationName}`);
        }
    }

    // Start the Scheduler
    // Start the Scheduler
    public async start(): Promise<void> {
        console.log('Starting Python generator and monitoring queue directory...');

        // Запуск Python-скрипта и мониторинг в параллели
        await Promise.all([this.startPythonScript(), this.monitorQueue()]);

        console.log('Python generator finished and all cars have been processed.');

        console.log('Starting to serve cars...');
        await this.serveCars();
        console.log('All cars have been served.');
    }
}

const semaphore = new Semaphore();
const scheduler = new Scheduler(semaphore);

scheduler.start().catch((err) => console.error(err));
