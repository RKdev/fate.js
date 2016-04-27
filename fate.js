var fateCharacter = require('./Character');
//var die = require('./Roll.');
//var items = require('./Items');
//var weapons = require('./Weapons');
//var skills = require('./Skills');
//var feats = require('./Feats');
//var spells = require('./Spells');
//var mobs = require('./Monsters');
//var bosses = require('./BossMonsters');

var char = new fateCharacter();

char.attack();
char.skill();
char.createCharacter();
console.log(char.gold + "  Gold");
