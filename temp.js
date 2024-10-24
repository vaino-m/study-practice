	
let matrix = [[1,2,3], [55,44,11]];

process.stdout.write(matrix[1][2].toString());

if (2 <= 2) {
    console.log("yes");
} else {console.log("no");}

let numbers = [1,1,1];

let sumOf = 0;
for (i = 0;i < numbers.length;i++) {
    console.log(sumOf);
    sumOf = sumOf + numbers[i];
}
let avgOf = (sumOf / numbers.length);
process.stdout.write(avgOf.toString());
