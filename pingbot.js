
var Bot = require('slackbots')
var config = require('./config/config.json')

var bot = new Bot({ 
	token: config.slack_api_token,
	name: config.slack_bot_name
})

bot.on('start', function(){
	// Let's make it respond to 
	// '/pingbot pingtime'
	// '/pingbot challenge <username>'
	// '/pingbot new <user2> <[myscore : user2_score]>' --> sends a confirmation message to user2
	// '/pingbot leaderboard'
	// some more should come later, but should be good for now

});