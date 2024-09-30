// Task 1.1

/* 
let answer = 0;
let userGuess = 0;

process.stdout.write("Guess a number from 1 to 10: ");
process.stdin.on("data",function(inputFromUser)
{
    userGuess = parseInt(inputFromUser);
    answer = userGuess + 1;
    process.stdout.write(userGuess + " was a great guess, however, the answer was " + answer + ".\nBetter luck next time.");
    process.exit();

});
*/

// Task 1.2

/*
let convertedNumber
let milesInput = 0;
process.stdout.write("How many miles do you want to convert?\nInput: ");
process.stdin.on("data",function(inputFromUser)
{
    milesInput = parseFloat(inputFromUser);
    convertedNumber = inputFromUser * kilometres;
    convertedNumber = Math.round(convertedNumber);
    process.stdout.write(milesInput + " miles is " + convertedNumber + " kilometres.");
    process.exit();
}
); */

// Task 1.3

/*
let metersInput = 0;
let kilometres = 0.001
let miles = 0.0006213712;
let yards = 1.093613;
let feet = 3.28084;
let inches = 39.37008;
let lightYears = 0;

process.stdout.write("How many meters do you want to convert?\nInput: ");
process.stdin.on("data",function(inputFromUser)
{
    metersInput = Number(inputFromUser);
    process.stdout.write(metersInput + " meters is:\n");
    
    kilometres = kilometres * metersInput;
    process.stdout.write(kilometres.toFixed(3) + " kilometres\n");

    miles = miles * metersInput;
    process.stdout.write(miles.toFixed(3) + " miles\n");

    yards = yards * metersInput;
    process.stdout.write(yards.toFixed(3) + " yards\n");

    feet = feet * metersInput;
    process.stdout.write(feet.toFixed(3) + " feet\n");

    inches = inches * metersInput;
    process.stdout.write(inches.toFixed(3) + " inches\n");

    lightYears = lightYears * metersInput;
    process.stdout.write(lightYears + " light years\n");

    process.exit();
}
); 
*/

// Task 1.4

let userInput = 0;
let userInput2 = 0;
let userInput3 = 0;
let mathResult = 0;

process.stdout.write("Type in a number to user for math stuff: ");
process.stdin.on("data",function(inputFromUser)
{
    userInput = Number(inputFromUser);
    userInputStatic = Number(inputFromUser);
    userInput2 = Number(inputFromUser);
    mathResult = userInput + userInput;
    process.stdout.write(userInput + " + " + userInput + " = " + mathResult)
    mathResult = userInput - userInput;
    process.stdout.write("\n" + userInput + " - " + userInput + " = " + mathResult)
    mathResult = userInput * userInput;
    process.stdout.write("\n" + userInput + " * " + userInput + " = " + mathResult)
    mathResult = userInput / userInput;
    process.stdout.write("\n" + userInput + " / " + userInput + " = " + mathResult)
    mathResult = userInput % userInput;
    process.stdout.write("\n" + userInput + " % " + userInput + " = " + mathResult)
    userInput = Number(inputFromUser);
    mathResult = ++userInput;
    process.stdout.write("\n" + userInputStatic + "++" + " = " + mathResult)
    userInput = Number(inputFromUser);
    mathResult = --userInput2;
    process.stdout.write("\n" + userInputStatic + "--" + " = " + mathResult)
    

    process.exit();
}
); 