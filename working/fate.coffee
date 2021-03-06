Char = require "./character.js"
char = new Char()

Dice = require "./diceroller.js"
dice = new Dice()

module.exports = (robot) ->

 robot.hear /roll\s*(\d+d\d+\s*[+-]?\s*\d?)/, (res) ->
  res.send dice.roll(res.match[1])

 robot.hear /^hello$/, (res) ->
  res.send "Hello world!"

 robot.hear /create\s*([a-z0-9\s]*)/i, (res) ->
  res.send char.createCharacter(res.match[1])

 robot.hear /^stats$/, (res) ->
  res.send char.stats('all');
