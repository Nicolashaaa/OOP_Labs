// Represents a car with details parsed from JSON
export class Car {
   private id: number; // Car ID
   private type: 'ELECTRIC' | 'GAS'; // Type of car (electric or gas)
   private passengers: 'PEOPLE' | 'ROBOTS'; // Passengers type
   private isDining: boolean; // If the passengers need dining
   private consumption: number; // Fuel consumption

   constructor(id: number, type: 'ELECTRIC' | 'GAS', passengers: 'PEOPLE' | 'ROBOTS', isDining: boolean, consumption: number) {
      this.id = id;
      this.type = type;
      this.passengers = passengers;
      this.isDining = isDining;
      this.consumption = consumption;
   }

   // Getter for id
   public getId(): number {
      return this.id;
   }

   // Setter for id
   public setId(id: number): void {
      this.id = id;
   }

   // Getter for type
   public getType(): 'ELECTRIC' | 'GAS' {
      return this.type;
   }

   // Setter for type
   public setType(type: 'ELECTRIC' | 'GAS'): void {
      this.type = type;
   }

   // Getter for passengers
   public getPassengers(): 'PEOPLE' | 'ROBOTS' {
      return this.passengers;
   }

   // Setter for passengers
   public setPassengers(passengers: 'PEOPLE' | 'ROBOTS'): void {
      this.passengers = passengers;
   }

   // Getter for isDining
   public getIsDining(): boolean {
      return this.isDining;
   }

   // Setter for isDining
   public setIsDining(isDining: boolean): void {
      this.isDining = isDining;
   }

   // Getter for consumption
   public getConsumption(): number {
      return this.consumption;
   }

   // Setter for consumption
   public setConsumption(consumption: number): void {
      this.consumption = consumption;
   }
}

