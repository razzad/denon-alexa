"use strict";
	var _ = require('lodash');
	var rp = require('request-promise');


	var ENDPOINT = (process.env.ENDPOINT ||'http://localhost:3000/api/denon');
var username = process.env.username ||'robert';
    var password =process.env.password ||'secret';
    var auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');
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
        'Authorization': auth,
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