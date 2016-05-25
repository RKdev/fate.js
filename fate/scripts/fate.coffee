Engine = require "./engine.js"
engine = new Engine()
Dice = require "./diceroller.js"
dice = new Dice()

engine.registerGame('fateland');
engine.loadGame('fateland');
dm = engine.objs.games[0].dm
enc = 0

module.exports = (robot) ->
#     basic DM logic
# return current DM
 robot.hear /^dm$/i, (res) ->
  res.send engine.objs.games[0].showDM()

#set DM
 robot.hear /^dm\s([a-z0-9]*)/i, (res) ->
  dm = res.match[1]
  engine.objs.games[0].DM(dm, 'catch')
  res.send engine.objs.games[0].showDM()

#release DM
 robot.hear /^release\s*dm/i, (res) ->
  engine.objs.games[0].DM(dm, 'release')
  dm = ''
  res.send engine.objs.games[0].showDM()

# simple dice roller
 robot.hear /roll\s*(\d+d\d+\s*[+-]?\s*\d?)/, (res) ->
  res.send dice.roll(res.match[1])

# hello!
 robot.hear /^hello$/, (res) ->
  res.send "Hello world!"

#   encounter logic

 robot.hear /^start\s*encounter$/i, (res) ->
  if enc == 1 then res.send "Encounter already underway!"
  if enc == 0
   enc = 1
   res.send('It ... BEGINS!!!')
 robot.hear /^end\s*encounter$/i, (res) ->
  if enc == 0 then res.send "No encounter dude."
  if enc == 1
   enc = 0
   res.send "The encounter is ... COMPLETE!!"


# robot.hear /create\s*([a-z0-9\s]*)/i, (res) ->
#  res.send char.createCharacter(res.match[1])
# robot.hear /^stats$/, (res) ->
#  res.send char.stats('all');
# robot.hear /dm command/
