// Structural Design Patterns

var Task = require('./task');
var TaskService = require('./taskService');
let TaskFacade = require('./taskFacade');

var task1 = new Task(TaskService.get(1));
var task2 = new Task(TaskService.get(2));

// With out Facade
TaskService.complete(task1);
TaskService.setCompletedDate(task1);
TaskService.notifyCompletion(task1);
TaskService.save(task1);

// With Facade
TaskFacade.completeAndNotify(task2);