'use strict';

var styl = require('./');

module.exports = function (broccoli) {
    return styl(broccoli.makeTree('test/fixtures'));
};
