'use strict';

var Filter = require('broccoli-filter');
var styl = require('styl');

/**
 * Initialize `StylFilter` with options
 *
 * Options:
 *
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
    this.opts = opts;
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
    return styl(str, this.opts).toString();
};

/**
 * Module exports
 */

module.exports = StylFilter;
