var Engine = require("./engine.js");
var engine = new Engine();

engine.registerGame('fateland');

engine.loadGame('fateland', 'title');

engine.storeGame('fateland', 'title');
