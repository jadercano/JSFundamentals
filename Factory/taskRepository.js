
let repo = function(){

    let db = {};

    let get = function(id) {
        console.log('Getting task ' + id);
        return {
            name: 'task from repository'
        }    
    }

    let save = function(task){
        console.log('Saving task ' + task.name + ' in repository.');
    }

    return {
        get: get,
        save: save
    }
}

module.exports = repo();