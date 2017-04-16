var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (global, factory) {
    (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('jquery')) : typeof define === 'function' && define.amd ? define(['jquery'], factory) : global.React = factory(global.jQuery);
})(this, function (jquery) {
    'use strict';

    jquery = 'default' in jquery ? jquery['default'] : jquery;

    //import $ from "jquery";


    function createElement(type, config) {
        if (!config) {
            config = {};
        }

        var instance = {
            type: type,
            props: config
        };

        for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            children[_key - 2] = arguments[_key];
        }

        if (children) {
            instance.props.children = children;
        }
        return instance;
    }

    //window.React = exports;

    var Component = function Component() {
        _classCallCheck(this, Component);
    };

    var exports$1 = {
        createElement: createElement,
        Component: Component
    };

    //window.React = exports;

    return exports$1;
});