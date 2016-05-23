function Encounter(){

    this.enc = {
        title : [],   // {= current Date}
        characters : [], // a subset of this.game.characters
        mobs : [],  //a subset of this.game.mobs
        bosses : [], // a subset of this.game.bosses
    };
}

Encounter.prototype.register = function(obj, name){
    var aspects = ['title', 'characters' , 'mobs' , 'bosses'];
    if ((typeof obj === 'string')){
        for (var i = 0; i < aspects.length; i++) {
            if (obj.toLowerCase() === aspects[i].toLowerCase()){
                this.enc[obj].push(name);
                console.log(this.enc[obj].toString() + ' added!');
            } //else {console.log("Char.registar.obj: Invalid object");}
        }
    }    else { console.log("Encounter.register: Invalid input");}
};

module.exports = Encounter;
