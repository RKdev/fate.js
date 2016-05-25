Engine = require "./engine.js"
engine = new Engine()
Dice = require "./diceroller.js"
dice = new Dice()

engine.registerGame('fateland');
engine.loadGame('fateland');
dm = engine.objs.games[0].dm

module.exports = (robot) ->
 robot.hear /^dm$/i, (res) ->
  res.send engine.objs.games[0].showDM()

 robot.hear /^dm\s([a-z0-9]*)/i, (res) ->
  dm = res.match[1]
  engine.objs.games[0].DM(dm, 'catch')
  res.send engine.objs.games[0].showDM()

 robot.hear /^release\s*dm/i, (res) ->
  engine.objs.games[0].DM(dm, 'release')
  dm = ''
  res.send engine.objs.games[0].showDM()

 robot.hear /roll\s*(\d+d\d+\s*[+-]?\s*\d?)/, (res) ->
  res.send dice.roll(res.match[1])

 robot.hear /^hello$/, (res) ->
  res.send "Hello world!"

# robot.hear /create\s*([a-z0-9\s]*)/i, (res) ->
#  res.send char.createCharacter(res.match[1])
# robot.hear /^stats$/, (res) ->
#  res.send char.stats('all');
# robot.hear /dm command/
