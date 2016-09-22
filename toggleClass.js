'use strict';
var hasClass = require('./hasClass'),
    addClass = require('./addClass'),
    removeClass = require('./removeClass');
module.exports = function (element, className) {
    if (element) {
        if (hasClass(element, className)) {
            removeClass(element, className);
        } else {
            addClass(element, className);
        }
    }
}