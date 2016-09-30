'use strict';
module.exports =function(ele) {
    var offsetSum = ele.offsetTop;
    var cur = ele.offsetParent;
    while (cur) {
        offsetSum += cur.offsetTop;
        cur = cur.offsetParent;
    }
    return offsetSum;
}