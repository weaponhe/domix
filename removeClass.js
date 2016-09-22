'use strict';
var hasClass = require('./hasClass');
module.exports = function (ele, cls) {
    if (ele && hasClass(ele, cls)) {
        ele.className = ele.className.replace(RegExp('(\\s|^)' + cls + '(\\s|$)'), '');
    }
}