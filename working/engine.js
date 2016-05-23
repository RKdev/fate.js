var Game = require('./game.js');
var Encounter = require('./encounter.js');
var fs = require('fs');

function Engine() {
    this.objs = {
    games : [],
    players: [],
    dm:[],
    state:[] //encounter or normal
    };
}

Engine.prototype.registerGame = function(name){
        var newGame = new Game();
        newGame.register('title',name);
        this.objs.games.push(newGame);
};

Engine.prototype.storeGame = function(game) {
    if (typeof game === 'string' ) {
        var storage = 'storage/' + game.toLowerCase() + '.json';
        fs.writeFileSync(storage, JSON.stringify(this.objs.games[0].game));
    } else {
        console.log('storeGame: invalid input');
        }
};

Engine.prototype.loadGame = function(game) {
    if (typeof game === 'string') {
        var storage = 'storage/' + game.toLowerCase() + '.json';
        this.objs.games[0].game = JSON.parse(fs.readFileSync(storage, 'utf8'));
        console.log(this.objs.games[0].game);
    } else {
        console.log('loadGame: invalid input');
        }
};

Engine.prototype.listGames = function(){
    if(this.objs.games.length === 0) {
        console.log('listGames: No Games!');
    } else {
            for(var i = 0; i < this.objs.games.length; i++){
            console.log(this.objs.games[i].game.title.toString());
            }
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


Engine.prototype.encounter = function(attacker, victim, attack) {

};

Engine.prototype.findGame = function(title){
    retValue = '';
    if (typeof title === 'string') {
        if  (this.objs.games.length === 0) {
             console.log('findGame: No Games!');
        }   else {
             for(var i = 0; i < this.objs.games.length; i++) {
                if (title.toLowerCase() === this.objs.games[i].game.title.toString().toLowerCase()) {
                    retValue = title;
                    break;
                }  else {
                    retValue = 'findGame: Game not Found';
                }
             }
                console.log(retValue);
        }
    }   else {
        console.log('findGame: Invalid Input');
    }
};


module.exports = Engine;
