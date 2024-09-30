let fruitList = ["banana", "apple", "kiwi", "orange"];
fruitList.unshift("grapefruit");
fruitList.push("watermelon");

for (let i = Number(fruitList.length);i > 0;i--) {
    process.stdout.write(fruitList[i-1] + "\n");
}