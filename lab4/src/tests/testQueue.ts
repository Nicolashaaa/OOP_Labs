import { Queue } from '../task1/Queue';

export function testQueue(queue: Queue<any>) {
    queue.enqueue(1);
    queue.enqueue(2);
    queue.enqueue(3);

    console.assert(queue.size() === 3, '❌  Queue size should be 3');
    console.assert(queue.peek() === 1, '❌  First element should be 1');
    console.assert(queue.dequeue() === 1, '❌  Dequeued element should be 1');
    console.assert(queue.size() === 2, '❌  Queue size should be 2 after dequeue');
    console.assert(queue.peek() === 2, '❌  Next element should be 2');

    queue.dequeue();
    queue.dequeue();
    console.assert(queue.isEmpty(), '❌  Queue should be empty');
}

const queue = new Queue<number>(); // Создаем экземпляр конкретной реализации
    testQueue(queue); // Вызываем тестовую функцию
    console.log('✔ All tests completed!');


