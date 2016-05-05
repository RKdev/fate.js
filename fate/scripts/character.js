var Dice = require('./diceroller.js');
var dice = new Dice();

function Character() {
    this.player = '';
    this.charname = '';
    this.class = '';
    this.race = '';
    this.level = 0;
    this.strength = 0;
    this.strengthMod = 0;
    this.dex = 0;
    this.dexMod = 0;
    this.const = 0;
    this.constMod = 0;
    this.int = 0;
    this.intMod = 0;
    this.wis = 0;
    this.wisMod = 0;
    this.chrs = 0;
    this.chrsMod = 0;
    this.ac = 0;
    this.maxHP = 0;
    this.hp = 0;
    this.hd = 0;
    this.maxCasts = 0;
    this.casts = 0;
    this.speed = 0;
    this.location = {ycoord:0, xcoord:0};
    this.timeofdeath = 0;
    this.gold = 0;
    this.items = [];
    this.weapons = [];
    this.spells = [];
    this.skills = [];
    this.feats = [];
    this.familiar = '';
}

Character.prototype.createCharacter = function(char){
    var rolls = [];
    var retValue = 'createCharacter: ' + char +'\n';    //output of dice rolls

    //executes 4d6 * 7 dice rolls
    for(var j = 0; j <= 6; j++) {
        for(var i = 0; i <=5; i++){
          rolls.push(dice.roll('4d6').toString());
          }
          retValue = retValue + rolls + '\n';
          rolls.length = 0;
    }
    return (retValue);
};

Character.prototype.attack = function(weapon, target){
    //initiate an attack against the selected target with the selected weapon
    //roll d20
   //if crit roll again
    //compare roll with target hd (hidden from player)
    //if d20 > target or crit  then hit
    //roll damage die
    //taget hd = hd-damage
    console.log('attack');
};
Character.prototype.level = function(){
    //level up a character
   //roll die and bump stats
};
Character.prototype.cast = function(spell, target){
    //cast the selected spell at the target

    //role d20
    //if crit roll again
    //compare roll with target will or int spell hd
    //if d20 > target or crit  then hit
    //roll damage die
    //taget hd = hd-damage

    console.log('cast');
};
Character.prototype.skill = function(skill){
    //character evokes a skill
    //roll a d20 + skill modifier
    //dm tells you the consequence
    console.log('skill');
};
Character.prototype.feat = function(feat){
    //character performs a feat
    //dm tells you the consequence
    console.log('feat');
};
Character.prototype.familarAction = function(action){
    //tell familar to do something
    //dm tells you the consequence
};

Character.prototype.stats = function(stat) {
    //returns characters stats
};

Character.prototype.stat = function(stat, value) {
    if (typeof value === 'number' && typeof stat === 'string') {
    switch(stat.toLowerCase()) {
    case "strength":
        this.str = value;
        break;
    case "dexterity":
        this.dex = value;
        break;
    case "constitution":
        this.const = value;
        break;
    case "intelligence":
        this.int = value;
        break;
    case "wisdom":
        this.wis = value;
        break;
    case "charisma":
        this.chrs = value;
        break;
    default:
        console.log('What was that???\n');
  }
}
};

module.exports = Character;
