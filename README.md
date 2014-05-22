# on-escape

[![Dependency Status](https://gemnasium.com/KenanY/on-escape.svg)](https://gemnasium.com/KenanY/on-escape)

Attach an escape key handler.

Rewrite of [segmentio/on-escape](https://github.com/segmentio/on-escape) for
npm+browserify support.

## Installation

``` bash
$ npm install on-escape
```

## API

``` javascript
var onEscape = require('on-escape');
```

### onEscape(fn)

Binds a handler `fn(event)` to be called when the `ESC` key is pressed.

Alias: `onEscape.bind(fn)`

### onEscape.unbind(fn)

Unbinds a handler `fn`.