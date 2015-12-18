// unit test for gravatar.js
//
'use strict';

var assert = require('assert');
var gravatar = require('./gravatar');
describe('Gravatar', function() {
  beforeEach(function(done) {
    gravatar.path = 'https://www.gravatar.com/avatar';
    done();
  });
  describe('.path', function () {
    it('should return base url', function () {
      assert.equal('https://www.gravatar.com/avatar', gravatar.path);
    });
  });
  describe('#host', function () {
    it('should return the host and port parts', function () {
      // This method is for the value of Content-Security-Policy.
      gravatar.path = 'http://test.com:3000/'
      assert.equal('test.com:3000', gravatar.host());
    });
  });
  describe('#url', function () {
    it('should return the url with userid', function () {
      assert.equal('https://www.gravatar.com/avatar/userid', gravatar.url("userid"));
      assert.equal('https://www.gravatar.com/avatar/userid?s=64', gravatar.url("userid", 64));
      assert.equal('https://www.gravatar.com/avatar/userid?s=64&d=mm', gravatar.url("userid", 64, 'mm'));
    });
  });
});
