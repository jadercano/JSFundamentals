// Facade - This not adding functionality, in difference with Decorator Pattern

let TaskService = require('./taskService');

let TaskFacade = function(){

    let completeAndNotify = function(task) {
        TaskService.complete(task);
        if(task.completed == true){
            TaskService.setCompletedDate(task);
            TaskService.notifyCompletion(task);
            TaskService.save(task);
        }
    }

    return {
        completeAndNotify: completeAndNotify
    }
}

module.exports = TaskFacade();