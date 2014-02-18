# broccoli-styl [![Build Status](https://travis-ci.org/kevva/broccoli-styl.png?branch=master)](http://travis-ci.org/kevva/broccoli-styl)

Preprocess CSS with [Styl](https://github.com/visionmedia/styl).

## Getting started

Install with [npm](https://npmjs.org/package/broccoli-styl): `npm install --save broccoli-styl`

## Examples

```js
var calc = require('rework-calc');
var styl = require('broccoli-styl');

tree = styl(tree, { use: function (css) { 
    css.use(calc); 
}});
```

## API

### styl(tree, opts)

Initialize a new styl with the given string of regular CSS or whitespace-significant style CSS.

## Options

### use

Type: `Boolean`  
Default: `undefined`

Accepts a function that gives you the ability to interact with styl before 
compiling. Useful for adding on plugins, etc.

### whitespace

Type: `Boolean`  
Default: `false`

Utilize CSS [whitespace transformations](https://github.com/visionmedia/styl#whitespace-significant-syntax).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) (c) [Kevin Mårtensson](https://github.com/kevva)
