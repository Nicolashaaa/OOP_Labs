// Dineable Interface
export interface IDineable<T>{
    serveDinner(item: T): string;
}