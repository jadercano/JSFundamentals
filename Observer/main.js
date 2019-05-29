// Behavorial pattern - Observer

let Task = require('./task');
let ObservableTask = require('./observableTask');
let NotificationService = require('./Observers/notificationService');
let AuditingService = require('./Observers/auditingService');
let LoggingService = require('./Observers/loggingService');

let task1 = new ObservableTask({
    name: "Jader demo",
    user: "Jader"
});

let not = new NotificationService();
let ls = new LoggingService();
let audit  = new AuditingService();

task1.observers.add(not.update);
task1.observers.add(ls.update);
task1.observers.add(audit.update);

task1.save();

task1.removeObserver(audit);
task1.save();