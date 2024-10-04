let board = [
    ["-", "-", "-", "-", "*"],
    ["-", "-", "-", "-", "-"],
    ["-", "*", "-", "-", "-"],
    ["-", "-", "-", "-", "-"],
    ["-", "-", "-", "*", "-"]
];

let hitCount = 0;
let shootCount = 0;
let infoText = "Give coordinates to shoot into in the form of x y: ";

process.stdout.write(infoText);
process.stdin.on("data", function (inputFromUser) {
    let userShoot = inputFromUser.toString().trim().split(" ");
    let shipCheck = board[userShoot[0]][userShoot[1]];
    if (shipCheck == "*") {
        process.stdout.write("Hit");
        // Prevent double hits
        board[userShoot[0]][userShoot[1]] = "-";
        hitCount = ++hitCount;
        shootCount = ++shootCount;
        // When all the ships are sunk, exit the program and give results. Amount of ships is hard-coded
        if (hitCount == 3) {
            process.stdout.write("\nIt took you " + shootCount + " shots to take out them all.")
            process.exit();
        } else { process.stdout.write("\n" + infoText); }
    } else {
        process.stdout.write("Not hit");
        shootCount = ++shootCount;
        process.stdout.write("\n" + infoText);
    }
});

