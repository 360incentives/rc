var assert = require('assert');
var exec = require('child_process').exec;

var n = 'rc'+Math.random();

process.env[n + '_top_middle_bottom'] = 'boop';

var options = require('../')(n);
assert.deepEqual(options.top, {
  middle: {
    bottom: 'boop'
  }
});

