//Constructor pattern
//Issue: Create functions for each Task instance
var Task = function(name){
    this.name = name;
    this.completed = false;

    this.complete = function(){
        console.log(`Completing Task: ${this.name}`);
        this.completed = true;
    }

    this.save = function(){
        console.log(`Saving Task: ${this.name}`);
    }
}

var task1 = new Task('Demo for constructors');
var task2 = new Task('Demo for modules');
var task3 = new Task('Demo for singletons');
var task4 = new Task('Demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();