// Structural pattern using Facade

var Task = function(data){
    this.name = data.name;
    this.completed = false;
}

Task.prototype.complete = function(){
    console.log(`Completing Task: ${this.name}`);
    this.completed = true;
}

Task.prototype.save = function(){
    console.log(`Saving Task: ${this.name}`);
}

module.exports = Task;