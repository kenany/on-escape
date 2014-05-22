var bind = require('component-event').bind;
var indexOf = require('lodash.indexof');

var fns = [];

/**
 * Bind a handler.
 *
 * @param {Function} fn
 */
function onEscape(fn) {
  fns.push(fn);
}

onEscape.bind = onEscape;

/**
 * Unbind a handler.
 *
 * @param {Function} fn
 */
onEscape.unbind = function(fn) {
  var index = indexOf(fns, fn);
  if (index !== -1) {
    fns.splice(index, 1);
  }
};

bind(document, 'keydown', function(e) {
  if (e.keyCode !== 27) return;
  for (var i = 0, fn; fn = fns[i]; i++) {
    fn(e);
  }
});

module.exports = onEscape;