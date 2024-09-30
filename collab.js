let taskList = [];
    process.stdout.write("Type following numbers to access different options\n");
    process.stdout.write("1: Add task\n2: Print tasks\n3: Remove task\n4: Exit\n");
process.stdin.on("data", function(inputFromUser){
    input = inputFromUser.toString().trim()
    switch (input) {
        case '1':
            // Add a task to the list
            process.stdout.write("Enter your task here!")
            process.stdin.on("data", function(AddTask){
                taskList.push(AddTask.toString().trim())
                process.stdout.write(`${AddTask} Has been added to the list\n`);
                console.table(taskList);
                // ? - exit only the case 1 part
            });
        break;
        case '2':
            // List all the tasks
            for (i = 0;taskList.length > i;i++) {
            process.stdout.write(taskList[i]);
            process.stdout.write(taskList.length-1 > i ? "\n" : "")}
        break;
        case '3':
            // Remove a task
            process.stdin.on("data", function(remove) {
                taskList = taskList.filter(item => item !== taskList[Number(remove)]);
            });
        break;
        case '4':
            // Exit
            process.stdout.write("Have a nice day!\n")
            process.exit();
        default: 
    }
});




