'use strict';

var Filter = require('broccoli-filter');
var Styl = require('styl');

/**
 * Initialize `StylFilter` with options
 *
 * Options:
 *
 *   - `use` Accepts a function that gives you the ability to interact with styl
 *   - `whitespace` Utilize CSS whitespace transformations
 *
 * @param {Object} inputTree
 * @param {Object} opts
 * @api public
 */

function StylFilter(inputTree, opts) {
	if (!(this instanceof StylFilter)) {
		return new StylFilter(inputTree, opts);
	}

	this.inputTree = inputTree;
	this.opts = opts || {};
}

/**
 * Create object
 */

StylFilter.prototype = Object.create(Filter.prototype);
StylFilter.prototype.constructor = StylFilter;

/**
 * Extensions
 */

StylFilter.prototype.extensions = ['css', 'styl'];
StylFilter.prototype.targetExtension = 'css';

/**
 * Process CSS
 *
 * @param {String} str
 * @api public
 */

StylFilter.prototype.processString = function (str) {
	var styl = new Styl(str, this.opts);

	if (this.opts.use) {
		this.opts.use(styl);
	}

	return styl.toString();
};

/**
 * Module exports
 */

module.exports = StylFilter;
