// Refuelable Interface
export interface IRefuelable<T>{
    refuel(item: T): string;
}