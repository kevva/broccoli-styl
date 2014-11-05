'use strict';

var calc = require('rework-calc');
var styl = require('./');

module.exports = styl('test/fixtures', { use: function (css) {
	css.use(calc);
}});
