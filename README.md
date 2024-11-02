# OOP_Labs
# Laboratory Work: Class Hierarchy for Coffee Application

## Description
This laboratory work focuses on creating a class hierarchy using inheritance based on a coffee application. Various classes will be developed to represent different types of coffee, and key OOP principles such as encapsulation, inheritance, and polymorphism will be implemented.

## Objectives
- Master inheritance for class structure.
- Use class variables for data reuse.
- Study method overriding and the `super` keyword.
- Practice encapsulation at the module level.
- Hide logical data.

## Project Structure
The project consists of the following files:

- `Intensity.ts`: Enumeration for specifying coffee intensity.
- `SyrupType.ts`: Enumeration for defining syrup types.
- `Coffee.ts`: Base class for all types of coffee.
- `Cappuccino.ts`: Class representing a cappuccino.
- `PumpkinSpiceLatte.ts`: Class representing a pumpkin spice latte.
- `Americano.ts`: Class representing an americano.
- `SyrupCappuccino.ts`: Class representing a syrup cappuccino.

## Tasks
### Task 1: Coffee and More Coffee
Create a class hierarchy for the coffee application, including the base class `Coffee` and derived classes: `Cappuccino`, `PumpkinSpiceLatte`, `Americano`, and `SyrupCappuccino`.

### Task 2: Inheritance Behavior, Part 1
Add the method `printDetails()` in each class to display coffee details using method overriding.

### Task 3: Inheritance Behavior, Part 2
Add methods for creating each type of coffee, such as `makeCappuccino()`, `makePumpkinSpiceLatte()`, etc.

### Task 4: Barista, Work Begins
Create a class `Barista` that interacts with the coffee classes and hides the implementation details.

## Submission Instructions
After completing all tasks, create a Pull Request to the main branch and send the link to the PR for review.

## Evaluation Criteria
- Initial grade: 4.
- Completing all tasks while adhering to code standards and directory structure can yield up to 10 points.

## Technologies Used
- TypeScript
- OOP (Object-Oriented Programming)

## How to Run the Project
1. Install dependencies, if any.
2. Run the project using the command:
   ```bash
   npm start
