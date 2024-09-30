/* 3.1 Numbers from 0 to 20
let counter = 0
while (counter <= 20) {
    process.stdout.write(counter + " ");
    ++counter;
}
*/

const { fail } = require("assert");

/* 3.2 Numbers from 0 to 20
let counter = 0;
do {
    process.stdout.write(counter + " ");
    ++counter;
} while (counter <= 20);
*/

/* 3.3 Looping through Strings
process.stdout.write("Write something: ")
process.stdin.on("data",function(inputFromUser)
{
    let writtenText = inputFromUser.toString().trim();
    let numberAt = 0;
    do {
        process.stdout.write((numberAt+1) + ". letter is: " + writtenText.charAt(numberAt) + "\n")
        ++numberAt;
        
    } while (writtenText.length > numberAt);
    process.exit();
});
*/

/* 3.4 Multiplication Table
process.stdout.write("Create a multiplication table for: ")
process.stdin.on("data",function(inputFromUser)
{
    let numberOne = 1;
    let numberTwo = inputFromUser;
    process.stdout.write("-------------------")
    for (let i = 0; i < 10; i++) {
        process.stdout.write("\n|" + numberOne.toString().padStart(5) + " * " + numberTwo.toString().trim() + " = " + (numberOne*numberTwo).toString().padEnd(5) + "|");
        ++numberOne;
    }
    process.stdout.write("\n-------------------")
    process.exit();
});
*/

/* 3.5 Countdown

let counter = 10;
process.stdout.write("Countdown starting...\n")
while (counter >= 0) {
    process.stdout.write(counter.toString().padStart(4, '.') + "...\n");
    --counter;
}

*/

// 3.6 Palindrome

process.stdout.write("Write something: ")
process.stdin.on("data",function(inputFromUser)
{
    let writtenText = inputFromUser.toString().toLowerCase().trim();
    let numberAtStart = 0;
    let numberAtEnd = Number(inputFromUser.toString().trim().length);
    let failCondition = 0;
    do {
        if (writtenText.charAt(numberAtStart) == writtenText.charAt(numberAtEnd-1)) {
            ++numberAtStart;
            --numberAtEnd;
        } else {
            failCondition = 1;
        }
    } while ((numberAtStart != writtenText.length) && (failCondition == 0));
    if (failCondition == 0) {
        process.stdout.write(writtenText + " is a palindrome!");
    } else {
        process.stdout.write(writtenText + " is not a palindrome.");
    }
    process.exit();
});