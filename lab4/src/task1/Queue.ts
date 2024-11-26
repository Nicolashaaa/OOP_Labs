import { IQueue } from './IQueue';

// Array-based Queue Implementation
export class Queue<T> implements IQueue<T> {
    private items: T[] = []; // Internal array to store queue elements

    enqueue(item: T): void {
        this.items.push(item); // Add item to the end of the array
    }

    dequeue(): T | undefined {
        return this.items.shift(); // Remove and return the first item
    }

    peek(): T | undefined {
        return this.items[0]; // Return the first item without removing it
    }

    isEmpty(): boolean {
        return this.items.length === 0; // Check if the queue is empty
    }

    size(): number {
        return this.items.length; // Return the size of the queue
    }
}
