// Behavorial pattern - Observer

let Task = require('./task');
let NotificationService = require('./Observers/notificationService');
let AuditingService = require('./Observers/auditingService');
let LoggingService = require('./Observers/loggingService');
let Mediator = require('./mediator');

let task1 = new Task({
    name: "Jader demo",
    user: "Jader"
});

let not = new NotificationService();
let ls = new LoggingService();
let audit  = new AuditingService();

// Mediator.subscribe('complete', not, not.update);
// Mediator.subscribe('complete', ls, ls.update); //TODO Call this observer after comment
Mediator.subscribe('complete', audit, audit.update);

task1.complete = function(){
    Mediator.publish('complete', this);
    Task.prototype.complete.call(this);
};

task1.complete();