let age = 24;
let course = "Introduction to Programming and Software Development";
let credits = 5;
let startDate = "21st of August 2024";

let x = 5, y = 10, z = 15;
let result;

console.log("Hello world!");
console.log(age);

console.log("You are studying " + course + ". Course has started on " + startDate + " and it is worth " + credits + " credits.");

result = x + y;
console.log("x = " + x + ", y = " + y + ", z = " + z + ", result = " + result);
result = y - x;
console.log("x = " + x + ", y = " + y + ", z = " + z + ", result = " + result);
result = x * y;
console.log("x = " + x + ", y = " + y + ", z = " + z + ", result = " + result);
result = y / x;
console.log("x = " + x + ", y = " + y + ", z = " + z + ", result = " + result);
result = x % 2;
console.log("x = " + x + ", y = " + y + ", z = " + z + ", result = " + result);
x++;
console.log("x = " + x + ", y = " + y + ", z = " + z + ", result = " + result);
y--;
console.log("x = " + x + ", y = " + y + ", z = " + z + ", result = " + result);

x = 5;
y = "5";
z = 3;

result = x + y;
console.log("x = " + x + ", y = " + y + ", z = " + z + ", result = " + result);

result = x + z;
console.log("x = " + x + ", y = " + y + ", z = " + z + ", result = " + result);

result = y + z;
console.log("x = " + x + ", y = " + y + ", z = " + z + ", result = " + result);

result = x + y + z;
console.log("x = " + x + ", y = " + y + ", z = " + z + ", result = " + result);

result = x + z + y;
console.log("x = " + x + ", y = " + y + ", z = " + z + ", result = " + result);

process.stdout.write("Hello");
process.stdout.write(x.toString());

process.stdin.on("data",function(inputFromUser)
{
    let givenInput = inputFromUser;
    process.stdout.write("You have entered: " + givenInput);
    process.exit();
});