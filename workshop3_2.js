/* Task 7: Multiplication Tables 2
let multicNumber = 1;
let multicNumber2 = 1;

for (let j = 1;j <= 10;j++) {
process.stdout.write("\nMultiplication table for " + multicNumber2 + "\n*******************\n");
for (let i = 1;i <= 10;i++) {
process.stdout.write("*" + multicNumber.toString().padStart(5) + " * " + multicNumber2.toString() + " = " + (multicNumber * multicNumber2).toString().padEnd(5) + "*\n");
++multicNumber;
};
process.stdout.write("*******************");
multicNumber = 1;
++multicNumber2;
};
*/

/*
process.stdout.write("Please enter the size of triangle: ");
process.stdin.on("data", function(inputFromUser) {
        let givenNumber = Number(inputFromUser);
        for(let i = 0; i < (givenNumber+1); i++){
            process.stdout.write("".padEnd(i,"*")+"\n");
        }
        process.exit();
});
*/

/* Task 9: Other way around
process.stdout.write("Give a string to be typed backwards: ");
process.stdin.on("data", function(inputFromUser) {
        let givenString = inputFromUser.toString().trim();
    for (let i = 0;givenString.length > i;i++) {
        process.stdout.write(givenString.charAt(givenString.length - i - 1))
    }
        process.exit();
});
*/

// Task 10: toMixedCase()

process.stdout.write("Give a string to be typed wonky: ");
process.stdin.on("data", function(inputFromUser) {
        let givenString = inputFromUser.toString().trim();
    for (let i = 0;givenString.length > i;i++) {
        if (i % 2) {
        process.stdout.write(givenString.charAt(i).toLowerCase());
        } else {
            process.stdout.write(givenString.charAt(i).toUpperCase());
        }
    }
        process.exit();
});