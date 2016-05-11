var Engine = require("./engine.js");
var engine = new Engine();

engine.registerGame('fateland');
engine.storeGame('fateland', 'title');
engine.loadGame('fateland', 'title');

/*
var Game = require("./game.js");
var game = new Game();



engine.registerGame('Fateland');
engine.registerGame('Wario World');
engine.listGames();
console.log("");
engine.findGame('Fateland');
console.log("");
engine.findGame('KentLand');
console.log('');
engine.findGame();
*/
