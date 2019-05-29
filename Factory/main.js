//Creational Design Patterns

var Task = require('./task');
var RepoFactory = require('./repoFactory');

var task1 = new Task(RepoFactory.task.get(1));
var task2 = new Task({ name: 'Demo for modules' });
var task3 = new Task({ name: 'Demo for singletons' });
var task4 = new Task({ name: 'Demo for prototypes' });

task1.complete();
task2.save();
task3.save();
task4.save();