# broccoli-styl [![Build Status](https://travis-ci.org/kevva/broccoli-styl.svg?branch=master)](https://travis-ci.org/kevva/broccoli-styl)

> Preprocess CSS with [Styl](https://github.com/visionmedia/styl).

## Install

```bash
$ npm install --save broccoli-styl
```

## Usage

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

Type: `Function`  
Default: `undefined`

Accepts a function that gives you the ability to interact with styl before
compiling. Useful for adding on plugins, etc.

### whitespace

Type: `Boolean`  
Default: `false`

Utilize CSS [whitespace transformations](https://github.com/visionmedia/styl#whitespace-significant-syntax).

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License) © [Kevin Mårtensson](https://github.com/kevva)
