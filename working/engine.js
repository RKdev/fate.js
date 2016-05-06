var Game = require('./game.js');

function Engine() {
    this.objs = {
    games : [],
    players: [],
    dm:[]
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

Engine.prototype.registerPlayer = function(name) {
    if (this.objs.players.push(name)) {
        console.log(name + ' added!');
    }
};

Engine.prototype.listPlayers = function() {
    console.log(this.objs.players.toString());
};

Engine.prototype.DM = function(player, token) {
    
    if (token === 'catch') {
        //if there is not already a dm then  make player dm
    }
    if (token === 'release') {
        //if player is DM then release dm
        }
    //return dm name or "The is currently no DM!"
};

Engine.prototype.encounter = function(attacker, victim, attack) {

};

module.exports = Engine;
