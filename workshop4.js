/* 4.1 Task 1: Creating and Looping Through an Array

let intArray = [5, 7, 32, 31, 8];
let floatArray = [12.4, -13.55, 67.44];
let stringArray = ["Helsinki", "Lissabon", "New York", "Shanghai"];

process.stdout.write("The value in the index number 3 is: " + stringArray[3]);
process.stdout.write("\nThe fourth item in the int array is: " + intArray[3]);
process.stdout.write("\nIn the float array there are " + floatArray.length + " items");

process.stdout.write("\n\nintArray contents:\n")
for (i = 0;Number(intArray.length) > i;i++) {
    process.stdout.write(intArray[i].toString() + "\n");
};

process.stdout.write("\nfloatArray contents from last to first:\n")
for (i = Number(floatArray.length);0 < i;i--) {
    process.stdout.write(floatArray[i-1] + "\n");
};

process.stdout.write("\nNew string array: ")
for (i = 0;Number(stringArray.length) > i;i++) {
    stringArray[i] = "empty";
    process.stdout.write(stringArray[i]);
    process.stdout.write(Number(stringArray.length)-1 > i ? "," : "")
}
process.stdout.write("\nNew string array: " + stringArray.join());
*/

/* 4.2 Task 2: Reverse

let aList = [];

process.stdout.write("Give numbers to feed, 0 to exit: ")
process.stdin.on("data",function(inputFromUser) {
    let givenNumber = inputFromUser.toString().trim();
    if (givenNumber != '0') {
        aList.push(givenNumber);
    } else {
        process.stdout.write("Reverse order: ")
        for (let i = aList.length;0 < i;i--) {
            process.stdout.write(aList[i-1] + " ")
        }
        process.exit();
    }
});
*/

// 4.3 Task 3: Average
let aList = [];

process.stdout.write("Give numbers to feed, 0 to exit: ")
process.stdin.on("data", function (inputFromUser) {
    let givenNumber = inputFromUser;
    if (!isNaN(givenNumber)) {
        aList.push(Number(givenNumber));
    } else {
        let total = 0;
        for (let i = 0; i < aList.length; i++) {
            total += aList[i];
        }
        process.stdout.write("Avg: " + (total / aList.length));
        process.exit();
    }
});

// 4.4 Task 4: Linear Search

let setList = [55, 23, 6456, 324, 21, 234, 72, 21];

process.stdout.write("Give a number to search for: ")
process.stdin.on("data", function (inputFromUser) {
    let givenNumber = inputFromUser;
        if (givenNumber.toString().trim() == "exit") {
            process.exit();
        } else {
            let fromList = 0;
            for (let i = 0; i <setList.length; i++) {
                if (Number(givenNumber) = setList[i]) {
                    fromList = true;
                }
            }
            if (fromList) {
                // write here
            } else {
                process.stdout.write("This number is not from the list.");
            }
        }
});