let number = Math.floor(Math.random() * 101) + 1;  // Generate a random number between 1 and 100 

let guess = prompt("Guess a number between 1 and 100: ");
let numberOfGuess = 100;

while ((guess != number)  && (numberOfGuess != 0)){
    
    if (guess < number){
        console.log("Your guess is less than the actually number.")
    }
    else if(guess > number){
        console.log("Your guess is greater than the actually number.")
    }
    numberOfGuess--;
    guess = prompt("Guess a number between 1 and 100: ");

}

if (guess == number){
    console.log("Your guess is correct and your score is = " + numberOfGuess)
}
