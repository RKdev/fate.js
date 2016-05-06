var Game = require('./game.js');

function Engine() {
    this.objs = {
    games : []
    };
}

Engine.prototype.registerGame = function(name){
        var newGame = new Game();
        newGame.register('title',name);
        this.objs.games.push(newGame);
};

Engine.prototype.listGames = function(){
    for(var i = 0; i < this.objs.games.length; i++){
        console.log(this.objs.games[i].game.title.toString());
    }
};

Engine.prototype.encounter = function(attacker, victim, attack) {

};

module.exports = Engine;
