var Encounter = require('./encounter.js');

function Game(){
    this.game = {
        title : [],
        players : [],
        characters : [],
        mobs : [],
        bosses : [],
        dm : [],
        encounters : []
    };

    this.encounter = {
        title : [],   // {= current Date}
        characters : [], // a subset of this.game.characters
        mobs : [],  //a subset of this.game.mobs
        bosses : [], // a subset of this.game.bosses
    };
}

Game.prototype.register = function(obj, name){
  if ((typeof name === 'string') && (typeof obj === 'string')){
      if (obj.toLowerCase() === ('title' || 'players' || 'characters' || 'mobs' || 'bosses' || 'dm' || 'encounters')){
        this.game[obj].push(name);
        console.log(this.game[obj].toString() + ' created!');
    } else {
        console.log("Char.registar.obj: Invalid object");
    }
  } else { console.log("Char.register: Invalid input");}
};

module.exports = Game;
