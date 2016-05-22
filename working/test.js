var Engine = require("./engine.js");
var engine = new Engine();

var Encounter = require('./encounter.js');
var encounter = new Encounter();

encounter.register('title','joe');
console.log(encounter);

engine.registerGame('fateland');
engine.loadGame('fateland');

//console.log(engine.objs.games);
//engine.storeGame('fateland');
//engine.DM('fenris', 'catch');
//engine.checkDM('fenris');

engine.objs.games[0].register('encounters', encounter);
console.log(engine.objs.games[0].game.encounters[0]);
console.log(engine.objs.games[0].game.encounters[0].enc);
console.log(engine.objs.games[0].game.encounters[0].enc.title);
