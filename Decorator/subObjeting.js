// Structural Design Pattern

var Task = function(name){
    this.name = name;
    this.completed = false;
}

Task.prototype.complete = function(){
    console.log(`Completing Task: ${this.name}`);
    this.completed = true;
}

Task.prototype.save = function(){
    console.log(`Saving Task: ${this.name}`);
}

var myTask = new Task("Legacy Task");
myTask.complete();
myTask.save();

//Inhiterance - Decorating Task
var UrgentTask = function(name, priority){
    Task.call(this, name);
    this.priority = priority;
}
UrgentTask.prototype = Object.create(Task.prototype);

UrgentTask.prototype.notify = function(){
    console.log("Notifying urgent task!");
}

UrgentTask.prototype.save = function(){
    this.notify();
    Task.prototype.save.call(this);
}

var myUrgentTask = new UrgentTask("Urgent task", 2);
myUrgentTask.complete();
myUrgentTask.save();