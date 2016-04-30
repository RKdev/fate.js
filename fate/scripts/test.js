var Dice = require('./diceroller.js');
var Character = require('./character.js');

var dice = new Dice();
var char = new Character();



module.exports = function(robot) {
  robot.hear(/hello/,function(msg){
  msg.reply('world!');
  });

  robot.hear(/roll/, function(msg){
  msg.reply(dice.roll('1d20'));
  });

};
