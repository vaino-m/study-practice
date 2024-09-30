/* First if task

process.stdout.write("Input a number: ");
process.stdin.on("data",function(inputFromUser)
{
    let givenInput = Number(inputFromUser);
    process.stdout.write(givenInput.toString().trim() + "\n");
    if (givenInput === 0) {
        process.stdout.write("You have entered the number zero.");
    } else {
        process.stdout.write("You have entered something else than zero.");
    }
    process.exit();
});
*/

const { isNumberObject } = require("util/types");

/* First and & or task

let x = 1;
let y = 22;

if (x >= 1 && x <= 10) {
    process.stdout.write(x + " is within range 1-10");
}
if (x < 1 || x > 10) {
    process.stdout.write(x + " is outside of range 1-10");
}

if ((x >= 1 && x <= 10) && (y <= 1 || y >= 10)) {
    process.stdout.write("\n" + x + " is within range 1-10 and " + y + " is outside of range 1-10");
}
*/

/* First switch task

process.stdin.on("data",function(inputFromUser)
{
    let givenInput = Number(inputFromUser);
    switch(givenInput) {
    case 0:
    process.stdout.write("You wrote 0.");
    break;
    default: process.stdout.write("You wrote something else.");
}
process.exit();
});
*/


process.stdin.on("data",function(inputFromUser)
{
    let numberInString = inputFromUser.toString().split(" ");
    process.stdout.write("First number: " + numberInString[0] + "\n");
    process.stdout.write("Second number: " + numberInString[1]);

process.exit();
});

