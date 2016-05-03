Char = require "./character.js"
char = new Char()

Dice = require "./diceroller.js"
dice = new Dice()

module.exports = (robot) ->

 robot.hear /roll\s*(\d+d\d+\s*[+-]?\s*\d?)/, (res) ->
  res.send res.match
  char.gold = dice.roll(res.match[1]).toString()
  res.send char.gold

 robot.hear /hello/, (res) ->
  res.send "world!"
