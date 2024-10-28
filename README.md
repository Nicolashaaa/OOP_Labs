# OOP_Labs

## Description
This project includes laboratory work on object-oriented programming (OOP). Each task is designed to develop skills in working with classes, object interaction, and handling command-line arguments.

## Tasks
### Task 1: Objects and Object Interaction
Create a `Display` class that includes width, height, pixel density, and model attributes. Instantiate 3 `Display` objects and implement methods to compare the size and sharpness between objects.

### Task 2: Program Arguments and Text Parsing
Use command-line arguments to specify the path to a `.txt` file. Implement a `TextData` class to store and analyze the text read from the file, including the count of vowels, consonants, letters, sentences, and the longest word.

### Task 3: Class Composition
Implement an `Assistant` class that holds a list of `Display` objects. Add methods to assign and compare `Display` objects in the list and provide the option to select one of the displays.

### Task 4: Bonus Task
Extend the functionality from Task 2 to process multiple text files passed via command-line arguments.

## Installation and Setup
To run the project, execute the following commands:

```bash
npm init -y
npm install typescript --save-dev
npx tsc --init
npm install prompt-sync
