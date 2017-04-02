# denon-alexa
Denon AVR control via Amazon Echo Alexa

## Synopsis

This project is about the alexa skill (so far German only) to remote control a Denon AVR receiver (AVR-X1000) via the corresponding local Nodejs server (https://github.com/razzad/denon-nodejs)

## Code Example

var app = new Alexa.app('denon-alexa');

	var DenonCommandHelper = require('./denon_command_helper.js');
	var CommandLanguageMapping = require('./commandLanguageMapping');

	app.launch(function(req, res) {

	  var prompt = 'Bitte gib mir das Kommando für Deinen Denon Verstärker.';

	  res.say(prompt).reprompt(prompt).shouldEndSession(false);

	});

app.intent('denon-alexa', {

	 'slots': {

	    'COMMAND': 'COMMANDS',
      'PARAMETER' : 'PARAMETERS'

	  },

	  'utterances': ['{|stell|setz} {|den|bei dem} {|Verstärker|Denon} {|die} {-|COMMAND} {|auf} {-|PARAMETER}']

	},

## Motivation

I use this skill together with my private local Nodejs server running on a raspberry pi to speak control the volume of my receiver.

## Installation

To get this running you need to
1. install this skill on your Amazon lambda (with the right environment variables) and add it as a skill to your developer account.
2. run a  local Nodejs server with https://github.com/razzad/denon-nodejs

## Tests

todo 