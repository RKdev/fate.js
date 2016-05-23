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
}

Game.prototype.test = function() {
    console.log('test: game object');
};


Game.prototype.register = function(aspect, name){
    var aspects = ['title', 'players' , 'characters' , 'mobs' , 'bosses' , 'dm' , 'encounters'];
    if ((typeof aspect === 'string')){
        for (var i = 0; i < aspects.length; i++) {
            if (aspect.toLowerCase() === aspects[i].toLowerCase()){
                this.game[aspect].push(name);
                console.log(this.game[aspect].toString() + ' created!');
            } //else {console.log("Char.registar.obj: Invalid object");}
        }
    }    else { console.log("Char.register: Invalid input");}
};

//returns array index of a game item
Game.prototype.queryGameObject = function(array, item) {
    console.log(this.game[array]);
    console.log(this.game[array].indexOf(item));
};
module.exports = Game;
