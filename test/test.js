var http = require('http'),
    should = require('should'),
    sysInfo = require('../lib/sysinfo.js'),
    keyProcessor = require('../lib/keyprocessor.js'),
    hock = require('hock');

describe('node-env/sdk/environment', function (done) {
  var context = {};

  before(function (done) {
    done();
  }),

  it("Can list system environment variables", function () {
    var env = sysInfo.sysInfo();
    should.exist(env);
    env.length.should.be.equal(5);
  });

  it("Key processor leaves values unchanged", function () {
    var result = keyProcessor.procKey('Name', 'VALUE');
    result.should.be.equal('VALUE');
  });
});
