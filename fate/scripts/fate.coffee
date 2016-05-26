Engine = require "./engine.js"
Dice = require "./diceroller.js"
Encounter = require "./encounter.js"

engine = new Engine()
dice = new Dice()

engine.registerGame('fateland');
engine.loadGame('fateland');
dm = engine.objs.games[0].dm
encflag = 0
enccount = ''

####################THIS CODE IS UGLY. DON'T LIVE LIKE ME######################


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

#list available characters
 robot.hear /^list available$/i, (res) ->
  engine.objs.games[0].listCharacters()

################################
######  BEGIN encounter logic ######
################################

#start encounter
 robot.hear /^start\s*encounter$/i, (res) ->
  if encflag == 1 then res.send "You're already fighting, jackass. Pay attention."
  if encflag == 0
   encflag = 1
   enccount = engine.objs.games[0].game.encounters.length
   enc = new Encounter()
   today = new Date()
   engine.objs.games[0].register('encounters', enc)
   enccount = engine.objs.games[0].game.encounters.length
   engine.objs.games[0].game.encounters[enccount - 1].register('title', today)
   res.send('It ... BEGINS!!!')
   res.send 'Encounter ' + engine.objs.games[0].game.encounters.length + '!'

#end encounter
 robot.hear /^end\s*encounter$/i, (res) ->
  if encflag == 0 then res.send "No encounter dude."
  if encflag == 1
   encflag = 0
   res.send "The encounter is ... COMPLETE!!"

# name encounter
 robot.hear /^name\s*encounter\s*([a-z0-9]*)/i, (res) ->
  if encflag == 1
   engine.objs.games[0].game.encounters[enccount - 1].register('title', res.match[1])
   res.send 'Encounter is now called: ' + engine.objs.games[0].game.encounters[enccount - 1].enc.title

# add character to encounter
 robot.hear /^add char\s*([a-z0-9]*)/i, (res) ->
  if encflag == 1
   engine.objs.games[0].game.encounters[enccount - 1].register('characters', res.match[1])

# show characters in encounter
 robot.hear /^show characters$/i, (res) ->
  if encflag == 1
   res.send engine.objs.games[0].game.encounters[enccount - 1].show('characters')

################################
######  END    encounter logic ######
################################

# robot.hear /create\s*([a-z0-9\s]*)/i, (res) ->
#  res.send char.createCharacter(res.match[1])
# robot.hear /^stats$/, (res) ->
#  res.send char.stats('all');
# robot.hear /dm command/
