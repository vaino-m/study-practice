/* 5.1 Task 1 Letters and Numbers
function printLetters() {
    process.stdout.write("\nabcdefghijklmnoprqrstuvwxyz");
};

function printNumbers() {
    process.stdout.write("\n123456789");
};

printLetters();
printNumbers();
printLetters();
*/

/* 5.2 Task 2 Lorem Ipsum
function loremImpsum() {
    process.stdout.write("\nLorem Ipsum dolor sit amet, consectetur adipiscing elit.");
};

for (i = 0;i <= 10;i++) {
    loremImpsum();
}
*/

/* 5.3 Task 3 Sum of Numbers

function sumOfTwo(numberOne, numberTwo) {
    return numberOne + numberTwo;
};

let sum = sumOfTwo(2, 3.14).toFixed(1);

process.stdout.write("First sum is: " + sum);
sum = sumOfTwo(8, 9);
process.stdout.write("\nSecond sum is: " + sum);
sum = sumOfTwo(8421, 33);
process.stdout.write("\nThurd sum is: " + sum);
*/

/* 5.4 Task 4 Circumference of a Circle

function calcCircumference(radius) {
    return 2 * Math.PI * radius;
}

let circumference = calcCircumference(5);

process.stdout.write ("Circumference with radius 5 is " + circumference);
circumference = calcCircumference(15);
process.stdout.write ("\nCircumference with radius 15 is " + circumference);
circumference = calcCircumference(50);
process.stdout.write ("\nCircumference with radius 50 is " + circumference);

*/

// 5.5 Task 5 Smileys

function smileyToText(convertText) {
    convertText = convertText.replace(":)", "*smiling*");
    convertText = convertText.replace(";)", "*wink*");
    convertText = convertText.replace("<3", "*love*");
    return convertText = convertText.replace(":(", "*sad*");
};

process.stdin.on("data", function(inputFromUser) {
    userText = inputFromUser.toString();
    let finalText =  smileyToText(userText);
    process.stdout.write(finalText);

    process.exit();
});