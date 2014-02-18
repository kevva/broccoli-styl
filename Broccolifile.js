'use strict';

var calc = require('rework-calc');
var styl = require('./');

module.exports = function (broccoli) {
    return styl(broccoli.makeTree('test/fixtures'));
};

module.exports = function (broccoli) {
    return styl(broccoli.makeTree('test/fixtures'), { use: function (css) {
        css.use(calc);
    }});
};
