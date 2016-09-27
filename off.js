'use strict';
module.exports = function (ele, type, handler) {
    if (ele.removeEventListener) {
        ele.removeEventListener(type, handler, false);
    }
    else if (ele.detachEvent) {
        ele.detachEvent('on' + type, handler);
    }
    else {
        ele['on' + type] = null;
    }
}