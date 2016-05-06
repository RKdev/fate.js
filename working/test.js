var Engine = require("./engine.js");
var Game = require('./game.js');

var engine = new Engine();
var game = new Game();

engine.registerGame('Fateland');
engine.registerGame('Bubble-Bobble');


/*
game.register('players', 'kz');
game.register('characters','Fenris');
game.register('mobs', 'skeleton');
game.register('bosses','Argus');
game.register('joe', 'bob');
*/
console.log(engine.objs);
