(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) :
	typeof define === 'function' && define.amd ? define(['jquery'], factory) :
	(global.React = factory(global.jQuery));
}(this, (function (jquery) { 'use strict';

jquery = 'default' in jquery ? jquery['default'] : jquery;

//import $ from "jquery";






function createElement(type, config, ...children) {
    if (!config) {
        config = {};
    }

    const instance = {
        type,
        props: config
    };
    if (children) {
        instance.props.children = children;
    }
    return instance;
}


//window.React = exports;

class Component {

}
const exports$1 = {
    createElement,
    Component
};

//window.React = exports;

return exports$1;

})));
