function newTask(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has ${this.complete ? " " : " not " }been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
}
// new code:
const task1 = newTask("Clean Cat Litter", "Take all the 💩 out of the litter box");
const task2 = newTask("Do Laundry", "😨");
const tasks = [task1, task2];

//new code phase 2 - functions were moved into the task object
task1.logState();
task1.markCompleted();
task1.logState();

console.log(tasks);

//original code:
// Arrays to keep track of each task's state
// const taskTitles = [];
// const taskComplete = [];
// const taskDescriptions = [];

// Create a new task by adding to the arrays
// A new task will be created as incomplete
// function newTask(title, description) {
//   taskTitles.push(title);
//   taskDescriptions.push(description);
//   tasksComplete.push(false);
// }

// New code: Change newTask function - remove arrays and use an object to keep track of the state

// Mark a task as complete by setting the task's status in the `taskComplete` array to `true`
//original code:
// function completeTask(taskIndex) {
//   taskComplete[taskIndex] = true;
// }

// Print the state of a task to the console in a nice readable way
// function logTaskState(taskIndex) {
//   const title = taskTitles[taskIndex];
//   const complete = taskComplete[taskIndex];
//   console.log(`${title} has${complete ? " " : " not "}been completed`);
// }

//new code phase 1:
// prints out the provided task's details
// function logTaskState(task) {
//   console.log(`${task.title} has ${task.complete ? " " : " not " }been completed`)
// }
//change new code into task object methods. relocated into task object above


//marks the provided task as completed
// function completeTask(task) {
//   task.complete = true;
// }
//change new code into task object methods. relocated into task object above


// DRIVER CODE BELOW

// original code:

// newTask("Clean Cat Litter"); // task 0
// newTask("Do Laundry"); // task 1

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed


//new code, phase 1
// logTaskState(task1); //clean cat litter not completed
// completeTask(task1);
// logTaskState(task1); //clean cat litter completed

