// Observer for logging

let LoggingService = function(){
    this.update = function(task){
        console.log("Logging " + task.user + " for task " + task.name);
    }
}

module.exports = LoggingService;