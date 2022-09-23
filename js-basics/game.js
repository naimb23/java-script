let secretNumber = Math.floor(Math.random() * 100);
let number = null
let trial =0;

while (number != secretNumber) {
    trial+=1;
    
    alert("Guess number " + trial);
    if(trial>4){
        alert ("Game Over! The number was " + secretNumber)
        break;
    }
    let number = prompt ("Guess the number");
    
    if (number > secretNumber) {
        alert("Go down");
    }
    
    else if (number < secretNumber) {
        alert("Go up");
    }
    
    else if (number == secretNumber){
        alert("You are correct");
        break;
    }

    else 
        alert("Enter a valid number");
}

