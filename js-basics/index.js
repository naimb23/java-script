/*
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
console.log(addLot(4,8));

//How to make WHILE LOOP
let counter=1;
while (counter<101){
    console.log(counter);
    counter++;
}


//How to get user input
let yourName = prompt ("Please state your name");
alert("Welcome " + yourName + " to your website.");

//Making a password
let password = "magnolia123"
let passwordEntry = prompt("Please enter the correct password");
while (passwordEntry != password){
    passwordEntry = prompt("Please enter the correct password")
}
alert("Welcome");
console.log()



// Creating If Else statements
//Making a clock
let hour = 789;

if (hour >= 6 && hour < 12) {
    console.log('Good Morning');
}
else if (hour >= 12 && hour < 17) {
    console.log('Good Afternoon');
}

else if (hour >= 17 && hour < 21) {
    console.log('Good Evening');
}

else {
    console.log('Good Night');
}

//Finding the age 
let yourAge = prompt("Your Age?");


if (yourAge > 0 && yourAge < 3) {
    alert("You are a baby");
}

else if (yourAge >= 3 && yourAge < 5) {
    alert("You are a toddler");
}

else if (yourAge >= 5 && yourAge <13) {
    alert("You are a elementary student");
}

else if (yourAge >= 12 && yourAge < 20) {
    alert("You are a teenager");
}

else if (yourAge >= 20 && yourAge <32) {
    alert("You are a young adult");
}

else if (yourAge >= 32 && yourAge <65) {
    alert("You are a adult");
}

else {
    alert("You are a senior");
}
*/

