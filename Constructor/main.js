// var Task = require('./task_prototypes');
var Task = require('./task_classes');

var task1 = new Task('Demo for constructors');
var task2 = new Task('Demo for modules');
var task3 = new Task('Demo for singletons');
var task4 = new Task('Demo for prototypes');

task1.complete();
task2.save();
task3.save();
task4.save();