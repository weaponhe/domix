'use strict';
module.exports = function (ele, cls) {
    return RegExp('(\\s|^)' + cls + '(\\s|$)').test(ele.className);
}