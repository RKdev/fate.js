# fate.js

A simple DnD framework for playing a game asychronously on Slack


#Setup
install node.js
  https://nodejs.org/en/download/

install hubot
  npm install -g hubot coffee-script yo generator-hubot
  repo contains a working hubot instance called "fate"

#Versions
node version: v4.2.3
npm version: 2.14.7

#Conventions

Directory list

/notes:              random notes
/working:         tear stuff up here
/refactor:          original copies of outside code that needs attention before being moved into production
/fate:                 a hubot instance
/fate/scripts:      Production code goes here



Ordinarily we would build hubot instead of keeping it in the repository. Since the production code rests inside
the hubot instance though, I'm pushing the hubot instance as well to keep things simple. There are fewer steps
to get up and running and I can pull the repo directly onto the production server
