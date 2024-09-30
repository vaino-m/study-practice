/* First while task
let counter = 0;

process.stdout.write("Something to write out 5 times: ");
process.stdin.on("data",function(inputFromUser) {
    process.stdout.write("-\n")
while (counter < 5) {
    process.stdout.write(inputFromUser);
    ++counter;
}
process.exit();
});
*/


/* First do while task
let counter = 0;

process.stdout.write("Something to write out 5 times: ");
process.stdin.on("data",function(inputFromUser) {
    process.stdout.write("-\n")
do {
    process.stdout.write(inputFromUser);
    ++counter;
} while (counter < 5);
process.exit();
});
*/

/* First for loop
for (let i = 0; i <= 10; i++) {
    process.stdout.write(i.toString() + " ");
};
*/

for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
process.stdout.write("(" + i + "." + j + ")");
    }
    process.stdout.write("\n");
}