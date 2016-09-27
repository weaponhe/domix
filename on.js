'use strict';
module.exports = function (ele, type, handler) {
    if (ele.addEventListener) {
        ele.addEventListener(type, handler, false);
    }
    else if (ele.attachEvent) {
        ele.attachEvent('on' + type, handler);
    }
    else {
        ele['on' + type] = handler;
    }
}