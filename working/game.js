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
      if (obj === ('title' || 'players' || 'characters' || 'mobs' || 'bosses')){
        this.game[obj].push(name);
        console.log(this.game[obj].toString() + ' created!');
    } else {
        console.log("Invalid input");
    }
  } else { console.log("Invalid input");}
};

module.exports = Game;
