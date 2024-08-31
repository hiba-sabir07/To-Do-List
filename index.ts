import inquirer from"inquirer";

let todos : string[] =[];
let condition = true;

while(condition){
let addTask = await inquirer.prompt([
    {
        message:"What do you want to add in your To-Do?",
        type:"input",
        name:"todo",
    },
    {
        message:"Do you want to add more To-Do?",
        type:"confirm",
        name:"addMore",
        default:"false"
    }
]);
todos.push(addTask.todo);
condition = addTask.addMore
console.log(todos)
}