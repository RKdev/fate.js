function Game(){
    this.objs = {
        title : [],
        players : [],
        characters : [],
        mobs : [],
        bosses : [],
    };
}

Game.prototype.register = function(obj, name){

    if (obj === 'title' || obj === 'players' || obj === 'characters' || obj === 'mobs' || obj === 'bosses'){
        this.objs[obj].push(name);
        console.log(this.objs[obj].toString());
    } else {
        console.log("Invalid input");
    }
};

module.exports = Game;
