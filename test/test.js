// First, we require `expect` from Chai.
var chai = require('chai');
var expect = chai.expect;
var sinon = require('sinon');
var mediaPlayer = require('..');

// `describe` makes a "suite" of tests; think of them as a group.
describe('MediaPlayer', function() {

  it('Calls the function', function () {
      var fn = sinon.spy();
      mediaPlayer();
      
  });

});