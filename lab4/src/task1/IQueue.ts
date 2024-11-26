// Queue Interface
export interface IQueue<T> {
    enqueue(item: T): void; // Adds an item to the queue
    dequeue(): T | undefined; // Removes and returns the first item
    peek(): T | undefined; // Returns the first item without removing it
    isEmpty(): boolean; // Checks if the queue is empty
    size(): number; // Returns the number of elements in the queue
}
