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
function greet (greetName, greetLastname) {
    console.log('Hello World ' + greetName + greetLastname);
}
greet('John', ' Smith');
greet('Mary', ' Baker');


function best (yourName) {
    console.log(yourName + ' is the best programmer.');
}
best('Naim');
//Example that I made myself

//Calculating a value
function square(number) {
    return number*number;
}

console.log((square)(26));

//My own little Project
function areaTri(base, height){
    return height*base/2
}

console.log(areaTri (2 , 8));

//How to make loops

//How to create FOR LOOPS
for (let i = 0; i < 5; i++) {
    console.log('I am the best programmer')
}

//Numbers going to 1 to 1000
for (let i = 0; i <= 100; i++) {
    console.log(i)
}

//Function to find exponet of numbers
function power(base,exponet) {
    result=1;
    for (let i = 0; i < exponet; i++){
        result = result * base;
    }
    return result;
}
console.log(power(4,2))

//Write a functrion that takes two numbers, and starts with the first number and add all the numbers up to the second number

function addLot(begin, finish){
    let result = 0;
    for (let i = begin; i <= finish; i++){
        result=result + i;
    }
    return (result);
}
console.log(addLot(4,8))