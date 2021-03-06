/*jshint laxbreak:true*/
var Dice = require('./diceroller.js');
//var Engine = require('./engine.js');

//var engine = new Engine() || engine;
var dice = new Dice();

function Character() {
    this.player = '';
    this.charname = '';
    this.class = '';
    this.race = '';
    this.level = 0;
    this.XP = 0;
    this.strength = 0;
    this.strengthMod = 0;
    this.dexterity = 0;
    this.dexterityMod = 0;
    this.constitution = 0;
    this.constitutionMod = 0;
    this.intelligence = 0;
    this.intelligenceMod = 0;
    this.wisdom = 0;
    this.wisdomMod = 0;
    this.charisma = 0;
    this.charismaMod = 0;
    this.ac = 0;
    this.maxHP = 0;
    this.currentHP = 0;
    this.hd = 0;
    this.maxMP = 0;
    this.mp = 0;
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
    var retValue = 'createCharacter: ' + char +'\n';

    //executes 4d6 * 6 dice rolls 7 times
    for(var j = 0; j <= 6; j++) {
        for(var i = 0; i <=5; i++){
          rolls.push(dice.roll('4d6').toString());
          }
          retValue = retValue + 'Roll ' + (j + 1) + ') '+ rolls + '\n';
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
    // takes a stat or 'all' as an argument

    var retValue = '';
    if (stat === 'all')  {
        retValue =
            '\nCharacter: ' + this.charname + '\n'
        + '==================' + '\n'
        + 'Strength: ' + this.strength + ' Mod: ' + this.strengthMod + '\n'
        + 'Dexterity: ' + this.dexterity + ' Mod: ' + this.dexterityMod +'\n'
        + 'Constitution: ' + this.constitution + ' Mod: ' + this.constitutionMod +'\n'
        + 'Intelligence: ' + this.intelligence + ' Mod: ' + this.intelligenceMod +'\n'
        + 'Wisdom: ' + this.wisdom + ' Mod: ' + this.wisdomMod +'\n'
        + 'Charisma: ' + this.charisma + ' Mod: ' + this.charismaMod +'\n'
        + 'Gold:' + this.gold + '\n'
        + 'HP: ' + this.hp + ' remaining of ' + this.maxHP + '\n'
        + 'MP: ' + this.mp + ' remaining of ' + this.maxMP + '\n'
        + 'AC: ' + this.ac + '\n'
        ;
    }
    return(retValue);
};

Character.prototype.stat = function(stat, value) {
    if (typeof value === 'number' && typeof stat === 'string') {
    switch(stat.toLowerCase()) {
    case "strength":
        this.strength = value;
        break;
    case "dexterity":
        this.dexterity = value;
        break;
    case "constitution":
        this.constitution = value;
        break;
    case "intelligence":
        this.intelligence = value;
        break;
    case "wisdom":
        this.wisdom = value;
        break;
    case "charisma":
        this.charisma = value;
        break;
    default:
        return('What was that???\n');
  }
} else {
    return("stat: invalid input");
}
};

module.exports = Character;
