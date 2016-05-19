var Engine = require("./engine.js");
var engine = new Engine();

engine.registerGame('fateland');

engine.loadGame('fateland');

engine.storeGame('fateland');

engine.DM('fenris', 'catch');

engine.checkDM('fenris');
