console.log('Hello World');

let name ='Naim'; //String Literal
let age = 15; //Number Literal
let isApproved = true; //Boolean Literal
let firstName = 'undifined'; //
let selectedColor = null; //

console.log(name, age, isApproved, firstName, selectedColor);




//Cannot be a reserved keyword
//Should be meaningful
//Cannot start with a number (1name)
//Cannot state space or hyphen (-)



let intresetRate = 0.3;
intresetRate = 1;
console.log(intresetRate)

//The secone one comes up become code is read from top to bottom.

let person = {
    name: 'Naim',
    age: 15
};

//Dot notation
person.name = 'John';

//Braket Notation
let selection = 'name';
person['name'] = 'Mary';

console.log(person.name)


let selectedColors = ['red', 'blue'];
selectedColors[2] = 1;
console.log(selectedColors.length);
console.log(selectedColors);

//Making Functions
function greet () {
    console.log('Hello World');
}
greet();
