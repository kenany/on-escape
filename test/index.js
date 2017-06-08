var onEscape = require('../');
var test = require('tape');
var triggerEvent = require('trigger-event');

test('adds a handler', function(t) {
  function handler() {
    t.pass();
    t.end();
  }
  onEscape(handler);
  triggerEvent('keydown', {key: 'escape'});
  onEscape.unbind(handler);
});

test('removes a handler', function(t) {
  function handler2() {
    t.fail();
  }
  onEscape(handler2);
  onEscape.unbind(handler2);
  triggerEvent('keydown', {key: 'escape'});
  t.pass();
  t.end();
});
