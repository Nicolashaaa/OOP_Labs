import { Queue } from '../task1/Queue';

export class TestQueue {
    private queue: Queue<any>;

    constructor(queue: Queue<any>) {
        this.queue = queue;
    }

    public runTests() {
        this.queue.enqueue(1);
        this.queue.enqueue(2);
        this.queue.enqueue(3);

        console.assert(this.queue.size() === 3, '❌  Queue size should be 3');
        console.assert(this.queue.peek() === 1, '❌  First element should be 1');
        console.assert(this.queue.dequeue() === 1, '❌  Dequeued element should be 1');
        console.assert(this.queue.size() === 2, '❌  Queue size should be 2 after dequeue');
        console.assert(this.queue.peek() === 2, '❌  Next element should be 2');

        this.queue.dequeue();
        this.queue.dequeue();
        console.assert(this.queue.isEmpty(), '❌  Queue should be empty');

        console.log('✔ Queue tests completed successfully!');
    }
}

// Использование
const queue = new Queue<number>();
const testQueue = new TestQueue(queue);
testQueue.runTests();
