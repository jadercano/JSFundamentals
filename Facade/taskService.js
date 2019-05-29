
let TaskService = function(){

    let db = {};

    let get = function(id) {
        console.log('Getting task ' + id);
        return {
            name: 'task ' + id
        }    
    }

    let save = function(task){
        console.log('Saving task ' + task.name + ' in repository.');
    }

    let complete = function(task){
        task.completed = true;
        console.log('Completing task ' + task.name + ' in repository.');
    }

    let setCompletedDate = function(task){
        console.log('Setting completed date task ' + task.name);
    }

    let notifyCompletion = function(task){
        console.log('Notifying completion task ' + task.name);
    }

    return {
        get: get,
        save: save,
        notifyCompletion: notifyCompletion,
        complete: complete,
        setCompletedDate: setCompletedDate
    }
}

module.exports = TaskService();