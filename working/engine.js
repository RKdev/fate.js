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
        console.log(this.objs.games.toString());
};

Engine.prototype.listGames = function(){
    console.log(this.objs.games);
};

Engine.prototype.encounter = function(attacker, victim, attack) {

};

module.exports = Engine;
