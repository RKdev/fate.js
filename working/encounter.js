function Encounter(){

    this.encounter = {
        title : [],   // {= current Date}
        characters : [], // a subset of this.game.characters
        mobs : [],  //a subset of this.game.mobs
        bosses : [], // a subset of this.game.bosses
    };
}

module.exports = Encounter;
