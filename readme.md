# broccoli-styl [![Build Status](http://img.shields.io/travis/kevva/broccoli-styl.svg?style=flat)](https://travis-ci.org/kevva/broccoli-styl)

> Preprocess CSS with [Styl](https://github.com/visionmedia/styl)


## Install

```
$ npm install --save-dev broccoli-styl
```


## Usage

```js
var calc = require('rework-calc');
var styl = require('broccoli-styl');

tree = styl(tree, {
	use: function (css) {
		css.use(calc);
	}
});
```


## API

### styl(tree, options)

Initialize a new styl with the given string of regular CSS or whitespace-significant style CSS.

#### options.use(css)

Type: `function`

Accepts a function that gives you the ability to interact with styl before
compiling. Useful for adding on plugins, etc.

### whitespace

Type: `boolean`  
Default: `false`

Utilize CSS [whitespace transformations](https://github.com/visionmedia/styl#whitespace-significant-syntax).


## License

MIT © [Kevin Mårtensson](https://github.com/kevva)
