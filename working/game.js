function Game(){
    this.game = {
        title : [],
        players : [],
        characters : [],
        mobs : [],
        bosses : [],
    };
}

Game.prototype.register = function(obj, name){
  if ((typeof name === 'string') && (typeof obj === 'string')){
      if (obj.toLowerCase() === ('title' || 'players' || 'characters' || 'mobs' || 'bosses')){
        this.game[obj].push(name);
        console.log(this.game[obj].toString() + ' created!');
    } else {
        console.log("Char.registar.obj: Invalid input");
    }
  } else { console.log("Char.register: Invalid input");}
};

module.exports = Game;
