"use strict";
// Initialization 
module.change_code = 1;

	var _ = require('lodash');

	var Alexa = require('alexa-app');

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

  function(req, res) {

	    //get the slot

	    var command = req.slot('COMMAND');

	    var parameter  = req.slot('PARAMETER');

	    var reprompt = 'Bitte gib mir das Kommando für Deinen Denon Verstärker.';

	if (_.isEmpty(command) || _.isEmpty(parameter) ) {

	      var prompt = 'Ich habe Deinen Befehl nicht verstanden. Bitte wiederhole ihn.';

	      res.say(prompt).reprompt(reprompt).shouldEndSession(false);

	      return true;

	    } else {

	      var denonCommand = new DenonCommandHelper();
	   denonCommand.requestSendCommand(command, parameter).then(function() {

 res.say(CommandLanguageMapping(command) + " "+ parameter + " wurde ausgeführt.").send();

	      }).catch(function(err) {

	        console.log(err.statusCode);

	        var prompt = 'Leider ist etwas schiefgelaufen.';

	        res.say(prompt).reprompt(reprompt).shouldEndSession(false).send();
});
	      return false;

	    }
	  }

	);
	module.exports = app;