var Game = require('./game.js');
var fs = require('fs');

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

Engine.prototype.storeGame = function(game, entity) {
    if ((typeof game === 'string') && (typeof entity === 'string')) {
        var storage = 'storage/' + game.toLowerCase() + '/';
        fs.writeFileSync(storage + entity + '.json', JSON.stringify(this.objs.games[0].game));
    } else {
        console.log('storeGame: invalid input');
        }
};

Engine.prototype.loadGame = function(game, entity) {
    if ((typeof game === 'string') && (typeof entity === 'string')) {
        var storage = 'storage/' + game.toLowerCase() + '/';
        var data = fs.readFileSync(storage + entity + '.json', 'utf8');
        console.log(data);
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
