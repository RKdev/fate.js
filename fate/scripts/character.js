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
    this.fort = 0;
    this.fortMod = 0;
    this.const = 0;
    this.constMod = 0;
    this.ac = 0;
    this.maxHP = 0;
    this.hp = 0;
    this.maxCasts = 0;
    this.casts = 0;
    this.speed = 0;
    this.location = {ycoord:0, xcoord:0};
    this.gold = 0;
    this.items = [];
    this.weapons = [];
    this.spells = [];
    this.skills = [];
    this.feats = [];
    this.familiar = '';
}

Character.prototype.createCharacter = function(char){
    //executes 4d6 * 6 7 dice rolls, throwing out the lowest
    //prompts user to assign rolls to stats
    //prompts user for name, class, race,
    //assigns base stats to character
    return ('createCharacter ' + char);

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

module.exports = Character;
