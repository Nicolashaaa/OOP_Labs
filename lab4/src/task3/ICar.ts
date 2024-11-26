// Represents a car with details parsed from JSON
export interface ICar {
    id: number, // Car ID
    type: 'ELECTRIC' | 'GAS', // Type of car (electric or gas)
    passengers: 'PEOPLE' | 'ROBOTS', // Passengers type
    isDining: boolean, // If the passengers need dining
    consumption: number // Fuel consumption
}
