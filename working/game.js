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

    if (obj === 'title' || obj === 'players' || obj === 'characters' || obj === 'mobs' || obj === 'bosses'){
        this.game[obj].push(name);
        console.log(this.game[obj].toString() + ' created!');
    } else {
        console.log("Invalid input");
    }
};

module.exports = Game;
