// Observer for notifications

let NotificationService = function(){
    this.update = function(task){
        console.log("Notifying " + task.user + " for task " + task.name);
    }
}

module.exports = NotificationService;