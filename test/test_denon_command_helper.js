/*jshint expr: true*/
'use strict';
var chai = require('chai');
var chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
var expect = chai.expect;
var DenonCommandHelper = require('../denon_command_helper');
chai.config.includeStack = true;

describe('DenonCommandHelper', function() {
  var subject = new DenonCommandHelper();
  var command;
  var parameter;
  describe('#DenonCommand', function() {
    context('with an invalid command', function() {
      it('returns invalid command', function() {
        command = 'roflkartoffel';
        return expect(subject.requestSendCommand(command, parameter)).to.be.rejectedWith(Error);
      });
    });
    context('with a valid command', function() {
      it('returns command successfull', function() {
        command = 'volume';
        parameter =45;
        console.log(subject.requestSendCommand(command, parameter));
        return expect(subject.requestSendCommand(command, parameter).to.be.successful());
      });
    });
  });

});