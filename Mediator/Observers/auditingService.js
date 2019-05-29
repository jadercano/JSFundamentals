// Observer for audit

let AuditingService = function(){
    this.update = function(task){
        console.log("Auditing " + task.user + " for task " + task.name);
    }
}

module.exports = AuditingService;