var Engine = require("./engine.js");
var engine = new Engine();

var Game = require("./game.js");
var game = new Game();

game.register('title', 'Fateland');

engine.registerPlayer('kz');
engine.registerPlayer('kent');
engine.listPlayers();

/*
engine.registerGame('Fateland');
engine.registerGame('Bubble-Bobble');
engine.listGames();

game.register('players', 'kz');
game.register('characters','Fenris');
game.register('mobs', 'skeleton');
game.register('bosses','Argus');
game.register('joe', 'bob');

console.log(engine.listGames());
*/
