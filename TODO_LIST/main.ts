import inquirer from "inquirer";
let todos = [];
let condition = true;


while(condition)
{let addTask = await inquirer.prompt(
    [
        {
            name: "todo",
            message: "What do you want to store in todo list ?",
            type: "input",
        },
        {
            name: "addmore",
            message: "Do you want to add more ?",
            type: "confirm",
            default: "false",
        }
    ]
);
todos.push(addTask.todo);
condition = addTask.addmore
console.log(todos);
}

