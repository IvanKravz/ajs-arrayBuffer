const Character = require('./Character.js');
// import Character from "./Character"

class Daemon extends Character {
    constructor(name) {
        super(name, 'Daemon');
        this.attack = 10;
        this.defence = 40;
        this.stoned = false;
    }
}

module.exports = Daemon;
