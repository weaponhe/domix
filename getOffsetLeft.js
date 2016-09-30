'use strict';
module.exports = function (ele) {
    var offsetSum = ele.offsetLeft;
    var cur = ele.offsetParent;
    while (cur) {
        offsetSum += cur.offsetLeft;
        cur = cur.offsetParent;
    }
    return offsetSum;
}