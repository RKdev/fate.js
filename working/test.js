var Engine = require("./engine.js");
var engine = new Engine();


/*
var Game = require("./game.js");
var game = new Game();


engine.DM('kz', 'catch');
engine.DM('kent', 'catch');
engine.DM('kz', 'release');
engine.DM('kent', 'catch');
engine.DM();
*/

engine.registerGame('Fateland');
engine.registerGame('Wario World');
engine.listGames();
console.log("");
engine.findGame('Fateland');
console.log("");
engine.findGame('KentLand');
console.log('');
engine.findGame();
