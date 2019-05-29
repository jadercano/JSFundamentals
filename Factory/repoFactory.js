
var repoFactory = function(){

    var repos = this;

    var repoList = [{ name: 'task', source: './taskRepository'}];

    repoList.forEach(function(repo){
        repos[repo.name] = require(repo.source);
    });
}

module.exports= new repoFactory;