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
    if ((typeof player === 'string') && (typeof token === 'string')) {
        if (token === 'catch') {
            if (this.objs.dm.length === 0) {
                this.objs.dm.push(player);
            }
            console.log(this.objs.dm.toString() + ' is the DM');
        }
        if (token === 'release') {
            this.objs.dm.length = 0;
        }
        if (this.objs.dm.length === 0) {
            console.log('There is currently no DM!');
        }
    } else { console.log('invalid input'); }
};

Engine.prototype.encounter = function(attacker, victim, attack) {

};

module.exports = Engine;
