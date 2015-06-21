'use strict';
var Filter = require('broccoli-filter');
var Styl = require('styl');

function StylFilter(inputTree, opts) {
	if (!(this instanceof StylFilter)) {
		return new StylFilter(inputTree, opts);
	}

	this.inputTree = inputTree;
	this.opts = opts || {};
}

StylFilter.prototype = Object.create(Filter.prototype);
StylFilter.prototype.constructor = StylFilter;
StylFilter.prototype.extensions = ['css', 'styl'];
StylFilter.prototype.targetExtension = 'css';

StylFilter.prototype.processString = function (str) {
	var styl = new Styl(str, this.opts);

	if (this.opts.use) {
		this.opts.use(styl);
	}

	return styl.toString();
};

module.exports = StylFilter;
