(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.React = factory());
}(this, (function () { 'use strict';

function createElement() {
    console.log("createElement", arguments);
}
const exports$1 = {
    createElement
};

//window.React = exports;

return exports$1;

})));
