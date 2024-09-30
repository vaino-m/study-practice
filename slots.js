const { totalmem } = require("os");

let slotAmount = 15;
let pointsNeeded = 0

process.stdin.on("data",function(inputFromUser)
{
    let numberInString = inputFromUser.toString().split(" ");
    let firstNumber = Number(numberInString[0]);
    let secondNumber = Number(numberInString[1]);
    let approvedAmount = 0;
    let deletedAmount = 0;
    deletedAmount = secondNumber;
    approvedAmount = firstNumber - deletedAmount;
    approvalsNeeded = 10;
    let uploadLevel = 10;
    let pointsNeeded = 100;
    let totalPointsNeeded = 1000;
    let cumulatedPoints = 1000;

    if (approvedAmount >= 10) {

   while (cumulatedPoints >= totalPointsNeeded) {
        ++slotAmount;
        ++uploadLevel;
        cumulatedPoints = cumulatedPoints;
        totalPointsNeeded = totalPointsNeeded + pointsNeeded;
        pointsNeeded = 100 + 20*(Math.max(uploadLevel - 10, 0));
        if (pointsNeeded >= 600) {
            pointsNeeded = 600;
        }
        console.log(pointsNeeded + " " + totalPointsNeeded);
    }
    } else {
        slotAmount = slotAmount;
    }
process.stdout.write("Slots: " + slotAmount);

process.stdout.write("\ntotalPointsNeeded: " + totalPointsNeeded);
process.stdout.write("\npointsNeeded: " + pointsNeeded);
process.stdout.write("\ncumulatedPoints: " + cumulatedPoints);

/*

    let  pointsLost = Math.round(pointsNeeded / 3);
    let totalPointsLost = pointsLost * deletedAmount;
    process.stdout.write("\ntotalPointsLost: " + totalPointsLost);

    if (totalPointsLost >= pointsNeeded) {

    while (totalPointsLost >= pointsNeeded) {
        --slotAmount;
        --uploadLevel;
        pointsLost = Math.round(pointsNeeded / 3);
        pointsNeeded = -(100 + 20*(Math.max(uploadLevel - 10, 0)));
        if (pointsNeeded >= 600) {
            pointsNeeded = 600;
        }
        totalPointsNeeded = totalPointsNeeded - pointsNeeded;
        totalPointsLost = pointsLost * deletedAmount;
    }
    } else {
        slotAmount = slotAmount;
    }
    process.stdout.write("\nSlots: " + slotAmount);
    process.stdout.write("\ntotalPointsLost: " + totalPointsLost);
    process.stdout.write("\npointsNeeded: " + pointsNeeded);
    process.stdout.write("\npointsLost: " + pointsLost);
    */

process.exit();
});