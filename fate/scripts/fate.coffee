Engine = require "./engine.js"
engine = new Engine()
Dice = require "./diceroller.js"
dice = new Dice()

engine.registerGame('fateland');
engine.loadGame('fateland');
engine.objs.games[0].DM('dlangham', 'catch')

module.exports = (robot) ->
 robot.hear /^whois\sdm$/i, (res) ->
  res.send engine.objs.games[0].showDM()

 robot.hear /roll\s*(\d+d\d+\s*[+-]?\s*\d?)/, (res) ->
  res.send dice.roll(res.match[1])

 robot.hear /^hello$/, (res) ->
  res.send "Hello world!"

 robot.hear /^be\sdm\s(.*)/, (res) ->
  engine.objs.games[0].DM(match[1], 'catch')


# robot.hear /create\s*([a-z0-9\s]*)/i, (res) ->
#  res.send char.createCharacter(res.match[1])
# robot.hear /^stats$/, (res) ->
#  res.send char.stats('all');
# robot.hear /dm command/
#  if game.checkDM then blah()
