/* Task 2.1 Largest Number v.0.1
process.stdin.on("data",function(inputFromUser)
{
    let numberInString = inputFromUser.toString().split(" ");
    let firstNumber = Number(numberInString[0]);
    let secondNumber = Number(numberInString[1]);
if (firstNumber > secondNumber) {
    process.stdout.write("First number is bigger.");
} else if (firstNumber < secondNumber) {
        process.stdout.write("Second number is bigger.");
    } else {
        process.stdout.write("The numbers are equal.");
    }

process.exit();
});
*/

/* Task 2.2 Largest Number v.0.2

process.stdin.on("data",function(inputFromUser)
{
    let numberInString = inputFromUser.toString().split(" ");
    let firstNumber = Number(numberInString[0]);
    let secondNumber = Number(numberInString[1]);
    let thirdNumber = Number(numberInString[2]);

    if ((firstNumber > secondNumber) && (firstNumber > thirdNumber)) {
        process.stdout.write("First number is the biggest.");
    } else if ((secondNumber > firstNumber) && (secondNumber > thirdNumber)) {
        process.stdout.write("Second number is the biggest.");
    } else if ((thirdNumber > firstNumber) && (thirdNumber > secondNumber)) {
        process.stdout.write("Third number is the biggest.");
    } else {
        process.stdout.write("All numbers are equal.");
    }

process.exit();
}); */

/* Task 2.3 Even or Odd

process.stdin.on("data",function(inputFromUser)
{
    let givenNumber = Number(inputFromUser);

    if (givenNumber % 2) {
        process.stdout.write("Is odd.")
    } else {
        process.stdout.write("Is even.")
    }
 
process.exit();
}); 

*/

/* Task 4 Yes or No

process.stdout.write("Do you like animals? Y/N: ")
process.stdin.on("data",function(inputFromUser)
{
    let givenAnswer = inputFromUser.toString().trim().toLowerCase();
    if (givenAnswer == "y") {
        process.stdout.write("You are an animal lover.");
    } else if (givenAnswer == "n") {
        process.stdout.write("Why though? Give them a chance.");
    } else {
        process.stdout.write("Invalid answer. Please try again.");
    }
 
process.exit();
}); 
*/

/* Task 4 Logical Operators

process.stdin.on("data",function(inputFromUser)
{
    let numberInString = inputFromUser.toString().split(" ");
    let firstNumber = Number(numberInString[0]);
    let secondNumber = Number(numberInString[1]);
    let thirdNumber = Number(numberInString[2]);

    if (!isNaN(firstNumber) && !isNaN(secondNumber) && !isNaN(thirdNumber)) {

    if ((firstNumber == 2) || (secondNumber == 2) || (thirdNumber == 2)) {
        process.stdout.write("You found the number two!");
    } else if ((firstNumber != secondNumber) && (secondNumber != thirdNumber) && (firstNumber != thirdNumber)) {
        process.stdout.write("All numbers are different.");
    } else if ((firstNumber == secondNumber) && (firstNumber == thirdNumber)) {
        process.stdout.write("All three numbers are the same.");
    } else if ((firstNumber == secondNumber) && (firstNumber != thirdNumber)) {
        process.stdout.write("First two numbers are the same but third one is different.");
    } else {
        process.stdout.write("No special conditions met.");
    }

} else {
    process.stdout.write("Invalid input!");
}

    process.exit();

    });

*/

let currentDate = new Date();

process.stdout.write("Choose an option from the list:\n")
process.stdout.write("1 - Write a hello message\n")
process.stdout.write("2 - Give the current date\n")
process.stdout.write("0 - Exit\n")
process.stdin.on("data",function(inputFromUser)
{
    let givenNumber = Number(inputFromUser);
    if (!isNaN(givenNumber)) {
        switch(givenNumber) {
            case 1:
            process.stdout.write("Hello.");
            break;
            case 2: 
            process.stdout.write(currentDate.toString());
            break;
            case 0:
            process.stdout.write("The program has been shut down.");
            break;
            default:
            process.stdout.write("Invalid number.");
        }
    } else {
        process.stdout.write("Invalid input!");
    }
 
process.exit();
}); 