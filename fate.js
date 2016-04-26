var players = [];

function Character() {
    this.player = '';
    this.charname = '';
    this.class = '';
    this.race = '';
    this.strength = 0;
    this.dex = 0;
    this.fort = 0;
    this.const = 0;
    this.ac = 0;
    this.hp = 0;
    this.speed = 0;
    this.gold = 0;
    this.items = [];
    this.weapons = [];
    this.spells = [];
    this.casts = 0;
    this.skills = [];
    this.feats = [];
}

Character.prototype.createCharacter = function(){
    //executes 4d6 dice rolls, throwing out the lowest
    //prompts user to assign rolls to stats
    //prompts user for name, class, race,
    //assigns base stats to character
};
Character.prototype.attack = function(weapon, target){
    //tells fate to iniate an attach against the selected target with the selected weapon
};
Character.prototype.cast = function(spell, target){
    //tells fate to cast the selected spell at the target
};
Character.prototype.skill = function(skill){
    //character evokes a skill
};

Character.prototype.feat = function(feat){
    //character performs a feat
};
