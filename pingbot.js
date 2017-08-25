
var Botkit = require('botkit')
var config = require('./config/config.json')

var controller = Botkit.slackbot(config)

// Let's make it respond to 
// '/pingbot pingtime'
// '/pingbot challenge <username>'
// '/pingbot new <user2> <[myscore : user2_score]>' --> sends a confirmation message to user2
// '/pingbot leaderboard'
// some more should come later, but should be good for now
