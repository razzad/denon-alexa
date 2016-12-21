"use strict";
	var _ = require('lodash');
	var rp = require('request-promise');


	var ENDPOINT = 'http://localhost:3000/api/denon';

  	function DenonCommandHelper() { }

	

	DenonCommandHelper.prototype.requestSendCommand = function(command, parameter) {

return this.postSendCommand(command, parameter).then(
    function(response) {
      console.log('success - command executed for ' + command);
      return response.body;
    }
  );
};
	

	DenonCommandHelper.prototype.postSendCommand = function(command, parameter) {

parameter = parseInt(parameter, 10);
var options = {
    method: 'POST',
    uri: ENDPOINT,
    resolveWithFullResponse: true,
    json: true,
		headers: {
        'Authorization': 'Basic cm9iZXJ0OnNlY3JldA==',
				'Content-Type': 'application/json'
    },
		body: {
command: command,
parameter: parameter
    }
  };
  return rp(options)
	.then(function (response) {
		return response;
        // Request succeeded but might as well be a 404 
        // Usually combined with resolveWithFullResponse = true to check response.statusCode 
    })
    .catch(function (err) {
        console.log("error " + err) 
    });
};



	module.exports = DenonCommandHelper;