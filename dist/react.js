var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (global, factory) {
    (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.React = factory();
})(this, function () {
    'use strict';

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

        if (children.length) {
            instance.props.children = children;
        }
        return instance;
    }

    //window.React = exports;

    var isAsyncSetState = false;

    function asyncSetState(value) {
        isAsyncSetState = value;
    }

    var Component = function () {
        function Component(props) {
            _classCallCheck(this, Component);

            this.props = props;
            this.refs = {};
        }

        _createClass(Component, [{
            key: 'setWrapper',
            value: function setWrapper() {}
        }, {
            key: 'setState',
            value: function setState(updater, cb) {
                var _this = this;

                var instance = this._reactInternalInstance;
                if (instance.setStateTimeout) {
                    clearTimeout(instance.setStateTimeout);
                }
                instance.stateQueue.push({
                    updater: updater,
                    cb: cb
                });
                var execQueue = function execQueue() {
                    instance.setStateTimeout = 0;
                    instance.handleStateQueue(_this, _this.state, _this.props);
                };
                if (isAsyncSetState) {
                    instance.setStateTimeout = setTimeout(execQueue);
                } else {
                    execQueue();
                }
            }
        }]);

        return Component;
    }();

    var exports$1 = {
        createElement: createElement,
        Component: Component,
        asyncSetState: asyncSetState
    };

    //window.React = exports;

    return exports$1;
});