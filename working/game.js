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


Game.prototype.register = function(obj, name){
    var aspects = ['title', 'players' , 'characters' , 'mobs' , 'bosses' , 'dm' , 'encounters'];
    if ((typeof obj === 'string')){
        for (var i = 0; i < aspects.length; i++) {
            if (obj.toLowerCase() === aspects[i].toLowerCase()){
                this.game[obj].push(name);
                console.log(this.game[obj].toString() + ' created!');
            } else {console.log("Char.registar.obj: Invalid object");}
        }
    }    else { console.log("Char.register: Invalid input");}
};

module.exports = Game;
