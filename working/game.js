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
};

Game.prototype.listCharacters = function() {
    var retValue = '';
    for(var i = 0; i < this.game.characters.length; i++) {
        retValue = retValue + this.game.characters[i].charname + ', ';
    }
    console.log(retValue);
};

Game.prototype.DM = function(player, token) {
    if ((typeof player === 'string') && (typeof token === 'string')) {
        if (token === 'catch') {
            if (this.game.dm.length === 0) {
                this.game.dm.push(player);
            }
            console.log(this.objs.dm.toString() + ' is the DM');
        }
        if (token === 'release') {
            this.game.dm.length = 0;
        }
        if (this.game.dm.length === 0) {
            console.log('There is currently no DM!');
        }
    } else { console.log('invalid input'); }
};

Game.prototype.checkDM = function (player) {
    if (typeof player === 'string') {
        if (player.toLowerCase() === this.game.dm[0].toString().toLowerCase()) {
            //return(1);
            console.log('1');
            } else {
//                return(0);
                  console.log('0');
                }
    } else {
        console.log('checkDM: Invalid Input');
        }
};

module.exports = Game;
