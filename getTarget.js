'use strict';
module.exports = function (event) {
    return event.target || event.srcElement;
}