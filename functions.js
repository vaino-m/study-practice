function sayHello() {
    process.stdout.write("Hello");
};

sayHello();

function sumOfTwoPrint(numberOne, numberTwo) {
    process.stdout.write("\n" + (numberOne + numberTwo));
};

sumOfTwoPrint(1, 2);

function sumOfTwo(numberOne, numberTwo) {
    return numberOne + numberTwo;
};

process.stdout.write("\n" + sumOfTwo(1, 5));