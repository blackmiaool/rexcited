/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 56);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/******/(function (modules) {
    // webpackBootstrap
    /******/ // install a JSONP callback for chunk loading
    /******/var parentJsonpFunction = window["webpackJsonp"];
    /******/window["webpackJsonp"] = function webpackJsonpCallback(chunkIds, moreModules, executeModules) {
        /******/ // add "moreModules" to the modules object,
        /******/ // then flag all "chunkIds" as loaded and fire callback
        /******/var moduleId,
            chunkId,
            i = 0,
            resolves = [],
            result;
        /******/for (; i < chunkIds.length; i++) {
            /******/chunkId = chunkIds[i];
            /******/if (installedChunks[chunkId]) {
                /******/resolves.push(installedChunks[chunkId][0]);
                /******/
            }
            /******/installedChunks[chunkId] = 0;
            /******/
        }
        /******/for (moduleId in moreModules) {
            /******/if (Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
                /******/modules[moduleId] = moreModules[moduleId];
                /******/
            }
            /******/
        }
        /******/if (parentJsonpFunction) parentJsonpFunction(chunkIds, moreModules, executeModules);
        /******/while (resolves.length) {
            /******/resolves.shift()();
            /******/
        }
        /******/if (executeModules) {
            /******/for (i = 0; i < executeModules.length; i++) {
                /******/result = __webpack_require__(__webpack_require__.s = executeModules[i]);
                /******/
            }
            /******/
        }
        /******/return result;
        /******/
    };
    /******/
    /******/ // The module cache
    /******/var installedModules = {};
    /******/
    /******/ // objects to store loaded and loading chunks
    /******/var installedChunks = {
        /******/1: 0
        /******/ };
    /******/
    /******/ // The require function
    /******/function __webpack_require__(moduleId) {
        /******/
        /******/ // Check if module is in cache
        /******/if (installedModules[moduleId]) {
            /******/return installedModules[moduleId].exports;
            /******/
        }
        /******/ // Create a new module (and put it into the cache)
        /******/var module = installedModules[moduleId] = {
            /******/i: moduleId,
            /******/l: false,
            /******/exports: {}
            /******/ };
        /******/
        /******/ // Execute the module function
        /******/modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
        /******/
        /******/ // Flag the module as loaded
        /******/module.l = true;
        /******/
        /******/ // Return the exports of the module
        /******/return module.exports;
        /******/
    }
    /******/
    /******/ // This file contains only the entry chunk.
    /******/ // The chunk loading function for additional chunks
    /******/__webpack_require__.e = function requireEnsure(chunkId) {
        /******/if (installedChunks[chunkId] === 0) {
            /******/return Promise.resolve();
            /******/
        }
        /******/
        /******/ // a Promise means "currently loading".
        /******/if (installedChunks[chunkId]) {
            /******/return installedChunks[chunkId][2];
            /******/
        }
        /******/
        /******/ // setup Promise in chunk cache
        /******/var promise = new Promise(function (resolve, reject) {
            /******/installedChunks[chunkId] = [resolve, reject];
            /******/
        });
        /******/installedChunks[chunkId][2] = promise;
        /******/
        /******/ // start chunk loading
        /******/var head = document.getElementsByTagName('head')[0];
        /******/var script = document.createElement('script');
        /******/script.type = 'text/javascript';
        /******/script.charset = 'utf-8';
        /******/script.async = true;
        /******/script.timeout = 120000;
        /******/
        /******/if (__webpack_require__.nc) {
            /******/script.setAttribute("nonce", __webpack_require__.nc);
            /******/
        }
        /******/script.src = __webpack_require__.p + "" + chunkId + ".js";
        /******/var timeout = setTimeout(onScriptComplete, 120000);
        /******/script.onerror = script.onload = onScriptComplete;
        /******/function onScriptComplete() {
            /******/ // avoid mem leaks in IE.
            /******/script.onerror = script.onload = null;
            /******/clearTimeout(timeout);
            /******/var chunk = installedChunks[chunkId];
            /******/if (chunk !== 0) {
                /******/if (chunk) {
                    /******/chunk[1](new Error('Loading chunk ' + chunkId + ' failed.'));
                    /******/
                }
                /******/installedChunks[chunkId] = undefined;
                /******/
            }
            /******/
        };
        /******/head.appendChild(script);
        /******/
        /******/return promise;
        /******/
    };
    /******/
    /******/ // expose the modules object (__webpack_modules__)
    /******/__webpack_require__.m = modules;
    /******/
    /******/ // expose the module cache
    /******/__webpack_require__.c = installedModules;
    /******/
    /******/ // identity function for calling harmony imports with the correct context
    /******/__webpack_require__.i = function (value) {
        return value;
    };
    /******/
    /******/ // define getter function for harmony exports
    /******/__webpack_require__.d = function (exports, name, getter) {
        /******/if (!__webpack_require__.o(exports, name)) {
            /******/Object.defineProperty(exports, name, {
                /******/configurable: false,
                /******/enumerable: true,
                /******/get: getter
                /******/ });
            /******/
        }
        /******/
    };
    /******/
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/__webpack_require__.n = function (module) {
        /******/var getter = module && module.__esModule ?
        /******/function getDefault() {
            return module['default'];
        } :
        /******/function getModuleExports() {
            return module;
        };
        /******/__webpack_require__.d(getter, 'a', getter);
        /******/return getter;
        /******/
    };
    /******/
    /******/ // Object.prototype.hasOwnProperty.call
    /******/__webpack_require__.o = function (object, property) {
        return Object.prototype.hasOwnProperty.call(object, property);
    };
    /******/
    /******/ // __webpack_public_path__
    /******/__webpack_require__.p = "";
    /******/
    /******/ // on error function for async loading
    /******/__webpack_require__.oe = function (err) {
        console.error(err);throw err;
    };
    /******/
    /******/ // Load entry module and return exports
    /******/return __webpack_require__(__webpack_require__.s = 8);
    /******/
})(
/************************************************************************/
/******/[
/* 0 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });
    exports.renderingComponentStack = exports.cloneElement = exports.isValidElement = exports.createClass = exports.PropTypes = exports.Children = exports.Component = exports.createElement = undefined;

    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    };

    var _createClass = function () {
        function defineProperties(target, props) {
            for (var i = 0; i < props.length; i++) {
                var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
            }
        }return function (Constructor, protoProps, staticProps) {
            if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
        };
    }();

    var _children = __webpack_require__(7);

    var _children2 = _interopRequireDefault(_children);

    var _propTypes = __webpack_require__(5);

    var _propTypes2 = _interopRequireDefault(_propTypes);

    function _interopRequireDefault(obj) {
        return obj && obj.__esModule ? obj : { default: obj };
    }

    function _classCallCheck(instance, Constructor) {
        if (!(instance instanceof Constructor)) {
            throw new TypeError("Cannot call a class as a function");
        }
    }

    function _possibleConstructorReturn(self, call) {
        if (!self) {
            throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
        }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
    }

    function _inherits(subClass, superClass) {
        if (typeof superClass !== "function" && superClass !== null) {
            throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
        }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
    }

    var createClassStaticKeys = ['getDefaultProps', 'getInitialState', 'propTypes', 'statics'];

    function createClass(obj) {
        var a = function (_Component) {
            _inherits(a, _Component);

            function a() {
                _classCallCheck(this, a);

                return _possibleConstructorReturn(this, (a.__proto__ || Object.getPrototypeOf(a)).apply(this, arguments));
            }

            return a;
        }(Component);

        for (var i in obj) {
            if (createClassStaticKeys.indexOf(i) > -1) {
                a[i] = obj[i];
            } else {
                a.prototype[i] = obj[i];
            }
        }
        a.originalCreateClassObj = obj;
        return a;
    }

    var Component = function () {
        function Component(props, context) {
            _classCallCheck(this, Component);

            this.props = props;
            this.refs = {};
            this.context = context;
        }

        _createClass(Component, [{
            key: 'setWrapper',
            value: function setWrapper() {}
        }, {
            key: 'forceUpdate',
            value: function forceUpdate() {
                var wrapper = this._reactInternalInstance;
                wrapper.forceUpdate(this.state, this.props);
            }
        }, {
            key: 'setState',
            value: function setState(updater, cb) {
                var wrapper = this._reactInternalInstance;

                wrapper.stateQueue.push({
                    updater: updater,
                    cb: cb
                });

                if (!_exports.isAsyncSetState) {
                    wrapper.handleStateQueue(this.props, true);
                } else {
                    wrapper.addToDirty();
                }
            }
        }]);

        return Component;
    }();

    function isText(key) {
        return typeof key === "string" || typeof key === "number";
    }

    function isValidElement(element) {
        if ((typeof element === 'undefined' ? 'undefined' : _typeof(element)) !== "object" || !element) {
            return false;
        }
        return true;
    }
    var PropTypes = _propTypes2.default.PropTypes;

    function cloneElement(element, config) {

        if (!isValidElement(element)) {
            return element;
        }
        var element0 = element;

        element = Object.assign({}, element);
        element.props = Object.assign({}, element.props, config);
        element.key = element.props.key || element.key;
        element.ref = element.props.ref || element.ref;
        element._owner = element.props._owner || element._owner;
        element._refowner = element.props._refowner || element._refowner;

        if (element.ref) {
            element._refowner = renderingComponentStack[renderingComponentStack.length - 1];
        }

        element.props.children = element.props.children || [];

        if (!Array.isArray(element.props.children)) {
            element.props.children = [element.props.children];
        }

        for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
            children[_key - 2] = arguments[_key];
        }

        if (children.length) {
            element.props.children = children;
        }
        element.props.children = element.props.children.map(function (child) {
            return cloneElement(child);
        });

        if (element.props.children.length === 1) {
            element.props.children = element.props.children[0];
        }
        if (Array.isArray(element.props.children) && !element.props.children.length) {
            delete element.props.children;
        }

        return element;
    }

    function createElement(type, props) {

        if (!props) {
            props = {};
        }
        props = Object.assign({}, props);
        var element = {
            type: type,
            props: props
        };
        if (props.key) {
            element.key = props.key;
            delete props.key;
        }
        if (props.ref) {
            element.ref = props.ref;
            delete props.ref;
        }

        for (var _len2 = arguments.length, children = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            children[_key2 - 2] = arguments[_key2];
        }

        if (children.length > 1) {
            element.props.children = children;
        } else if (children.length === 1) {
            element.props.children = children[0];
        }

        if (renderingComponentStack.length) {
            element._refowner = renderingComponentStack[renderingComponentStack.length - 1];
        } else {
            //        console.trace("no owner", element);
        }
        return element;
    }

    var renderingComponentStack = [];
    var _exports = {
        createElement: createElement,
        Component: Component,
        Children: _children2.default,
        PropTypes: PropTypes,
        createClass: createClass,
        isValidElement: isValidElement,
        cloneElement: cloneElement,
        renderingComponentStack: renderingComponentStack
    };

    exports.createElement = createElement;
    exports.Component = Component;
    exports.Children = _children2.default;
    exports.PropTypes = PropTypes;
    exports.createClass = createClass;
    exports.isValidElement = isValidElement;
    exports.cloneElement = cloneElement;
    exports.renderingComponentStack = renderingComponentStack;
    exports.default = _exports;

    window.React = _exports;

    /***/
},,
/* 1 */
/* 2 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     * All rights reserved.
     *
     * This source code is licensed under the BSD-style license found in the
     * LICENSE file in the root directory of this source tree. An additional grant
     * of patent rights can be found in the PATENTS file in the same directory.
     *
     * 
     */

    function makeEmptyFunction(arg) {
        return function () {
            return arg;
        };
    }

    /**
     * This function accepts and discards inputs; it has no side effects. This is
     * primarily useful idiomatically for overridable function endpoints which
     * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
     */
    var emptyFunction = function emptyFunction() {};

    emptyFunction.thatReturns = makeEmptyFunction;
    emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
    emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
    emptyFunction.thatReturnsNull = makeEmptyFunction(null);
    emptyFunction.thatReturnsThis = function () {
        return this;
    };
    emptyFunction.thatReturnsArgument = function (arg) {
        return arg;
    };

    module.exports = emptyFunction;

    /***/
},
/* 3 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /**
     * Copyright (c) 2013-present, Facebook, Inc.
     * All rights reserved.
     *
     * This source code is licensed under the BSD-style license found in the
     * LICENSE file in the root directory of this source tree. An additional grant
     * of patent rights can be found in the PATENTS file in the same directory.
     *
     */

    /**
     * Use invariant() to assert state which your program assumes to be true.
     *
     * Provide sprintf-style format (only %s is supported) and arguments
     * to provide information about what broke and what you were
     * expecting.
     *
     * The invariant message will be stripped in production, but the invariant
     * will remain to ensure logic does not differ in production.
     */

    var validateFormat = function validateFormat(format) {};

    if (false) {
        validateFormat = function validateFormat(format) {
            if (format === undefined) {
                throw new Error('invariant requires an error message argument');
            }
        };
    }

    function invariant(condition, format, a, b, c, d, e, f) {
        validateFormat(format);

        if (!condition) {
            var error;
            if (format === undefined) {
                error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
            } else {
                var args = [a, b, c, d, e, f];
                var argIndex = 0;
                error = new Error(format.replace(/%s/g, function () {
                    return args[argIndex++];
                }));
                error.name = 'Invariant Violation';
            }

            error.framesToPop = 1; // we don't care about invariant's own frame
            throw error;
        }
    }

    module.exports = invariant;

    /***/
},
/* 4 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /**
     * Copyright 2013-present, Facebook, Inc.
     * All rights reserved.
     *
     * This source code is licensed under the BSD-style license found in the
     * LICENSE file in the root directory of this source tree. An additional grant
     * of patent rights can be found in the PATENTS file in the same directory.
     */

    var emptyFunction = __webpack_require__(2);
    var invariant = __webpack_require__(3);
    var ReactPropTypesSecret = __webpack_require__(6);

    module.exports = function () {
        function shim(props, propName, componentName, location, propFullName, secret) {
            if (secret === ReactPropTypesSecret) {
                // It is still safe when called from React.
                return;
            }
            invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
        };
        shim.isRequired = shim;
        function getShim() {
            return shim;
        };
        // Important!
        // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
        var ReactPropTypes = {
            array: shim,
            bool: shim,
            func: shim,
            number: shim,
            object: shim,
            string: shim,
            symbol: shim,

            any: shim,
            arrayOf: getShim,
            element: shim,
            instanceOf: getShim,
            node: shim,
            objectOf: getShim,
            oneOf: getShim,
            oneOfType: getShim,
            shape: getShim
        };

        ReactPropTypes.checkPropTypes = emptyFunction;
        ReactPropTypes.PropTypes = ReactPropTypes;

        return ReactPropTypes;
    };

    /***/
},
/* 5 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    };

    /**
     * Copyright 2013-present, Facebook, Inc.
     * All rights reserved.
     *
     * This source code is licensed under the BSD-style license found in the
     * LICENSE file in the root directory of this source tree. An additional grant
     * of patent rights can be found in the PATENTS file in the same directory.
     */

    if (false) {
        var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

        var isValidElement = function isValidElement(object) {
            return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
        };

        // By explicitly using `prop-types` you are opting into new development behavior.
        // http://fb.me/prop-types-in-prod
        var throwOnDirectAccess = true;
        module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
    } else {
        // By explicitly using `prop-types` you are opting into new production behavior.
        // http://fb.me/prop-types-in-prod
        module.exports = __webpack_require__(4)();
    }

    /***/
},
/* 6 */
/***/function (module, exports, __webpack_require__) {

    "use strict";
    /**
     * Copyright 2013-present, Facebook, Inc.
     * All rights reserved.
     *
     * This source code is licensed under the BSD-style license found in the
     * LICENSE file in the root directory of this source tree. An additional grant
     * of patent rights can be found in the PATENTS file in the same directory.
     */

    var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

    module.exports = ReactPropTypesSecret;

    /***/
},
/* 7 */
/***/function (module, exports, __webpack_require__) {

    "use strict";

    Object.defineProperty(exports, "__esModule", {
        value: true
    });

    var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
        return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    } : function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
    };

    function only(children) {
        if (Array.isArray(children)) {
            return children[0];
        } else {
            if (children.type) {
                return children;
            } else {
                return children[Object.keys(children)[0]];
            }
        }
    }

    function isText(key) {
        return typeof key === "string" || typeof key === "number";
    }

    function traverse(children, cb, thisArg, addKey) {
        if ((typeof children === "undefined" ? "undefined" : _typeof(children)) === 'object' && children && !children.type) {
            //map
            children = Object.keys(children).map(function (key) {
                return children[key];
            });
        } else {
            children = [children];
        }

        var arr = [];
        children.forEach(function (child, i) {
            if (!child) {
                return;
            }

            function recursion(child, preKey, index) {
                var key = "" + preKey + index;

                if (isText(child)) {
                    //text node                
                    if (addKey) {
                        child.key = key;
                    }
                } else if (Array.isArray(child)) {
                    //array 
                    child.forEach(function (ele, j) {
                        return recursion(ele, key + ":", j);
                    });
                    return;
                } else {
                    if (addKey) {
                        child = Object.assign({}, child);
                    }

                    if (child && isText(child.key)) {
                        key = preKey + "$" + child.key;
                    }
                    if (addKey) {
                        child.key = key;
                    }
                }
                arr.push(cb.call(thisArg, child));
            }
            recursion(child, ".", i);
        });

        return arr;
    }

    function map(children, cb, thisArg) {
        return traverse(children, cb, thisArg, true);
        //    console.log('map', children, cb)
    }

    function forEach(children, cb, thisArg) {
        traverse(children, cb, thisArg, false);
    }

    function count(children) {
        var count = 0;
        if ((typeof children === "undefined" ? "undefined" : _typeof(children)) === "object" && children) {
            if (children.type) {
                count = 1;
            } else {
                for (var i in children) {
                    count++;
                }
            }
        } else if (Array.isArray(children)) {
            count = children.length;
        }
        return count;
    }
    exports.default = {
        only: only,
        forEach: forEach,
        map: map,
        count: count
    };

    /***/
},
/* 8 */
/***/function (module, exports, __webpack_require__) {

    module.exports = __webpack_require__(0);

    /***/
}]);

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */

if (false) {
  var REACT_ELEMENT_TYPE = typeof Symbol === 'function' && Symbol.for && Symbol.for('react.element') || 0xeac7;

  var isValidElement = function isValidElement(object) {
    return (typeof object === 'undefined' ? 'undefined' : _typeof(object)) === 'object' && object !== null && object.$$typeof === REACT_ELEMENT_TYPE;
  };

  // By explicitly using `prop-types` you are opting into new development behavior.
  // http://fb.me/prop-types-in-prod
  var throwOnDirectAccess = true;
  module.exports = require('./factoryWithTypeCheckers')(isValidElement, throwOnDirectAccess);
} else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(31)();
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.connect = exports.connectAdvanced = exports.createProvider = exports.Provider = undefined;

var _Provider = __webpack_require__(33);

var _Provider2 = _interopRequireDefault(_Provider);

var _connectAdvanced = __webpack_require__(8);

var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);

var _connect = __webpack_require__(34);

var _connect2 = _interopRequireDefault(_connect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.Provider = _Provider2.default;
exports.createProvider = _Provider.createProvider;
exports.connectAdvanced = _connectAdvanced2.default;
exports.connect = _connect2.default;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.compose = exports.applyMiddleware = exports.bindActionCreators = exports.combineReducers = exports.createStore = undefined;

var _createStore = __webpack_require__(13);

var _createStore2 = _interopRequireDefault(_createStore);

var _combineReducers = __webpack_require__(44);

var _combineReducers2 = _interopRequireDefault(_combineReducers);

var _bindActionCreators = __webpack_require__(43);

var _bindActionCreators2 = _interopRequireDefault(_bindActionCreators);

var _applyMiddleware = __webpack_require__(42);

var _applyMiddleware2 = _interopRequireDefault(_applyMiddleware);

var _compose = __webpack_require__(12);

var _compose2 = _interopRequireDefault(_compose);

var _warning = __webpack_require__(14);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/*
* This is a dummy function to check if the function name has been altered by minification.
* If the function has been minified and NODE_ENV !== 'production', warn the user.
*/
function isCrushed() {}

if (false) {
  (0, _warning2.default)('You are currently using minified code outside of NODE_ENV === \'production\'. ' + 'This means that you are running a slower development build of Redux. ' + 'You can use loose-envify (https://github.com/zertosh/loose-envify) for browserify ' + 'or DefinePlugin for webpack (http://stackoverflow.com/questions/30030031) ' + 'to ensure you have the correct code for your production build.');
}

exports.createStore = _createStore2.default;
exports.combineReducers = _combineReducers2.default;
exports.bindActionCreators = _bindActionCreators2.default;
exports.applyMiddleware = _applyMiddleware2.default;
exports.compose = _compose2.default;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _baseGetTag = __webpack_require__(23);

var _baseGetTag2 = _interopRequireDefault(_baseGetTag);

var _getPrototype = __webpack_require__(25);

var _getPrototype2 = _interopRequireDefault(_getPrototype);

var _isObjectLike = __webpack_require__(30);

var _isObjectLike2 = _interopRequireDefault(_isObjectLike);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!(0, _isObjectLike2.default)(value) || (0, _baseGetTag2.default)(value) != objectTag) {
    return false;
  }
  var proto = (0, _getPrototype2.default)(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString;
}

exports.default = isPlainObject;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var nextTodoId = 0;
var addTodo = exports.addTodo = function addTodo(text) {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text: text
  };
};

var setVisibilityFilter = exports.setVisibilityFilter = function setVisibilityFilter(filter) {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter: filter
  };
};

var toggleTodo = exports.toggleTodo = function toggleTodo(id) {
  return {
    type: 'TOGGLE_TODO',
    id: id
  };
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _root = __webpack_require__(29);

var _root2 = _interopRequireDefault(_root);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var _Symbol = _root2.default.Symbol;

exports.default = _Symbol;

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = connectAdvanced;

var _hoistNonReactStatics = __webpack_require__(21);

var _hoistNonReactStatics2 = _interopRequireDefault(_hoistNonReactStatics);

var _invariant = __webpack_require__(22);

var _invariant2 = _interopRequireDefault(_invariant);

var _react = __webpack_require__(0);

var _Subscription = __webpack_require__(40);

var _Subscription2 = _interopRequireDefault(_Subscription);

var _PropTypes = __webpack_require__(10);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

var hotReloadingVersion = 0;
var dummyState = {};
function noop() {}
function makeSelectorStateful(sourceSelector, store) {
  // wrap the selector in an object that tracks its results between runs.
  var selector = {
    run: function runComponentSelector(props) {
      try {
        var nextProps = sourceSelector(store.getState(), props);
        if (nextProps !== selector.props || selector.error) {
          selector.shouldComponentUpdate = true;
          selector.props = nextProps;
          selector.error = null;
        }
      } catch (error) {
        selector.shouldComponentUpdate = true;
        selector.error = error;
      }
    }
  };

  return selector;
}

function connectAdvanced(
/*
  selectorFactory is a func that is responsible for returning the selector function used to
  compute new props from state, props, and dispatch. For example:
     export default connectAdvanced((dispatch, options) => (state, props) => ({
      thing: state.things[props.thingId],
      saveThing: fields => dispatch(actionCreators.saveThing(props.thingId, fields)),
    }))(YourComponent)
   Access to dispatch is provided to the factory so selectorFactories can bind actionCreators
  outside of their selector as an optimization. Options passed to connectAdvanced are passed to
  the selectorFactory, along with displayName and WrappedComponent, as the second argument.
   Note that selectorFactory is responsible for all caching/memoization of inbound and outbound
  props. Do not use connectAdvanced directly without memoizing results between calls to your
  selector, otherwise the Connect component will re-render on every state or props change.
*/
selectorFactory) {
  var _contextTypes, _childContextTypes;

  var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref$getDisplayName = _ref.getDisplayName,
      getDisplayName = _ref$getDisplayName === undefined ? function (name) {
    return 'ConnectAdvanced(' + name + ')';
  } : _ref$getDisplayName,
      _ref$methodName = _ref.methodName,
      methodName = _ref$methodName === undefined ? 'connectAdvanced' : _ref$methodName,
      _ref$renderCountProp = _ref.renderCountProp,
      renderCountProp = _ref$renderCountProp === undefined ? undefined : _ref$renderCountProp,
      _ref$shouldHandleStat = _ref.shouldHandleStateChanges,
      shouldHandleStateChanges = _ref$shouldHandleStat === undefined ? true : _ref$shouldHandleStat,
      _ref$storeKey = _ref.storeKey,
      storeKey = _ref$storeKey === undefined ? 'store' : _ref$storeKey,
      _ref$withRef = _ref.withRef,
      withRef = _ref$withRef === undefined ? false : _ref$withRef,
      connectOptions = _objectWithoutProperties(_ref, ['getDisplayName', 'methodName', 'renderCountProp', 'shouldHandleStateChanges', 'storeKey', 'withRef']);

  var subscriptionKey = storeKey + 'Subscription';
  var version = hotReloadingVersion++;

  var contextTypes = (_contextTypes = {}, _contextTypes[storeKey] = _PropTypes.storeShape, _contextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _contextTypes);
  var childContextTypes = (_childContextTypes = {}, _childContextTypes[subscriptionKey] = _PropTypes.subscriptionShape, _childContextTypes);

  return function wrapWithConnect(WrappedComponent) {
    (0, _invariant2.default)(typeof WrappedComponent == 'function', 'You must pass a component to the function returned by ' + ('connect. Instead received ' + JSON.stringify(WrappedComponent)));

    var wrappedComponentName = WrappedComponent.displayName || WrappedComponent.name || 'Component';

    var displayName = getDisplayName(wrappedComponentName);

    var selectorFactoryOptions = _extends({}, connectOptions, {
      getDisplayName: getDisplayName,
      methodName: methodName,
      renderCountProp: renderCountProp,
      shouldHandleStateChanges: shouldHandleStateChanges,
      storeKey: storeKey,
      withRef: withRef,
      displayName: displayName,
      wrappedComponentName: wrappedComponentName,
      WrappedComponent: WrappedComponent
    });

    var Connect = function (_Component) {
      _inherits(Connect, _Component);

      function Connect(props, context) {
        _classCallCheck(this, Connect);

        var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

        _this.version = version;
        _this.state = {};
        _this.renderCount = 0;
        _this.store = props[storeKey] || context[storeKey];
        _this.propsMode = Boolean(props[storeKey]);
        _this.setWrappedInstance = _this.setWrappedInstance.bind(_this);

        (0, _invariant2.default)(_this.store, 'Could not find "' + storeKey + '" in either the context or props of ' + ('"' + displayName + '". Either wrap the root component in a <Provider>, ') + ('or explicitly pass "' + storeKey + '" as a prop to "' + displayName + '".'));

        _this.initSelector();
        _this.initSubscription();
        return _this;
      }

      Connect.prototype.getChildContext = function getChildContext() {
        var _ref2;

        // If this component received store from props, its subscription should be transparent
        // to any descendants receiving store+subscription from context; it passes along
        // subscription passed to it. Otherwise, it shadows the parent subscription, which allows
        // Connect to control ordering of notifications to flow top-down.
        var subscription = this.propsMode ? null : this.subscription;
        return _ref2 = {}, _ref2[subscriptionKey] = subscription || this.context[subscriptionKey], _ref2;
      };

      Connect.prototype.componentDidMount = function componentDidMount() {
        if (!shouldHandleStateChanges) return;

        // componentWillMount fires during server side rendering, but componentDidMount and
        // componentWillUnmount do not. Because of this, trySubscribe happens during ...didMount.
        // Otherwise, unsubscription would never take place during SSR, causing a memory leak.
        // To handle the case where a child component may have triggered a state change by
        // dispatching an action in its componentWillMount, we have to re-run the select and maybe
        // re-render.
        this.subscription.trySubscribe();
        this.selector.run(this.props);
        if (this.selector.shouldComponentUpdate) this.forceUpdate();
      };

      Connect.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
        this.selector.run(nextProps);
      };

      Connect.prototype.shouldComponentUpdate = function shouldComponentUpdate() {
        return this.selector.shouldComponentUpdate;
      };

      Connect.prototype.componentWillUnmount = function componentWillUnmount() {
        if (this.subscription) this.subscription.tryUnsubscribe();
        this.subscription = null;
        this.notifyNestedSubs = noop;
        this.store = null;
        this.selector.run = noop;
        this.selector.shouldComponentUpdate = false;
      };

      Connect.prototype.getWrappedInstance = function getWrappedInstance() {
        (0, _invariant2.default)(withRef, 'To access the wrapped instance, you need to specify ' + ('{ withRef: true } in the options argument of the ' + methodName + '() call.'));
        return this.wrappedInstance;
      };

      Connect.prototype.setWrappedInstance = function setWrappedInstance(ref) {
        this.wrappedInstance = ref;
      };

      Connect.prototype.initSelector = function initSelector() {
        var sourceSelector = selectorFactory(this.store.dispatch, selectorFactoryOptions);
        this.selector = makeSelectorStateful(sourceSelector, this.store);
        this.selector.run(this.props);
      };

      Connect.prototype.initSubscription = function initSubscription() {
        if (!shouldHandleStateChanges) return;

        // parentSub's source should match where store came from: props vs. context. A component
        // connected to the store via props shouldn't use subscription from context, or vice versa.
        var parentSub = (this.propsMode ? this.props : this.context)[subscriptionKey];
        this.subscription = new _Subscription2.default(this.store, parentSub, this.onStateChange.bind(this));

        // `notifyNestedSubs` is duplicated to handle the case where the component is  unmounted in
        // the middle of the notification loop, where `this.subscription` will then be null. An
        // extra null check every change can be avoided by copying the method onto `this` and then
        // replacing it with a no-op on unmount. This can probably be avoided if Subscription's
        // listeners logic is changed to not call listeners that have been unsubscribed in the
        // middle of the notification loop.
        this.notifyNestedSubs = this.subscription.notifyNestedSubs.bind(this.subscription);
      };

      Connect.prototype.onStateChange = function onStateChange() {
        this.selector.run(this.props);

        if (!this.selector.shouldComponentUpdate) {
          this.notifyNestedSubs();
        } else {
          this.componentDidUpdate = this.notifyNestedSubsOnComponentDidUpdate;
          this.setState(dummyState);
        }
      };

      Connect.prototype.notifyNestedSubsOnComponentDidUpdate = function notifyNestedSubsOnComponentDidUpdate() {
        // `componentDidUpdate` is conditionally implemented when `onStateChange` determines it
        // needs to notify nested subs. Once called, it unimplements itself until further state
        // changes occur. Doing it this way vs having a permanent `componentDidMount` that does
        // a boolean check every time avoids an extra method call most of the time, resulting
        // in some perf boost.
        this.componentDidUpdate = undefined;
        this.notifyNestedSubs();
      };

      Connect.prototype.isSubscribed = function isSubscribed() {
        return Boolean(this.subscription) && this.subscription.isSubscribed();
      };

      Connect.prototype.addExtraProps = function addExtraProps(props) {
        if (!withRef && !renderCountProp && !(this.propsMode && this.subscription)) return props;
        // make a shallow copy so that fields added don't leak to the original selector.
        // this is especially important for 'ref' since that's a reference back to the component
        // instance. a singleton memoized selector would then be holding a reference to the
        // instance, preventing the instance from being garbage collected, and that would be bad
        var withExtras = _extends({}, props);
        if (withRef) withExtras.ref = this.setWrappedInstance;
        if (renderCountProp) withExtras[renderCountProp] = this.renderCount++;
        if (this.propsMode && this.subscription) withExtras[subscriptionKey] = this.subscription;
        return withExtras;
      };

      Connect.prototype.render = function render() {
        var selector = this.selector;
        selector.shouldComponentUpdate = false;

        if (selector.error) {
          throw selector.error;
        } else {
          return (0, _react.createElement)(WrappedComponent, this.addExtraProps(selector.props));
        }
      };

      return Connect;
    }(_react.Component);

    Connect.WrappedComponent = WrappedComponent;
    Connect.displayName = displayName;
    Connect.childContextTypes = childContextTypes;
    Connect.contextTypes = contextTypes;
    Connect.propTypes = contextTypes;

    if (false) {
      Connect.prototype.componentWillUpdate = function componentWillUpdate() {
        // We are hot reloading!
        if (this.version !== version) {
          this.version = version;
          this.initSelector();

          if (this.subscription) this.subscription.tryUnsubscribe();
          this.initSubscription();
          if (shouldHandleStateChanges) this.subscription.trySubscribe();
        }
      };
    }

    return (0, _hoistNonReactStatics2.default)(Connect, WrappedComponent);
  };
}

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.wrapMapToPropsConstant = wrapMapToPropsConstant;
exports.getDependsOnOwnProps = getDependsOnOwnProps;
exports.wrapMapToPropsFunc = wrapMapToPropsFunc;

var _verifyPlainObject = __webpack_require__(11);

var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function wrapMapToPropsConstant(getConstant) {
  return function initConstantSelector(dispatch, options) {
    var constant = getConstant(dispatch, options);

    function constantSelector() {
      return constant;
    }
    constantSelector.dependsOnOwnProps = false;
    return constantSelector;
  };
}

// dependsOnOwnProps is used by createMapToPropsProxy to determine whether to pass props as args
// to the mapToProps function being wrapped. It is also used by makePurePropsSelector to determine
// whether mapToProps needs to be invoked when props have changed.
// 
// A length of one signals that mapToProps does not depend on props from the parent component.
// A length of zero is assumed to mean mapToProps is getting args via arguments or ...args and
// therefore not reporting its length accurately..
function getDependsOnOwnProps(mapToProps) {
  return mapToProps.dependsOnOwnProps !== null && mapToProps.dependsOnOwnProps !== undefined ? Boolean(mapToProps.dependsOnOwnProps) : mapToProps.length !== 1;
}

// Used by whenMapStateToPropsIsFunction and whenMapDispatchToPropsIsFunction,
// this function wraps mapToProps in a proxy function which does several things:
// 
//  * Detects whether the mapToProps function being called depends on props, which
//    is used by selectorFactory to decide if it should reinvoke on props changes.
//    
//  * On first call, handles mapToProps if returns another function, and treats that
//    new function as the true mapToProps for subsequent calls.
//    
//  * On first call, verifies the first result is a plain object, in order to warn
//    the developer that their mapToProps function is not returning a valid result.
//    
function wrapMapToPropsFunc(mapToProps, methodName) {
  return function initProxySelector(dispatch, _ref) {
    var displayName = _ref.displayName;

    var proxy = function mapToPropsProxy(stateOrDispatch, ownProps) {
      return proxy.dependsOnOwnProps ? proxy.mapToProps(stateOrDispatch, ownProps) : proxy.mapToProps(stateOrDispatch);
    };

    // allow detectFactoryAndVerify to get ownProps
    proxy.dependsOnOwnProps = true;

    proxy.mapToProps = function detectFactoryAndVerify(stateOrDispatch, ownProps) {
      proxy.mapToProps = mapToProps;
      proxy.dependsOnOwnProps = getDependsOnOwnProps(mapToProps);
      var props = proxy(stateOrDispatch, ownProps);

      if (typeof props === 'function') {
        proxy.mapToProps = props;
        proxy.dependsOnOwnProps = getDependsOnOwnProps(props);
        props = proxy(stateOrDispatch, ownProps);
      }

      if (false) (0, _verifyPlainObject2.default)(props, displayName, methodName);

      return props;
    };

    return proxy;
  };
}

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.storeShape = exports.subscriptionShape = undefined;

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var subscriptionShape = exports.subscriptionShape = _propTypes2.default.shape({
  trySubscribe: _propTypes2.default.func.isRequired,
  tryUnsubscribe: _propTypes2.default.func.isRequired,
  notifyNestedSubs: _propTypes2.default.func.isRequired,
  isSubscribed: _propTypes2.default.func.isRequired
});

var storeShape = exports.storeShape = _propTypes2.default.shape({
  subscribe: _propTypes2.default.func.isRequired,
  dispatch: _propTypes2.default.func.isRequired,
  getState: _propTypes2.default.func.isRequired
});

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = verifyPlainObject;

var _isPlainObject = __webpack_require__(4);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _warning = __webpack_require__(5);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function verifyPlainObject(value, displayName, methodName) {
  if (!(0, _isPlainObject2.default)(value)) {
    (0, _warning2.default)(methodName + '() in ' + displayName + ' must return a plain object. Instead received ' + value + '.');
  }
}

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = compose;
/**
 * Composes single-argument functions from right to left. The rightmost
 * function can take multiple arguments as it provides the signature for
 * the resulting composite function.
 *
 * @param {...Function} funcs The functions to compose.
 * @returns {Function} A function obtained by composing the argument functions
 * from right to left. For example, compose(f, g, h) is identical to doing
 * (...args) => f(g(h(...args))).
 */

function compose() {
  for (var _len = arguments.length, funcs = Array(_len), _key = 0; _key < _len; _key++) {
    funcs[_key] = arguments[_key];
  }

  if (funcs.length === 0) {
    return function (arg) {
      return arg;
    };
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  var last = funcs[funcs.length - 1];
  var rest = funcs.slice(0, -1);
  return function () {
    return rest.reduceRight(function (composed, f) {
      return f(composed);
    }, last.apply(undefined, arguments));
  };
}

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ActionTypes = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = createStore;

var _isPlainObject = __webpack_require__(4);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _symbolObservable = __webpack_require__(45);

var _symbolObservable2 = _interopRequireDefault(_symbolObservable);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * These are private action types reserved by Redux.
 * For any unknown actions, you must return the current state.
 * If the current state is undefined, you must return the initial state.
 * Do not reference these action types directly in your code.
 */
var ActionTypes = exports.ActionTypes = {
  INIT: '@@redux/INIT'
};

/**
 * Creates a Redux store that holds the state tree.
 * The only way to change the data in the store is to call `dispatch()` on it.
 *
 * There should only be a single store in your app. To specify how different
 * parts of the state tree respond to actions, you may combine several reducers
 * into a single reducer function by using `combineReducers`.
 *
 * @param {Function} reducer A function that returns the next state tree, given
 * the current state tree and the action to handle.
 *
 * @param {any} [preloadedState] The initial state. You may optionally specify it
 * to hydrate the state from the server in universal apps, or to restore a
 * previously serialized user session.
 * If you use `combineReducers` to produce the root reducer function, this must be
 * an object with the same shape as `combineReducers` keys.
 *
 * @param {Function} enhancer The store enhancer. You may optionally specify it
 * to enhance the store with third-party capabilities such as middleware,
 * time travel, persistence, etc. The only store enhancer that ships with Redux
 * is `applyMiddleware()`.
 *
 * @returns {Store} A Redux store that lets you read the state, dispatch actions
 * and subscribe to changes.
 */
function createStore(reducer, preloadedState, enhancer) {
  var _ref2;

  if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
    enhancer = preloadedState;
    preloadedState = undefined;
  }

  if (typeof enhancer !== 'undefined') {
    if (typeof enhancer !== 'function') {
      throw new Error('Expected the enhancer to be a function.');
    }

    return enhancer(createStore)(reducer, preloadedState);
  }

  if (typeof reducer !== 'function') {
    throw new Error('Expected the reducer to be a function.');
  }

  var currentReducer = reducer;
  var currentState = preloadedState;
  var currentListeners = [];
  var nextListeners = currentListeners;
  var isDispatching = false;

  function ensureCanMutateNextListeners() {
    if (nextListeners === currentListeners) {
      nextListeners = currentListeners.slice();
    }
  }

  /**
   * Reads the state tree managed by the store.
   *
   * @returns {any} The current state tree of your application.
   */
  function getState() {
    return currentState;
  }

  /**
   * Adds a change listener. It will be called any time an action is dispatched,
   * and some part of the state tree may potentially have changed. You may then
   * call `getState()` to read the current state tree inside the callback.
   *
   * You may call `dispatch()` from a change listener, with the following
   * caveats:
   *
   * 1. The subscriptions are snapshotted just before every `dispatch()` call.
   * If you subscribe or unsubscribe while the listeners are being invoked, this
   * will not have any effect on the `dispatch()` that is currently in progress.
   * However, the next `dispatch()` call, whether nested or not, will use a more
   * recent snapshot of the subscription list.
   *
   * 2. The listener should not expect to see all state changes, as the state
   * might have been updated multiple times during a nested `dispatch()` before
   * the listener is called. It is, however, guaranteed that all subscribers
   * registered before the `dispatch()` started will be called with the latest
   * state by the time it exits.
   *
   * @param {Function} listener A callback to be invoked on every dispatch.
   * @returns {Function} A function to remove this change listener.
   */
  function subscribe(listener) {
    if (typeof listener !== 'function') {
      throw new Error('Expected listener to be a function.');
    }

    var isSubscribed = true;

    ensureCanMutateNextListeners();
    nextListeners.push(listener);

    return function unsubscribe() {
      if (!isSubscribed) {
        return;
      }

      isSubscribed = false;

      ensureCanMutateNextListeners();
      var index = nextListeners.indexOf(listener);
      nextListeners.splice(index, 1);
    };
  }

  /**
   * Dispatches an action. It is the only way to trigger a state change.
   *
   * The `reducer` function, used to create the store, will be called with the
   * current state tree and the given `action`. Its return value will
   * be considered the **next** state of the tree, and the change listeners
   * will be notified.
   *
   * The base implementation only supports plain object actions. If you want to
   * dispatch a Promise, an Observable, a thunk, or something else, you need to
   * wrap your store creating function into the corresponding middleware. For
   * example, see the documentation for the `redux-thunk` package. Even the
   * middleware will eventually dispatch plain object actions using this method.
   *
   * @param {Object} action A plain object representing “what changed”. It is
   * a good idea to keep actions serializable so you can record and replay user
   * sessions, or use the time travelling `redux-devtools`. An action must have
   * a `type` property which may not be `undefined`. It is a good idea to use
   * string constants for action types.
   *
   * @returns {Object} For convenience, the same action object you dispatched.
   *
   * Note that, if you use a custom middleware, it may wrap `dispatch()` to
   * return something else (for example, a Promise you can await).
   */
  function dispatch(action) {
    if (!(0, _isPlainObject2.default)(action)) {
      throw new Error('Actions must be plain objects. ' + 'Use custom middleware for async actions.');
    }

    if (typeof action.type === 'undefined') {
      throw new Error('Actions may not have an undefined "type" property. ' + 'Have you misspelled a constant?');
    }

    if (isDispatching) {
      throw new Error('Reducers may not dispatch actions.');
    }

    try {
      isDispatching = true;
      currentState = currentReducer(currentState, action);
    } finally {
      isDispatching = false;
    }

    var listeners = currentListeners = nextListeners;
    for (var i = 0; i < listeners.length; i++) {
      listeners[i]();
    }

    return action;
  }

  /**
   * Replaces the reducer currently used by the store to calculate the state.
   *
   * You might need this if your app implements code splitting and you want to
   * load some of the reducers dynamically. You might also need this if you
   * implement a hot reloading mechanism for Redux.
   *
   * @param {Function} nextReducer The reducer for the store to use instead.
   * @returns {void}
   */
  function replaceReducer(nextReducer) {
    if (typeof nextReducer !== 'function') {
      throw new Error('Expected the nextReducer to be a function.');
    }

    currentReducer = nextReducer;
    dispatch({ type: ActionTypes.INIT });
  }

  /**
   * Interoperability point for observable/reactive libraries.
   * @returns {observable} A minimal observable of state changes.
   * For more information, see the observable proposal:
   * https://github.com/zenparsing/es-observable
   */
  function observable() {
    var _ref;

    var outerSubscribe = subscribe;
    return _ref = {
      /**
       * The minimal observable subscription method.
       * @param {Object} observer Any object that can be used as an observer.
       * The observer object should have a `next` method.
       * @returns {subscription} An object with an `unsubscribe` method that can
       * be used to unsubscribe the observable from the store, and prevent further
       * emission of values from the observable.
       */
      subscribe: function subscribe(observer) {
        if ((typeof observer === 'undefined' ? 'undefined' : _typeof(observer)) !== 'object') {
          throw new TypeError('Expected the observer to be an object.');
        }

        function observeState() {
          if (observer.next) {
            observer.next(getState());
          }
        }

        observeState();
        var unsubscribe = outerSubscribe(observeState);
        return { unsubscribe: unsubscribe };
      }
    }, _ref[_symbolObservable2.default] = function () {
      return this;
    }, _ref;
  }

  // When a store is created, an "INIT" action is dispatched so that every
  // reducer returns their initial state. This effectively populates
  // the initial state tree.
  dispatch({ type: ActionTypes.INIT });

  return _ref2 = {
    dispatch: dispatch,
    subscribe: subscribe,
    getState: getState,
    replaceReducer: replaceReducer
  }, _ref2[_symbolObservable2.default] = observable, _ref2;
}

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = warning;
/**
 * Prints a warning in the console if it exists.
 *
 * @param {String} message The warning message.
 * @returns {void}
 */
function warning(message) {
  /* eslint-disable no-console */
  if (typeof console !== 'undefined' && typeof console.error === 'function') {
    console.error(message);
  }
  /* eslint-enable no-console */
  try {
    // This error was thrown as a convenience so that if you enable
    // "break on all exceptions" in your console,
    // it would pause the execution at this line.
    throw new Error(message);
    /* eslint-disable no-empty */
  } catch (e) {}
  /* eslint-enable no-empty */
}

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var g;

// This works in non-strict mode
g = function () {
	return this;
}();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1, eval)("this");
} catch (e) {
	// This works if the window reference is available
	if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

webpackJsonp([0], {

    /***/1:
    /***/function _(module, exports, __webpack_require__) {

        "use strict";

        Object.defineProperty(exports, "__esModule", {
            value: true
        });
        exports.findDOMNode = exports.render = undefined;

        var _createClass = function () {
            function defineProperties(target, props) {
                for (var i = 0; i < props.length; i++) {
                    var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
                }
            }return function (Constructor, protoProps, staticProps) {
                if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
            };
        }();

        var _typeof = typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol" ? function (obj) {
            return typeof obj === "undefined" ? "undefined" : _typeof2(obj);
        } : function (obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === "undefined" ? "undefined" : _typeof2(obj);
        };

        var _react = __webpack_require__(0);

        var _react2 = _interopRequireDefault(_react);

        function _interopRequireDefault(obj) {
            return obj && obj.__esModule ? obj : { default: obj };
        }

        function _possibleConstructorReturn(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }return call && ((typeof call === "undefined" ? "undefined" : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
        }

        function _inherits(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof2(superClass)));
            }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        }

        function _classCallCheck(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        }

        var internalInstanceKey = '__reactInternalInstance$' + Math.random().toString(36).slice(2);

        var showLog = 0;

        var number2pxKeys = {
            x: 1,
            y: 1,
            z: 1,
            borderRadius: 1,
            borderBottomLeftRadius: 1,
            borderBottomRightRadius: 1,
            borderTopLeftRadius: 1,
            borderTopRightRadius: 1,
            lineHeight: 1,
            width: 1,
            height: 1,
            left: 1,
            top: 1,
            right: 1,
            bottom: 1,
            margin: 1,
            marginTop: 1,
            marginLeft: 1,
            marginRight: 1,
            marginBottom: 1,
            padding: 1,
            paddingLeft: 1,
            paddingTop: 1,
            paddingRight: 1,
            paddingBottom: 1,
            backgroundPosition: 1,
            backgroundPosition_y: 1
        };
        var firstRender = true;

        function regiterAttr(name, type, cb) {
            if (type === "dom") {
                attrMap.dom[name] = cb;
            } else if (type === "component") {
                attrMap.component[name] = cb;
            } else {
                attrMap.dom[name] = cb;
                attrMap.component[name] = cb;
            }
        }
        var attrMap = {
            dom: {},
            component: {}
        };

        function isText(key) {
            return typeof key === "string" || typeof key === "number";
        }

        regiterAttr("dangerouslySetInnerHTML", "dom", function (value, previousValue, dom) {
            dom.innerHTML = value.__html;
        });

        regiterAttr("style", "dom", function (value, previousValue, dom) {

            if (value && previousValue && equals(value, previousValue)) {
                return;
            }

            if (!value) {
                dom.removeAttribute("style");
            }
            value = Object.assign({}, value);
            if (typeof value === "string" && value) {
                dom.setAttribute("style", value);
            } else if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object' && value) {
                if (Object.keys(value).length) {
                    dom.setAttribute("style", "");
                    for (var i in value) {
                        if (number2pxKeys[i]) {
                            if (typeof value[i] === 'number') {
                                value[i] += 'px';
                            }
                        }
                    }
                    Object.assign(dom.style, value);
                }
            }
        });
        regiterAttr("className", "dom", function (value, previousValue, dom) {
            if (!value) {
                dom.setAttribute("class", "");
            } else {
                dom.setAttribute("class", value);
            }
        });
        regiterAttr("defaultValue", "dom", function (value, previousValue, dom) {
            if (dom.tagName !== 'INPUT') {
                return;
            }
            if (!dom[internalInstanceKey].usedDefaultValue) {
                dom.value = value;
            }
            dom[internalInstanceKey].usedDefaultValue = true;
            //    dom.setAttribute("class", value);
        });

        regiterAttr("key", "", function () {});
        regiterAttr("children", "", function () {});

        var events = [];

        function firstToUpperCase(word) {
            return word[0].toUpperCase() + word.slice(1);
        }

        function addEvent(eventName) {
            var match = eventName.match(/^on(.+)/);
            if (match) {
                var event = match[1];
                var reg = /((?:mouse)|(?:key)|(?:touch))(\w+)$/;
                var match2 = event.match(reg);

                if (match2) {
                    var reactEvent = 'on' + firstToUpperCase(match2[1]) + firstToUpperCase(match2[2]);
                    events.push({
                        event: match[1],
                        reactEvent: reactEvent
                    });
                } else {
                    var _reactEvent = 'on' + firstToUpperCase(event);
                    events.push({
                        event: match[1],
                        reactEvent: _reactEvent
                    });
                }
            }
        }
        for (var property in document.documentElement) {
            addEvent(property);
        }
        addEvent('ontap');
        addEvent('ontouchstart');
        addEvent('ontouchend');
        addEvent('ontouchmove');

        function onReactEvent(value, previousValue, dom, wrapper, attr) {
            var eventName = attr.match(/on(\w+)$/i)[1].toLowerCase();
            if (wrapper.eventMap[eventName]) {
                dom.removeEventListener(eventName, wrapper.eventMap[eventName]);
                delete wrapper.eventMap[eventName];
            }
            var listener = function listener(e) {

                e.nativeEvent = e;
                value(e);
            };
            dom.addEventListener(eventName, listener);
            wrapper.eventMap[eventName] = listener;
        }

        events.forEach(function (_ref) {
            var event = _ref.event,
                reactEvent = _ref.reactEvent;

            regiterAttr(reactEvent, 'dom', onReactEvent);
        });

        function insertAfter(newNode, referenceNode) {
            referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
        }

        function equals(x, y) {
            if (x === y) {
                return true;
            }
            if (!((typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x && (typeof y === 'undefined' ? 'undefined' : _typeof(y)) === 'object' && y)) {
                if (x !== y) {
                    return;
                }
            }

            for (var p in y) {
                if (p === "_owner" || p === "_refowner") {
                    continue;
                }
                if (_typeof(y[p]) !== _typeof(x[p])) {
                    return false;
                }
                switch (_typeof(y[p])) {
                    case 'object':
                        if (y[p] instanceof Date) {
                            if (y[p].getTime() !== x[p].getTime()) {
                                return false;
                            }
                        }
                        if (!equals(x[p], y[p])) {
                            return false;
                        };
                        break;
                    case 'function':
                        if (typeof x[p] == 'undefined' || p != 'equals') {
                            return false;
                        };
                        break;
                    default:
                        if (y[p] != x[p]) {
                            return false;
                        }
                }
            }

            for (var _p in x) {
                if (typeof y[_p] == 'undefined') {
                    return false;
                }
            }

            return true;
        }
        var ccc = 1;

        function getChildren(parent, children) {
            var old = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
            var owner = arguments[3];
            var context = arguments[4];
            var instance = arguments[5];

            if (showLog) {
                console.log('oldchildren', old);
                console.log('getChildren', parent, children, old, owner, context);
            }
            ccc++;
            var cc = ccc;

            if (!children) {
                return {
                    children: {}
                };
            }

            var _renderedChildren = {};

            var prependParent = true;
            var lastNode = void 0;

            function append(node, key) {

                if (prependParent && !lastNode) {
                    if (parent.firstChild) {
                        parent.insertBefore(node, parent.firstChild);
                    } else {
                        parent.appendChild(node);
                    }

                    lastNode = node;
                    prependParent = false;
                } else {
                    insertAfter(node, lastNode);
                    lastNode = node;
                }
            }

            function handleChild() {
                var child = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
                var i = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;

                function recursion(child, preKey, index) {
                    var key = '' + preKey + index;
                    if (isText(child)) {
                        //text node
                        var value = void 0;
                        var node = void 0;
                        if (!old[key]) {
                            node = document.createTextNode(child);
                            append(node, key);
                        } else {
                            lastNode = old[key]._hostNode;
                            node = lastNode;
                            if (old[key]._hostNode.textContent !== child) {
                                old[key]._hostNode.textContent = child;
                            }
                        }
                        _renderedChildren[key] = new ReactDOMTextComponent(child, node, owner);
                    } else if (Array.isArray(child)) {
                        //array 
                        child.forEach(function (ele, j) {
                            recursion(ele, key + ':', j);
                        });
                    } else {
                        if (child && isText(child.key)) {
                            key = preKey + '$' + child.key;
                        }
                        if (!old[key]) {
                            var dom = _create(child, {
                                owner: owner,
                                context: context
                            });
                            append(dom, key);
                            _renderedChildren[key] = findOwnerUntil(dom[internalInstanceKey], owner);
                        } else {
                            if (old[key] instanceof ReactCompositeComponentWrapper) {

                                if (child && old[key]._currentElement.type === child.type) {
                                    lastNode = old[key].updateProps(child.props, context);
                                } else {
                                    lastNode = old[key]._hostNode;
                                    if (showLog) {
                                        console.log('replace child', cc, old[key]);
                                    }
                                    //                            if (!child) {
                                    old[key].remove();
                                    //                            }
                                    var _dom = _create(child, {
                                        owner: owner,
                                        context: context
                                    });

                                    lastNode.parentElement.replaceChild(_dom, lastNode);
                                    lastNode = _dom;
                                }
                            } else {
                                lastNode = update(old[key]._hostNode, child, {
                                    context: context
                                });
                            }

                            _renderedChildren[key] = findOwnerUntil(lastNode[internalInstanceKey], owner);
                        }
                    }
                }
                recursion(child, ".", i);
            }
            if (Array.isArray(children)) {
                children.forEach(handleChild);
            } else {
                handleChild(children);
            }
            if (showLog) {

                if (Object.keys(_renderedChildren).length == 2) {
                    console.log('_renderedChildren', _renderedChildren, instance, arguments);
                }
            }

            return {
                children: _renderedChildren
            };
        }

        function init() {}

        var StatelessComponent = function StatelessComponent(type) {
            _classCallCheck(this, StatelessComponent);

            this.type = type;
            this.refs = {};
            this.render = function (props, context) {
                return type(props, context);
            };
        };

        var renderingComponentStack = _react2.default.renderingComponentStack;
        var globalAfterRenderQueue = [];

        function handleQueue(queue0) {
            var queue = queue0.slice();
            queue0.length = 0;
            queue.forEach(function (func) {
                func();
            });
        }

        function asyncSetState() {
            var mode = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;

            _react2.default.isAsyncSetState = mode;
        }

        var ReactWrapper = function () {
            function ReactWrapper(element, owner) {
                _classCallCheck(this, ReactWrapper);

                if ((typeof element === 'undefined' ? 'undefined' : _typeof(element)) === 'object' && element) {
                    this._currentElement = Object.assign({}, element);
                }

                if (owner && this._currentElement) {
                    this._currentElement._owner = owner;
                }
                if (typeof this._currentElement === 'string') {
                    this.owner = owner;
                }
            }

            _createClass(ReactWrapper, [{
                key: 'bindDom',
                value: function bindDom(dom) {
                    //not on composite
                    this._hostNode = dom;
                    this._instance = dom;
                    dom[internalInstanceKey] = this;
                }
            }, {
                key: 'refAttach',
                value: function refAttach(ref) {

                    if (!ref && !this.previousRef) {
                        return;
                    }

                    var owner = this._currentElement._refowner || this._currentElement._owner;
                    if (!owner && typeof ref === 'string') {

                        console.error(this, ref, this.previousRef);
                        throw "no owner ref";
                        return;
                    }

                    if (ref !== this.previousRef) {
                        if (typeof this.previousRef === 'string') {
                            delete owner._instance.refs[this.previousRef];
                        }
                        if (typeof ref === 'string') {
                            owner._instance.refs[ref] = this._instance;
                        } else if (typeof ref === 'function') {
                            ref.call(owner ? owner._instance : undefined, this._instance);
                        }
                        this.previousRef = ref;
                    }
                }
            }]);

            return ReactWrapper;
        }();

        var ReactCompositeComponentWrapper = function (_ReactWrapper) {
            _inherits(ReactCompositeComponentWrapper, _ReactWrapper);

            function ReactCompositeComponentWrapper(type, element, owner) {
                var _ret;

                var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

                _classCallCheck(this, ReactCompositeComponentWrapper);

                var _this = _possibleConstructorReturn(this, (ReactCompositeComponentWrapper.__proto__ || Object.getPrototypeOf(ReactCompositeComponentWrapper)).call(this, element, owner));

                _this.isMounted = true;
                _this.jsxType = type;

                _this.assignDefaultProps(element.props);

                if (isStateLess(type)) {
                    _this._instance = new StatelessComponent(type, context);
                    _this.type = "stateless";
                } else {
                    _this.type = "component";
                }

                var instance = void 0;
                Object.assign(_this, {
                    stateQueue: [],
                    afterRenderQueue: []
                });
                if (isReactComponent(type)) {
                    instance = new type(element.props, context);

                    if (type.statics) {
                        for (var i in type.statics) {
                            type[i] = type.statics[i];
                        }
                    }
                    if (type.getInitialState) {
                        instance.state = type.getInitialState.call(instance);
                    }

                    if (type.getDefaultProps) {
                        //deprecated
                        type.defaultProps = type.getDefaultProps.call(instance);
                        _this.assignDefaultProps(element.props);
                        instance.props = element.props;
                    }

                    instance.context = context;
                    _this._instance = instance;
                    instance._reactInternalInstance = _this;
                    if (!instance.state) {
                        instance.state = {};
                    }

                    for (var attrName in element.props) {
                        if (attrMap.component[attrName]) {
                            attrMap.component[attrName](element.props[attrName], undefined, instance, _this, attrName);
                        }
                    }
                }

                if (isReactComponent(type)) {
                    if (instance.componentDidMount) {
                        globalAfterRenderQueue.push(_this.didMount.bind(_this));
                    }
                }
                var dom = _this.create(element.props, context);

                return _ret = dom, _possibleConstructorReturn(_this, _ret);
            }

            _createClass(ReactCompositeComponentWrapper, [{
                key: 'didMount',
                value: function didMount() {
                    if (!this.isMounted) {
                        return;
                    }
                    asyncSetState();
                    this._instance.componentDidMount();
                    this.handleStateQueue(this._instance.props, true);
                }
            }, {
                key: 'assignDefaultProps',
                value: function assignDefaultProps(props) {
                    if (this.jsxType.defaultProps) {
                        for (var i in this.jsxType.defaultProps) {
                            if (props[i] === undefined) {
                                props[i] = this.jsxType.defaultProps[i];
                            }
                        }
                    }
                }
            }, {
                key: 'getContext',
                value: function getContext() {
                    if (this._instance.getChildContext) {
                        var context = this._instance.getChildContext();
                        return Object.assign({}, this._context, context);
                    } else {
                        return this._context;
                    }
                }
            }, {
                key: 'getSelfContext',
                value: function getSelfContext() {
                    this._context = this._context || {};
                    var contextThis = {};
                    if (this._currentElement.type.contextTypes) {
                        for (var i in this._currentElement.type.contextTypes) {
                            contextThis[i] = this._context[i];
                        }
                    }
                    return contextThis;
                }
            }, {
                key: 'updateSelfContext',
                value: function updateSelfContext() {
                    this._instance.context = this.getSelfContext();
                }
            }, {
                key: 'create',
                value: function create(props, context) {

                    var dom = void 0;
                    var element = void 0;

                    this._context = context;
                    this.updateSelfContext();
                    if (this._instance.componentWillMount) {
                        asyncSetState();
                        this._instance.componentWillMount();
                        this.handleStateQueue(props);
                    }

                    var childContext = this.getContext();

                    var that = this;
                    renderingComponentStack.push(this);
                    element = this.render();

                    dom = _create(element, {
                        owner: this,
                        context: childContext
                    });
                    renderingComponentStack.pop();
                    if (!dom) {
                        console.warn('wrong hostNode', element, this, dom);
                    }
                    this._hostNode = dom;
                    this.refAttach(this._currentElement.ref);
                    this.handleAfterRenderQueue();
                    return dom;
                }
            }, {
                key: 'updateProps',
                value: function updateProps(nextProps, nextRawContext) {
                    if (showLog) {
                        console.log('updateProps', nextProps, this);
                    }
                    this._context = nextRawContext;
                    this.assignDefaultProps(nextProps);
                    var nextContext = this.getSelfContext();
                    if (this._instance.componentWillReceiveProps) {
                        asyncSetState();

                        this._instance.componentWillReceiveProps(nextProps, nextContext);
                        this.handleStateQueue(nextProps);
                    }

                    var instance = this._instance;

                    return this.doUpdate(this._instance.state, nextProps, nextContext);
                }
            }, {
                key: 'handleAfterRenderQueue',
                value: function handleAfterRenderQueue() {
                    var _this2 = this;

                    this.afterRenderQueue.forEach(function (cb) {
                        cb(_this2._instance);
                    });
                    this.afterRenderQueue.length = 0;
                }
            }, {
                key: 'render',
                value: function render() {
                    if (showLog) {
                        console.log("render", this._instance);

                        console.log('renderingComponentStack', renderingComponentStack);
                    }
                    var element = void 0;
                    if (this.type === "stateless") {
                        var props = this._currentElement.props;
                        var context = this.getContext();
                        if (showLog) {
                            console.log('render stateless', props, context, this._instance.render);
                        }
                        element = this._instance.render.call(undefined, props, context);
                    } else {

                        element = this._instance.render();
                    }

                    if (Array.isArray(element)) {
                        element = element[0];
                    }
                    if (showLog) {
                        console.log("render end", element);
                    }
                    return element;
                }
            }, {
                key: 'remove',
                value: function remove() {
                    this.isMounted = false;
                    if (this._instance.componentWillUnmount) {
                        asyncSetState();
                        this._instance.componentWillUnmount();
                        this.handleStateQueue(this._instance.props);
                    }
                }
            }, {
                key: 'handleStateQueue',
                value: function handleStateQueue(props, render) {
                    asyncSetState(false);
                    var index = ReactCompositeComponentWrapper.dirtyQueue.indexOf(this);
                    if (index !== -1) {
                        ReactCompositeComponentWrapper.dirtyQueue.splice(index, 1);
                    }
                    var instance = this._instance;
                    var oldState = instance.state;
                    if (!this.stateQueue.length) {
                        return;
                    }
                    var cbList = [];
                    var stateList = [];

                    this.stateQueue.forEach(function (_ref2) {
                        var updater = _ref2.updater,
                            cb = _ref2.cb;

                        if (cb) {
                            cbList.push(cb);
                        }
                        if (typeof updater === 'function') {
                            stateList.push(updater(oldState, props));
                        } else {
                            stateList.push(updater);
                        }
                    });
                    var state = {};
                    Object.assign(state, oldState);
                    stateList.forEach(function (stateThis) {
                        Object.assign(state, stateThis);
                    });

                    this.stateQueue.length = 0;

                    instance.state = state;
                    if (render) {
                        this.doUpdate(state, this._instance.props, this._instance.context);
                    }
                    cbList.forEach(function (cb) {
                        cb.call(instance);
                    });
                }
            }, {
                key: 'forceUpdate',
                value: function forceUpdate(state, props) {
                    this.doUpdate(state, props, this.getSelfContext());
                }
            }, {
                key: 'addToDirty',
                value: function addToDirty(wrapper) {
                    if (ReactCompositeComponentWrapper.dirtyQueue.indexOf(this) === -1) {
                        ReactCompositeComponentWrapper.dirtyQueue.push(this);
                    }
                }
            }, {
                key: 'doUpdate',
                value: function doUpdate(nextState, nextProps, nextContext) {
                    var instance = this._instance;
                    var result = void 0;
                    this.getSelfContext();

                    var shouldRender = void 0;
                    if (instance.shouldComponentUpdate) {
                        shouldRender = instance.shouldComponentUpdate(nextProps, nextState, nextContext);
                    } else {
                        shouldRender = true;
                    }

                    if (shouldRender) {
                        var dom = this._hostNode;

                        if (instance.componentWillUpdate) {
                            asyncSetState();
                            instance.componentWillUpdate(nextProps, nextState, nextContext);
                            this.handleStateQueue(nextProps);
                        }

                        var prevState = instance.state;
                        var prevProps = instance.props;
                        var prevContext = instance.context;

                        instance.state = nextState;
                        if (nextProps !== prevProps) {
                            if (this.type === "component") {
                                for (var attrName in nextProps) {
                                    //not on stateless
                                    if (nextProps[attrName] !== this._instance.props[attrName] && attrMap.component[attrName]) {
                                        attrMap.component[attrName](nextProps[attrName], this._instance.props[attrName], dom, this, attrName);
                                    }
                                }
                            }
                            instance.props = nextProps;
                            this._currentElement.props = nextProps;
                        }
                        instance.context = nextContext;

                        renderingComponentStack.push(this);
                        var element = this.render();

                        result = update(dom, element, {
                            componentRef: instance,
                            context: this.getContext()
                        });
                        renderingComponentStack.pop();
                        this._hostNode = result;

                        this.handleAfterRenderQueue();

                        if (instance.componentDidUpdate) {
                            asyncSetState();
                            instance.componentDidUpdate(prevProps, prevState, prevContext);
                            this.handleStateQueue(instance.props, true);
                        }
                    } else {
                        instance.state = nextState;
                        instance.props = nextProps;
                        result = this._hostNode;
                    }
                    ReactCompositeComponentWrapper.afterUpdate();
                    return result;
                }
            }], [{
                key: 'handleDirty',
                value: function handleDirty() {
                    ReactCompositeComponentWrapper.dirtyQueue.forEach(function (wrapper) {
                        wrapper.handleStateQueue(wrapper._instance.props, true);
                    });
                }
            }, {
                key: 'afterUpdate',
                value: function afterUpdate() {
                    if (!renderingComponentStack.length && !firstRender) {
                        handleQueue(globalAfterRenderQueue);
                        ReactCompositeComponentWrapper.handleDirty();
                    }
                }
            }]);

            return ReactCompositeComponentWrapper;
        }(ReactWrapper);

        ReactCompositeComponentWrapper.dirtyQueue = [];

        var ReactDOMComponent = function (_ReactWrapper2) {
            _inherits(ReactDOMComponent, _ReactWrapper2);

            function ReactDOMComponent(type, element, owner) {
                _classCallCheck(this, ReactDOMComponent);

                var _this3 = _possibleConstructorReturn(this, (ReactDOMComponent.__proto__ || Object.getPrototypeOf(ReactDOMComponent)).call(this, element, owner));

                var dom = document.createElement(type);
                _this3.bindDom(dom);

                if (type === 'input') {
                    dom.addEventListener("input", function (e) {
                        var target = e.target;
                        var instance = target[internalInstanceKey];
                        var element = instance._currentElement;
                        if (target.value !== instance.previousOnchangeValue) {
                            instance.previousOnchangeValue = target.value;
                            if (element.props.onChange) {
                                element.props.onChange.call(element, e);
                            }
                            afterCallback.push(function () {

                                var propsValue = target[internalInstanceKey]._currentElement.props.value;

                                if (propsValue !== undefined && propsValue !== target.value) {

                                    target.value = propsValue;
                                    instance.previousOnchangeValue = propsValue;
                                }
                            });
                            execAfterCallback();
                        }
                    });
                }
                Object.assign(_this3, {
                    //            stateQueue: [],
                    afterRenderQueue: []
                });
                _this3.eventMap = {};

                for (var attrName in element.props) {
                    var value = element.props[attrName];
                    if (attrMap.dom[attrName]) {
                        attrMap.dom[attrName](value, undefined, dom, _this3, attrName);
                    } else {
                        if (value) {
                            dom.setAttribute(attrName, value);
                        } else {
                            dom.removeAttribute(attrName);
                        }
                    }
                }
                _this3.refAttach(element.ref);
                handleQueue(_this3.afterRenderQueue);
                return _this3;
            }

            _createClass(ReactDOMComponent, [{
                key: 'remove',
                value: function remove() {}
            }]);

            return ReactDOMComponent;
        }(ReactWrapper);

        var ReactDOMTextComponent = function (_ReactWrapper3) {
            _inherits(ReactDOMTextComponent, _ReactWrapper3);

            function ReactDOMTextComponent(element, dom, owner) {
                _classCallCheck(this, ReactDOMTextComponent);

                var _this4 = _possibleConstructorReturn(this, (ReactDOMTextComponent.__proto__ || Object.getPrototypeOf(ReactDOMTextComponent)).call(this, element, owner));

                _this4.bindDom(dom);
                return _this4;
            }

            return ReactDOMTextComponent;
        }(ReactWrapper);

        var afterCallback = [];

        function execAfterCallback() {
            afterCallback.forEach(function (cb) {
                cb();
            });
            afterCallback.length = 0;
        }

        function _create(element) {
            var _ref3 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                owner = _ref3.owner,
                context = _ref3.context;

            if (showLog) {
                console.log('create', element, {
                    owner: owner,
                    context: context
                });
            }

            if (!_react2.default.isValidElement(element)) {
                //comment
                var _dom2 = document.createComment("react-empty");
                _dom2[internalInstanceKey] = {
                    _currentElement: element,
                    _hostNode: _dom2
                };
                return _dom2;
            }

            var type = element.type,
                props = element.props;

            if (isComponent(type)) {
                return new ReactCompositeComponentWrapper(type, element, owner, context);
            }

            //normal dom
            var wrapper = new ReactDOMComponent(type, element, owner);
            var dom = wrapper._hostNode;

            if (props.children) {
                var result = getChildren(dom, props.children, {}, owner, context, wrapper);
                wrapper._renderedChildren = result.children;
            }
            return dom;
        }

        function isComponent(type) {
            return typeof type === "function";
        }

        function isStateLess(type) {
            return isComponent(type) && !isReactComponent(type);
        }

        function isReactComponent(type) {

            return type.prototype instanceof _react2.default.Component || type.prototype.render;
        }

        function findOwnerUntil(owner, top) {
            if (!owner) {
                return;
            }
            if (!owner._currentElement) {
                return owner;
            }
            while (owner._currentElement._owner && owner._currentElement._owner !== top) {
                owner = owner._currentElement._owner;
            }
            return owner;
        }

        function findTopOwner(owner) {
            if (!owner) {
                return;
            }
            while (owner._currentElement._owner) {
                owner = owner._currentElement._owner;
            }
            return owner;
        }

        function update(dom, element) {
            var _ref4 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
                componentRef = _ref4.componentRef,
                context = _ref4.context;

            if (showLog) {
                console.log('update', dom, element, context, componentRef);
            }
            var forceRender = false;
            if (!element && dom) {
                //dom to comment
                if (showLog) {
                    console.log('dom to comment');
                }
                var comment = document.createComment("react-empty: ?");
                dom.parentElement && dom.parentElement.replaceChild(comment, dom);
                comment[internalInstanceKey] = dom[internalInstanceKey];
                return comment;
            }

            if (dom.nodeType === 8 && element) {
                //comment, force render
                forceRender = true;
            }
            var wrapper = dom[internalInstanceKey];
            var element0 = wrapper._currentElement;

            var ownerType = void 0;
            var owner = void 0;

            if (_react2.default.isValidElement(element0)) {
                owner = element0._owner;
            } else {}

            var isHost = false;
            if (owner) {
                isHost = owner._hostNode === dom;
                ownerType = owner._currentElement.type;
            }

            function createAndReplace() {
                dom[internalInstanceKey].remove && dom[internalInstanceKey].remove();
                var newDom = _create(element, {
                    context: context,
                    owner: (componentRef || {})._reactInternalInstance
                });
                if (dom.parentElement) {
                    dom.parentElement.replaceChild(newDom, dom);
                }
                return newDom;
            }
            if (isHost) {
                if (componentRef) {
                    var _owner = element0._owner;
                    var lastOwner = void 0;
                    var found = void 0;
                    while (1) {
                        if (_owner && _owner._instance === componentRef) {
                            found = true;
                            break;
                        }
                        lastOwner = _owner;
                        if (_owner._currentElement._owner) {
                            _owner = _owner._currentElement._owner;
                        } else {
                            break;
                        }
                    }

                    if (found) {
                        if (lastOwner) {
                            return lastOwner.updateProps(element.props, context);
                        } else {
                            //                    return createAndReplace();
                        }
                    } else {
                        return createAndReplace();
                    }
                } else if (element.type !== element0.type || forceRender) {
                    if (showLog) {
                        console.log("type changed", element.type, element0.type);
                    }
                    return createAndReplace();
                } else {}
            }

            if (forceRender || (typeof element0 === 'undefined' ? 'undefined' : _typeof(element0)) !== (typeof element === 'undefined' ? 'undefined' : _typeof(element))) {
                return createAndReplace();
            }

            if (_react2.default.isValidElement(element0) && _react2.default.isValidElement(element)) {
                if (element.type !== element0.type) {
                    return createAndReplace();
                }
            } else {
                if (element !== element0) {
                    return createAndReplace();
                }
            }

            if (isComponent(element.type)) {
                wrapper.refAttach(element.ref);
                wrapper._currentElement.ref = element.ref;
            }

            if (!equals(element0.props, element.props)) {
                //props changed        
                if (isComponent(element.type)) {
                    return owner.updateProps(element.props, context);
                } else {
                    //normal dom            
                    for (var attrName in element.props) {
                        var value = element.props[attrName];
                        var value0 = element0.props[attrName];
                        if (value0 !== value) {
                            //                    console.log("not");
                            if (attrMap.dom[attrName]) {
                                attrMap.dom[attrName](value, value0, dom, wrapper, attrName);
                            } else {
                                if (value) {
                                    dom.setAttribute(attrName, value);
                                } else {
                                    dom.removeAttribute(attrName);
                                }
                            }
                        }
                    }
                    element0.props = element.props;
                }
            }

            if (!isComponent(element.type)) {
                var oldChildren = wrapper._renderedChildren;

                var newChildren = getChildren(dom, element.props.children, oldChildren, owner, context).children;

                if (showLog) {
                    console.log('oldChildren', oldChildren);
                }
                for (var i in oldChildren) {
                    if (!newChildren[i] && oldChildren[i]) {

                        oldChildren[i].remove();
                        oldChildren[i]._hostNode.parentElement.removeChild(oldChildren[i]._hostNode);
                    }
                }

                wrapper._renderedChildren = newChildren;
            }

            return dom;
        }

        function render(element, target) {

            if (target.childNodes[0]) {
                update(target.childNodes[0], element);
            } else {
                var created = _create(element);

                created.setAttribute('data-reactroot', "");
                target.appendChild(created);
            }
            handleQueue(globalAfterRenderQueue);
            firstRender = false;
        }

        function findDOMNode(component) {
            console.log('component', this, component);
            if (component instanceof Node) {
                return component;
            }

            if (!component) {
                return;
            }
            return component._reactInternalInstance._hostNode;
        }
        var _exports = {
            render: render,
            findDOMNode: findDOMNode
        };
        exports.render = render;
        exports.findDOMNode = findDOMNode;
        exports.default = _exports;

        window.ReactDOM = _exports;

        /***/
    },

    /***/9:
    /***/function _(module, exports, __webpack_require__) {

        module.exports = __webpack_require__(1);

        /***/
    }

}, [9]);

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Footer = __webpack_require__(49);

var _Footer2 = _interopRequireDefault(_Footer);

var _AddTodo = __webpack_require__(53);

var _AddTodo2 = _interopRequireDefault(_AddTodo);

var _VisibleTodoList = __webpack_require__(55);

var _VisibleTodoList2 = _interopRequireDefault(_VisibleTodoList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var App = function App() {
  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(_AddTodo2.default, null),
    _react2.default.createElement(_VisibleTodoList2.default, null),
    _react2.default.createElement(_Footer2.default, null)
  );
};

exports.default = App;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _redux = __webpack_require__(3);

var _todos = __webpack_require__(57);

var _todos2 = _interopRequireDefault(_todos);

var _visibilityFilter = __webpack_require__(58);

var _visibilityFilter2 = _interopRequireDefault(_visibilityFilter);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var todoApp = (0, _redux.combineReducers)({
  todos: _todos2.default,
  visibilityFilter: _visibilityFilter2.default
});

exports.default = todoApp;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * 
 */

function makeEmptyFunction(arg) {
  return function () {
    return arg;
  };
}

/**
 * This function accepts and discards inputs; it has no side effects. This is
 * primarily useful idiomatically for overridable function endpoints which
 * always need to be callable, since JS lacks a null-call idiom ala Cocoa.
 */
var emptyFunction = function emptyFunction() {};

emptyFunction.thatReturns = makeEmptyFunction;
emptyFunction.thatReturnsFalse = makeEmptyFunction(false);
emptyFunction.thatReturnsTrue = makeEmptyFunction(true);
emptyFunction.thatReturnsNull = makeEmptyFunction(null);
emptyFunction.thatReturnsThis = function () {
  return this;
};
emptyFunction.thatReturnsArgument = function (arg) {
  return arg;
};

module.exports = emptyFunction;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var validateFormat = function validateFormat(format) {};

if (false) {
  validateFormat = function validateFormat(format) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  };
}

function invariant(condition, format, a, b, c, d, e, f) {
  validateFormat(format);

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
}

module.exports = invariant;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2015, Yahoo! Inc.
 * Copyrights licensed under the New BSD License. See the accompanying LICENSE file for terms.
 */


var REACT_STATICS = {
    childContextTypes: true,
    contextTypes: true,
    defaultProps: true,
    displayName: true,
    getDefaultProps: true,
    mixins: true,
    propTypes: true,
    type: true
};

var KNOWN_STATICS = {
    name: true,
    length: true,
    prototype: true,
    caller: true,
    arguments: true,
    arity: true
};

var isGetOwnPropertySymbolsAvailable = typeof Object.getOwnPropertySymbols === 'function';

module.exports = function hoistNonReactStatics(targetComponent, sourceComponent, customStatics) {
    if (typeof sourceComponent !== 'string') {
        // don't hoist over string (html) components
        var keys = Object.getOwnPropertyNames(sourceComponent);

        /* istanbul ignore else */
        if (isGetOwnPropertySymbolsAvailable) {
            keys = keys.concat(Object.getOwnPropertySymbols(sourceComponent));
        }

        for (var i = 0; i < keys.length; ++i) {
            if (!REACT_STATICS[keys[i]] && !KNOWN_STATICS[keys[i]] && (!customStatics || !customStatics[keys[i]])) {
                try {
                    targetComponent[keys[i]] = sourceComponent[keys[i]];
                } catch (error) {}
            }
        }
    }

    return targetComponent;
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Use invariant() to assert state which your program assumes to be true.
 *
 * Provide sprintf-style format (only %s is supported) and arguments
 * to provide information about what broke and what you were
 * expecting.
 *
 * The invariant message will be stripped in production, but the invariant
 * will remain to ensure logic does not differ in production.
 */

var invariant = function invariant(condition, format, a, b, c, d, e, f) {
  if (false) {
    if (format === undefined) {
      throw new Error('invariant requires an error message argument');
    }
  }

  if (!condition) {
    var error;
    if (format === undefined) {
      error = new Error('Minified exception occurred; use the non-minified dev environment ' + 'for the full error message and additional helpful warnings.');
    } else {
      var args = [a, b, c, d, e, f];
      var argIndex = 0;
      error = new Error(format.replace(/%s/g, function () {
        return args[argIndex++];
      }));
      error.name = 'Invariant Violation';
    }

    error.framesToPop = 1; // we don't care about invariant's own frame
    throw error;
  }
};

module.exports = invariant;

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__(7);

var _Symbol3 = _interopRequireDefault(_Symbol2);

var _getRawTag = __webpack_require__(26);

var _getRawTag2 = _interopRequireDefault(_getRawTag);

var _objectToString = __webpack_require__(27);

var _objectToString2 = _interopRequireDefault(_objectToString);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = _Symbol3.default ? _Symbol3.default.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return symToStringTag && symToStringTag in Object(value) ? (0, _getRawTag2.default)(value) : (0, _objectToString2.default)(value);
}

exports.default = baseGetTag;

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/** Detect free variable `global` from Node.js. */
var freeGlobal = (typeof global === 'undefined' ? 'undefined' : _typeof(global)) == 'object' && global && global.Object === Object && global;

exports.default = freeGlobal;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15)))

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _overArg = __webpack_require__(28);

var _overArg2 = _interopRequireDefault(_overArg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Built-in value references. */
var getPrototype = (0, _overArg2.default)(Object.getPrototypeOf, Object);

exports.default = getPrototype;

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _Symbol2 = __webpack_require__(7);

var _Symbol3 = _interopRequireDefault(_Symbol2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = _Symbol3.default ? _Symbol3.default.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

exports.default = getRawTag;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

exports.default = objectToString;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function (arg) {
    return func(transform(arg));
  };
}

exports.default = overArg;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _freeGlobal = __webpack_require__(24);

var _freeGlobal2 = _interopRequireDefault(_freeGlobal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/** Detect free variable `self`. */
var freeSelf = (typeof self === 'undefined' ? 'undefined' : _typeof(self)) == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = _freeGlobal2.default || freeSelf || Function('return this')();

exports.default = root;

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && (typeof value === 'undefined' ? 'undefined' : _typeof(value)) == 'object';
}

exports.default = isObjectLike;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var emptyFunction = __webpack_require__(19);
var invariant = __webpack_require__(20);
var ReactPropTypesSecret = __webpack_require__(32);

module.exports = function () {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    invariant(false, 'Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim
  };

  ReactPropTypes.checkPropTypes = emptyFunction;
  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2013-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.createProvider = createProvider;

var _react = __webpack_require__(0);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _PropTypes = __webpack_require__(10);

var _warning = __webpack_require__(5);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _possibleConstructorReturn(self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var didWarnAboutReceivingStore = false;
function warnAboutReceivingStore() {
  if (didWarnAboutReceivingStore) {
    return;
  }
  didWarnAboutReceivingStore = true;

  (0, _warning2.default)('<Provider> does not support changing `store` on the fly. ' + 'It is most likely that you see this error because you updated to ' + 'Redux 2.x and React Redux 2.x which no longer hot reload reducers ' + 'automatically. See https://github.com/reactjs/react-redux/releases/' + 'tag/v2.0.0 for the migration instructions.');
}

function createProvider() {
  var _Provider$childContex;

  var storeKey = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'store';
  var subKey = arguments[1];

  var subscriptionKey = subKey || storeKey + 'Subscription';

  var Provider = function (_Component) {
    _inherits(Provider, _Component);

    Provider.prototype.getChildContext = function getChildContext() {
      var _ref;

      return _ref = {}, _ref[storeKey] = this[storeKey], _ref[subscriptionKey] = null, _ref;
    };

    function Provider(props, context) {
      _classCallCheck(this, Provider);

      var _this = _possibleConstructorReturn(this, _Component.call(this, props, context));

      _this[storeKey] = props.store;
      return _this;
    }

    Provider.prototype.render = function render() {
      return _react.Children.only(this.props.children);
    };

    return Provider;
  }(_react.Component);

  if (false) {
    Provider.prototype.componentWillReceiveProps = function (nextProps) {
      if (this[storeKey] !== nextProps.store) {
        warnAboutReceivingStore();
      }
    };
  }

  Provider.propTypes = {
    store: _PropTypes.storeShape.isRequired,
    children: _propTypes2.default.element.isRequired
  };
  Provider.childContextTypes = (_Provider$childContex = {}, _Provider$childContex[storeKey] = _PropTypes.storeShape.isRequired, _Provider$childContex[subscriptionKey] = _PropTypes.subscriptionShape, _Provider$childContex);
  Provider.displayName = 'Provider';

  return Provider;
}

exports.default = createProvider();

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.createConnect = createConnect;

var _connectAdvanced = __webpack_require__(8);

var _connectAdvanced2 = _interopRequireDefault(_connectAdvanced);

var _shallowEqual = __webpack_require__(41);

var _shallowEqual2 = _interopRequireDefault(_shallowEqual);

var _mapDispatchToProps = __webpack_require__(35);

var _mapDispatchToProps2 = _interopRequireDefault(_mapDispatchToProps);

var _mapStateToProps = __webpack_require__(36);

var _mapStateToProps2 = _interopRequireDefault(_mapStateToProps);

var _mergeProps = __webpack_require__(37);

var _mergeProps2 = _interopRequireDefault(_mergeProps);

var _selectorFactory = __webpack_require__(38);

var _selectorFactory2 = _interopRequireDefault(_selectorFactory);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

/*
  connect is a facade over connectAdvanced. It turns its args into a compatible
  selectorFactory, which has the signature:

    (dispatch, options) => (nextState, nextOwnProps) => nextFinalProps
  
  connect passes its args to connectAdvanced as options, which will in turn pass them to
  selectorFactory each time a Connect component instance is instantiated or hot reloaded.

  selectorFactory returns a final props selector from its mapStateToProps,
  mapStateToPropsFactories, mapDispatchToProps, mapDispatchToPropsFactories, mergeProps,
  mergePropsFactories, and pure args.

  The resulting final props selector is called by the Connect component instance whenever
  it receives new props or store state.
 */

function match(arg, factories, name) {
  for (var i = factories.length - 1; i >= 0; i--) {
    var result = factories[i](arg);
    if (result) return result;
  }

  return function (dispatch, options) {
    throw new Error('Invalid value of type ' + (typeof arg === 'undefined' ? 'undefined' : _typeof(arg)) + ' for ' + name + ' argument when connecting component ' + options.wrappedComponentName + '.');
  };
}

function strictEqual(a, b) {
  return a === b;
}

// createConnect with default args builds the 'official' connect behavior. Calling it with
// different options opens up some testing and extensibility scenarios
function createConnect() {
  var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref$connectHOC = _ref.connectHOC,
      connectHOC = _ref$connectHOC === undefined ? _connectAdvanced2.default : _ref$connectHOC,
      _ref$mapStateToPropsF = _ref.mapStateToPropsFactories,
      mapStateToPropsFactories = _ref$mapStateToPropsF === undefined ? _mapStateToProps2.default : _ref$mapStateToPropsF,
      _ref$mapDispatchToPro = _ref.mapDispatchToPropsFactories,
      mapDispatchToPropsFactories = _ref$mapDispatchToPro === undefined ? _mapDispatchToProps2.default : _ref$mapDispatchToPro,
      _ref$mergePropsFactor = _ref.mergePropsFactories,
      mergePropsFactories = _ref$mergePropsFactor === undefined ? _mergeProps2.default : _ref$mergePropsFactor,
      _ref$selectorFactory = _ref.selectorFactory,
      selectorFactory = _ref$selectorFactory === undefined ? _selectorFactory2.default : _ref$selectorFactory;

  return function connect(mapStateToProps, mapDispatchToProps, mergeProps) {
    var _ref2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {},
        _ref2$pure = _ref2.pure,
        pure = _ref2$pure === undefined ? true : _ref2$pure,
        _ref2$areStatesEqual = _ref2.areStatesEqual,
        areStatesEqual = _ref2$areStatesEqual === undefined ? strictEqual : _ref2$areStatesEqual,
        _ref2$areOwnPropsEqua = _ref2.areOwnPropsEqual,
        areOwnPropsEqual = _ref2$areOwnPropsEqua === undefined ? _shallowEqual2.default : _ref2$areOwnPropsEqua,
        _ref2$areStatePropsEq = _ref2.areStatePropsEqual,
        areStatePropsEqual = _ref2$areStatePropsEq === undefined ? _shallowEqual2.default : _ref2$areStatePropsEq,
        _ref2$areMergedPropsE = _ref2.areMergedPropsEqual,
        areMergedPropsEqual = _ref2$areMergedPropsE === undefined ? _shallowEqual2.default : _ref2$areMergedPropsE,
        extraOptions = _objectWithoutProperties(_ref2, ['pure', 'areStatesEqual', 'areOwnPropsEqual', 'areStatePropsEqual', 'areMergedPropsEqual']);

    var initMapStateToProps = match(mapStateToProps, mapStateToPropsFactories, 'mapStateToProps');
    var initMapDispatchToProps = match(mapDispatchToProps, mapDispatchToPropsFactories, 'mapDispatchToProps');
    var initMergeProps = match(mergeProps, mergePropsFactories, 'mergeProps');

    return connectHOC(selectorFactory, _extends({
      // used in error messages
      methodName: 'connect',

      // used to compute Connect's displayName from the wrapped component's displayName.
      getDisplayName: function getDisplayName(name) {
        return 'Connect(' + name + ')';
      },

      // if mapStateToProps is falsy, the Connect component doesn't subscribe to store state changes
      shouldHandleStateChanges: Boolean(mapStateToProps),

      // passed through to selectorFactory
      initMapStateToProps: initMapStateToProps,
      initMapDispatchToProps: initMapDispatchToProps,
      initMergeProps: initMergeProps,
      pure: pure,
      areStatesEqual: areStatesEqual,
      areOwnPropsEqual: areOwnPropsEqual,
      areStatePropsEqual: areStatePropsEqual,
      areMergedPropsEqual: areMergedPropsEqual

    }, extraOptions));
  };
}

exports.default = createConnect();

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.whenMapDispatchToPropsIsFunction = whenMapDispatchToPropsIsFunction;
exports.whenMapDispatchToPropsIsMissing = whenMapDispatchToPropsIsMissing;
exports.whenMapDispatchToPropsIsObject = whenMapDispatchToPropsIsObject;

var _redux = __webpack_require__(3);

var _wrapMapToProps = __webpack_require__(9);

function whenMapDispatchToPropsIsFunction(mapDispatchToProps) {
  return typeof mapDispatchToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapDispatchToProps, 'mapDispatchToProps') : undefined;
}

function whenMapDispatchToPropsIsMissing(mapDispatchToProps) {
  return !mapDispatchToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
    return { dispatch: dispatch };
  }) : undefined;
}

function whenMapDispatchToPropsIsObject(mapDispatchToProps) {
  return mapDispatchToProps && (typeof mapDispatchToProps === 'undefined' ? 'undefined' : _typeof(mapDispatchToProps)) === 'object' ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function (dispatch) {
    return (0, _redux.bindActionCreators)(mapDispatchToProps, dispatch);
  }) : undefined;
}

exports.default = [whenMapDispatchToPropsIsFunction, whenMapDispatchToPropsIsMissing, whenMapDispatchToPropsIsObject];

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.whenMapStateToPropsIsFunction = whenMapStateToPropsIsFunction;
exports.whenMapStateToPropsIsMissing = whenMapStateToPropsIsMissing;

var _wrapMapToProps = __webpack_require__(9);

function whenMapStateToPropsIsFunction(mapStateToProps) {
  return typeof mapStateToProps === 'function' ? (0, _wrapMapToProps.wrapMapToPropsFunc)(mapStateToProps, 'mapStateToProps') : undefined;
}

function whenMapStateToPropsIsMissing(mapStateToProps) {
  return !mapStateToProps ? (0, _wrapMapToProps.wrapMapToPropsConstant)(function () {
    return {};
  }) : undefined;
}

exports.default = [whenMapStateToPropsIsFunction, whenMapStateToPropsIsMissing];

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.defaultMergeProps = defaultMergeProps;
exports.wrapMergePropsFunc = wrapMergePropsFunc;
exports.whenMergePropsIsFunction = whenMergePropsIsFunction;
exports.whenMergePropsIsOmitted = whenMergePropsIsOmitted;

var _verifyPlainObject = __webpack_require__(11);

var _verifyPlainObject2 = _interopRequireDefault(_verifyPlainObject);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

function defaultMergeProps(stateProps, dispatchProps, ownProps) {
  return _extends({}, ownProps, stateProps, dispatchProps);
}

function wrapMergePropsFunc(mergeProps) {
  return function initMergePropsProxy(dispatch, _ref) {
    var displayName = _ref.displayName,
        pure = _ref.pure,
        areMergedPropsEqual = _ref.areMergedPropsEqual;

    var hasRunOnce = false;
    var mergedProps = void 0;

    return function mergePropsProxy(stateProps, dispatchProps, ownProps) {
      var nextMergedProps = mergeProps(stateProps, dispatchProps, ownProps);

      if (hasRunOnce) {
        if (!pure || !areMergedPropsEqual(nextMergedProps, mergedProps)) mergedProps = nextMergedProps;
      } else {
        hasRunOnce = true;
        mergedProps = nextMergedProps;

        if (false) (0, _verifyPlainObject2.default)(mergedProps, displayName, 'mergeProps');
      }

      return mergedProps;
    };
  };
}

function whenMergePropsIsFunction(mergeProps) {
  return typeof mergeProps === 'function' ? wrapMergePropsFunc(mergeProps) : undefined;
}

function whenMergePropsIsOmitted(mergeProps) {
  return !mergeProps ? function () {
    return defaultMergeProps;
  } : undefined;
}

exports.default = [whenMergePropsIsFunction, whenMergePropsIsOmitted];

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.impureFinalPropsSelectorFactory = impureFinalPropsSelectorFactory;
exports.pureFinalPropsSelectorFactory = pureFinalPropsSelectorFactory;
exports.default = finalPropsSelectorFactory;

var _verifySubselectors = __webpack_require__(39);

var _verifySubselectors2 = _interopRequireDefault(_verifySubselectors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) {
  var target = {};for (var i in obj) {
    if (keys.indexOf(i) >= 0) continue;if (!Object.prototype.hasOwnProperty.call(obj, i)) continue;target[i] = obj[i];
  }return target;
}

function impureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch) {
  return function impureFinalPropsSelector(state, ownProps) {
    return mergeProps(mapStateToProps(state, ownProps), mapDispatchToProps(dispatch, ownProps), ownProps);
  };
}

function pureFinalPropsSelectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, _ref) {
  var areStatesEqual = _ref.areStatesEqual,
      areOwnPropsEqual = _ref.areOwnPropsEqual,
      areStatePropsEqual = _ref.areStatePropsEqual;

  var hasRunAtLeastOnce = false;
  var state = void 0;
  var ownProps = void 0;
  var stateProps = void 0;
  var dispatchProps = void 0;
  var mergedProps = void 0;

  function handleFirstCall(firstState, firstOwnProps) {
    state = firstState;
    ownProps = firstOwnProps;
    stateProps = mapStateToProps(state, ownProps);
    dispatchProps = mapDispatchToProps(dispatch, ownProps);
    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    hasRunAtLeastOnce = true;
    return mergedProps;
  }

  function handleNewPropsAndNewState() {
    stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewProps() {
    if (mapStateToProps.dependsOnOwnProps) stateProps = mapStateToProps(state, ownProps);

    if (mapDispatchToProps.dependsOnOwnProps) dispatchProps = mapDispatchToProps(dispatch, ownProps);

    mergedProps = mergeProps(stateProps, dispatchProps, ownProps);
    return mergedProps;
  }

  function handleNewState() {
    var nextStateProps = mapStateToProps(state, ownProps);
    var statePropsChanged = !areStatePropsEqual(nextStateProps, stateProps);
    stateProps = nextStateProps;

    if (statePropsChanged) mergedProps = mergeProps(stateProps, dispatchProps, ownProps);

    return mergedProps;
  }

  function handleSubsequentCalls(nextState, nextOwnProps) {
    var propsChanged = !areOwnPropsEqual(nextOwnProps, ownProps);
    var stateChanged = !areStatesEqual(nextState, state);
    state = nextState;
    ownProps = nextOwnProps;

    if (propsChanged && stateChanged) return handleNewPropsAndNewState();
    if (propsChanged) return handleNewProps();
    if (stateChanged) return handleNewState();
    return mergedProps;
  }

  return function pureFinalPropsSelector(nextState, nextOwnProps) {
    return hasRunAtLeastOnce ? handleSubsequentCalls(nextState, nextOwnProps) : handleFirstCall(nextState, nextOwnProps);
  };
}

// TODO: Add more comments

// If pure is true, the selector returned by selectorFactory will memoize its results,
// allowing connectAdvanced's shouldComponentUpdate to return false if final
// props have not changed. If false, the selector will always return a new
// object and shouldComponentUpdate will always return true.

function finalPropsSelectorFactory(dispatch, _ref2) {
  var initMapStateToProps = _ref2.initMapStateToProps,
      initMapDispatchToProps = _ref2.initMapDispatchToProps,
      initMergeProps = _ref2.initMergeProps,
      options = _objectWithoutProperties(_ref2, ['initMapStateToProps', 'initMapDispatchToProps', 'initMergeProps']);

  var mapStateToProps = initMapStateToProps(dispatch, options);
  var mapDispatchToProps = initMapDispatchToProps(dispatch, options);
  var mergeProps = initMergeProps(dispatch, options);

  if (false) {
    (0, _verifySubselectors2.default)(mapStateToProps, mapDispatchToProps, mergeProps, options.displayName);
  }

  var selectorFactory = options.pure ? pureFinalPropsSelectorFactory : impureFinalPropsSelectorFactory;

  return selectorFactory(mapStateToProps, mapDispatchToProps, mergeProps, dispatch, options);
}

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = verifySubselectors;

var _warning = __webpack_require__(5);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function verify(selector, methodName, displayName) {
  if (!selector) {
    throw new Error('Unexpected value for ' + methodName + ' in ' + displayName + '.');
  } else if (methodName === 'mapStateToProps' || methodName === 'mapDispatchToProps') {
    if (!selector.hasOwnProperty('dependsOnOwnProps')) {
      (0, _warning2.default)('The selector for ' + methodName + ' of ' + displayName + ' did not specify a value for dependsOnOwnProps.');
    }
  }
}

function verifySubselectors(mapStateToProps, mapDispatchToProps, mergeProps, displayName) {
  verify(mapStateToProps, 'mapStateToProps', displayName);
  verify(mapDispatchToProps, 'mapDispatchToProps', displayName);
  verify(mergeProps, 'mergeProps', displayName);
}

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

// encapsulates the subscription logic for connecting a component to the redux store, as
// well as nesting subscriptions of descendant components, so that we can ensure the
// ancestor components re-render before descendants

var CLEARED = null;
var nullListeners = {
  notify: function notify() {}
};

function createListenerCollection() {
  // the current/next pattern is copied from redux's createStore code.
  // TODO: refactor+expose that code to be reusable here?
  var current = [];
  var next = [];

  return {
    clear: function clear() {
      next = CLEARED;
      current = CLEARED;
    },
    notify: function notify() {
      var listeners = current = next;
      for (var i = 0; i < listeners.length; i++) {
        listeners[i]();
      }
    },
    subscribe: function subscribe(listener) {
      var isSubscribed = true;
      if (next === current) next = current.slice();
      next.push(listener);

      return function unsubscribe() {
        if (!isSubscribed || current === CLEARED) return;
        isSubscribed = false;

        if (next === current) next = current.slice();
        next.splice(next.indexOf(listener), 1);
      };
    }
  };
}

var Subscription = function () {
  function Subscription(store, parentSub, onStateChange) {
    _classCallCheck(this, Subscription);

    this.store = store;
    this.parentSub = parentSub;
    this.onStateChange = onStateChange;
    this.unsubscribe = null;
    this.listeners = nullListeners;
  }

  Subscription.prototype.addNestedSub = function addNestedSub(listener) {
    this.trySubscribe();
    return this.listeners.subscribe(listener);
  };

  Subscription.prototype.notifyNestedSubs = function notifyNestedSubs() {
    this.listeners.notify();
  };

  Subscription.prototype.isSubscribed = function isSubscribed() {
    return Boolean(this.unsubscribe);
  };

  Subscription.prototype.trySubscribe = function trySubscribe() {
    if (!this.unsubscribe) {
      this.unsubscribe = this.parentSub ? this.parentSub.addNestedSub(this.onStateChange) : this.store.subscribe(this.onStateChange);

      this.listeners = createListenerCollection();
    }
  };

  Subscription.prototype.tryUnsubscribe = function tryUnsubscribe() {
    if (this.unsubscribe) {
      this.unsubscribe();
      this.unsubscribe = null;
      this.listeners.clear();
      this.listeners = nullListeners;
    }
  };

  return Subscription;
}();

exports.default = Subscription;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = shallowEqual;
var hasOwn = Object.prototype.hasOwnProperty;

function is(x, y) {
  if (x === y) {
    return x !== 0 || y !== 0 || 1 / x === 1 / y;
  } else {
    return x !== x && y !== y;
  }
}

function shallowEqual(objA, objB) {
  if (is(objA, objB)) return true;

  if ((typeof objA === 'undefined' ? 'undefined' : _typeof(objA)) !== 'object' || objA === null || (typeof objB === 'undefined' ? 'undefined' : _typeof(objB)) !== 'object' || objB === null) {
    return false;
  }

  var keysA = Object.keys(objA);
  var keysB = Object.keys(objB);

  if (keysA.length !== keysB.length) return false;

  for (var i = 0; i < keysA.length; i++) {
    if (!hasOwn.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
      return false;
    }
  }

  return true;
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = applyMiddleware;

var _compose = __webpack_require__(12);

var _compose2 = _interopRequireDefault(_compose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

/**
 * Creates a store enhancer that applies middleware to the dispatch method
 * of the Redux store. This is handy for a variety of tasks, such as expressing
 * asynchronous actions in a concise manner, or logging every action payload.
 *
 * See `redux-thunk` package as an example of the Redux middleware.
 *
 * Because middleware is potentially asynchronous, this should be the first
 * store enhancer in the composition chain.
 *
 * Note that each middleware will be given the `dispatch` and `getState` functions
 * as named arguments.
 *
 * @param {...Function} middlewares The middleware chain to be applied.
 * @returns {Function} A store enhancer applying the middleware.
 */
function applyMiddleware() {
  for (var _len = arguments.length, middlewares = Array(_len), _key = 0; _key < _len; _key++) {
    middlewares[_key] = arguments[_key];
  }

  return function (createStore) {
    return function (reducer, preloadedState, enhancer) {
      var store = createStore(reducer, preloadedState, enhancer);
      var _dispatch = store.dispatch;
      var chain = [];

      var middlewareAPI = {
        getState: store.getState,
        dispatch: function dispatch(action) {
          return _dispatch(action);
        }
      };
      chain = middlewares.map(function (middleware) {
        return middleware(middlewareAPI);
      });
      _dispatch = _compose2.default.apply(undefined, chain)(store.dispatch);

      return _extends({}, store, {
        dispatch: _dispatch
      });
    };
  };
}

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.default = bindActionCreators;
function bindActionCreator(actionCreator, dispatch) {
  return function () {
    return dispatch(actionCreator.apply(undefined, arguments));
  };
}

/**
 * Turns an object whose values are action creators, into an object with the
 * same keys, but with every function wrapped into a `dispatch` call so they
 * may be invoked directly. This is just a convenience method, as you can call
 * `store.dispatch(MyActionCreators.doSomething())` yourself just fine.
 *
 * For convenience, you can also pass a single function as the first argument,
 * and get a function in return.
 *
 * @param {Function|Object} actionCreators An object whose values are action
 * creator functions. One handy way to obtain it is to use ES6 `import * as`
 * syntax. You may also pass a single function.
 *
 * @param {Function} dispatch The `dispatch` function available on your Redux
 * store.
 *
 * @returns {Function|Object} The object mimicking the original object, but with
 * every action creator wrapped into the `dispatch` call. If you passed a
 * function as `actionCreators`, the return value will also be a single
 * function.
 */
function bindActionCreators(actionCreators, dispatch) {
  if (typeof actionCreators === 'function') {
    return bindActionCreator(actionCreators, dispatch);
  }

  if ((typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) !== 'object' || actionCreators === null) {
    throw new Error('bindActionCreators expected an object or a function, instead received ' + (actionCreators === null ? 'null' : typeof actionCreators === 'undefined' ? 'undefined' : _typeof(actionCreators)) + '. ' + 'Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
  }

  var keys = Object.keys(actionCreators);
  var boundActionCreators = {};
  for (var i = 0; i < keys.length; i++) {
    var key = keys[i];
    var actionCreator = actionCreators[key];
    if (typeof actionCreator === 'function') {
      boundActionCreators[key] = bindActionCreator(actionCreator, dispatch);
    }
  }
  return boundActionCreators;
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = combineReducers;

var _createStore = __webpack_require__(13);

var _isPlainObject = __webpack_require__(4);

var _isPlainObject2 = _interopRequireDefault(_isPlainObject);

var _warning = __webpack_require__(14);

var _warning2 = _interopRequireDefault(_warning);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getUndefinedStateErrorMessage(key, action) {
  var actionType = action && action.type;
  var actionName = actionType && '"' + actionType.toString() + '"' || 'an action';

  return 'Given action ' + actionName + ', reducer "' + key + '" returned undefined. ' + 'To ignore an action, you must explicitly return the previous state.';
}

function getUnexpectedStateShapeWarningMessage(inputState, reducers, action, unexpectedKeyCache) {
  var reducerKeys = Object.keys(reducers);
  var argumentName = action && action.type === _createStore.ActionTypes.INIT ? 'preloadedState argument passed to createStore' : 'previous state received by the reducer';

  if (reducerKeys.length === 0) {
    return 'Store does not have a valid reducer. Make sure the argument passed ' + 'to combineReducers is an object whose values are reducers.';
  }

  if (!(0, _isPlainObject2.default)(inputState)) {
    return 'The ' + argumentName + ' has unexpected type of "' + {}.toString.call(inputState).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + reducerKeys.join('", "') + '"');
  }

  var unexpectedKeys = Object.keys(inputState).filter(function (key) {
    return !reducers.hasOwnProperty(key) && !unexpectedKeyCache[key];
  });

  unexpectedKeys.forEach(function (key) {
    unexpectedKeyCache[key] = true;
  });

  if (unexpectedKeys.length > 0) {
    return 'Unexpected ' + (unexpectedKeys.length > 1 ? 'keys' : 'key') + ' ' + ('"' + unexpectedKeys.join('", "') + '" found in ' + argumentName + '. ') + 'Expected to find one of the known reducer keys instead: ' + ('"' + reducerKeys.join('", "') + '". Unexpected keys will be ignored.');
  }
}

function assertReducerSanity(reducers) {
  Object.keys(reducers).forEach(function (key) {
    var reducer = reducers[key];
    var initialState = reducer(undefined, { type: _createStore.ActionTypes.INIT });

    if (typeof initialState === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined during initialization. ' + 'If the state passed to the reducer is undefined, you must ' + 'explicitly return the initial state. The initial state may ' + 'not be undefined.');
    }

    var type = '@@redux/PROBE_UNKNOWN_ACTION_' + Math.random().toString(36).substring(7).split('').join('.');
    if (typeof reducer(undefined, { type: type }) === 'undefined') {
      throw new Error('Reducer "' + key + '" returned undefined when probed with a random type. ' + ('Don\'t try to handle ' + _createStore.ActionTypes.INIT + ' or other actions in "redux/*" ') + 'namespace. They are considered private. Instead, you must return the ' + 'current state for any unknown actions, unless it is undefined, ' + 'in which case you must return the initial state, regardless of the ' + 'action type. The initial state may not be undefined.');
    }
  });
}

/**
 * Turns an object whose values are different reducer functions, into a single
 * reducer function. It will call every child reducer, and gather their results
 * into a single state object, whose keys correspond to the keys of the passed
 * reducer functions.
 *
 * @param {Object} reducers An object whose values correspond to different
 * reducer functions that need to be combined into one. One handy way to obtain
 * it is to use ES6 `import * as reducers` syntax. The reducers may never return
 * undefined for any action. Instead, they should return their initial state
 * if the state passed to them was undefined, and the current state for any
 * unrecognized action.
 *
 * @returns {Function} A reducer function that invokes every reducer inside the
 * passed object, and builds a state object with the same shape.
 */
function combineReducers(reducers) {
  var reducerKeys = Object.keys(reducers);
  var finalReducers = {};
  for (var i = 0; i < reducerKeys.length; i++) {
    var key = reducerKeys[i];

    if (false) {
      if (typeof reducers[key] === 'undefined') {
        (0, _warning2.default)('No reducer provided for key "' + key + '"');
      }
    }

    if (typeof reducers[key] === 'function') {
      finalReducers[key] = reducers[key];
    }
  }
  var finalReducerKeys = Object.keys(finalReducers);

  if (false) {
    var unexpectedKeyCache = {};
  }

  var sanityError;
  try {
    assertReducerSanity(finalReducers);
  } catch (e) {
    sanityError = e;
  }

  return function combination() {
    var state = arguments.length <= 0 || arguments[0] === undefined ? {} : arguments[0];
    var action = arguments[1];

    if (sanityError) {
      throw sanityError;
    }

    if (false) {
      var warningMessage = getUnexpectedStateShapeWarningMessage(state, finalReducers, action, unexpectedKeyCache);
      if (warningMessage) {
        (0, _warning2.default)(warningMessage);
      }
    }

    var hasChanged = false;
    var nextState = {};
    for (var i = 0; i < finalReducerKeys.length; i++) {
      var key = finalReducerKeys[i];
      var reducer = finalReducers[key];
      var previousStateForKey = state[key];
      var nextStateForKey = reducer(previousStateForKey, action);
      if (typeof nextStateForKey === 'undefined') {
        var errorMessage = getUndefinedStateErrorMessage(key, action);
        throw new Error(errorMessage);
      }
      nextState[key] = nextStateForKey;
      hasChanged = hasChanged || nextStateForKey !== previousStateForKey;
    }
    return hasChanged ? nextState : state;
  };
}

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = __webpack_require__(46);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global, module) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _ponyfill = __webpack_require__(47);

var _ponyfill2 = _interopRequireDefault(_ponyfill);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}

var root; /* global window */

if (typeof self !== 'undefined') {
  root = self;
} else if (typeof window !== 'undefined') {
  root = window;
} else if (typeof global !== 'undefined') {
  root = global;
} else if (true) {
  root = module;
} else {
  root = Function('return this')();
}

var result = (0, _ponyfill2['default'])(root);
exports['default'] = result;
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(15), __webpack_require__(48)(module)))

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
	value: true
});
exports['default'] = symbolObservablePonyfill;
function symbolObservablePonyfill(root) {
	var result;
	var _Symbol = root.Symbol;

	if (typeof _Symbol === 'function') {
		if (_Symbol.observable) {
			result = _Symbol.observable;
		} else {
			result = _Symbol('observable');
			_Symbol.observable = result;
		}
	} else {
		result = '@@observable';
	}

	return result;
};

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function (module) {
	if (!module.webpackPolyfill) {
		module.deprecate = function () {};
		module.paths = [];
		// module.parent = undefined by default
		if (!module.children) module.children = [];
		Object.defineProperty(module, "loaded", {
			enumerable: true,
			get: function get() {
				return module.l;
			}
		});
		Object.defineProperty(module, "id", {
			enumerable: true,
			get: function get() {
				return module.i;
			}
		});
		module.webpackPolyfill = 1;
	}
	return module;
};

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _FilterLink = __webpack_require__(54);

var _FilterLink2 = _interopRequireDefault(_FilterLink);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Footer = function Footer() {
  return _react2.default.createElement(
    'p',
    null,
    'Show:',
    " ",
    _react2.default.createElement(
      _FilterLink2.default,
      { filter: 'SHOW_ALL' },
      'All'
    ),
    ", ",
    _react2.default.createElement(
      _FilterLink2.default,
      { filter: 'SHOW_ACTIVE' },
      'Active'
    ),
    ", ",
    _react2.default.createElement(
      _FilterLink2.default,
      { filter: 'SHOW_COMPLETED' },
      'Completed'
    )
  );
};

exports.default = Footer;

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Link = function Link(_ref) {
    var active = _ref.active,
        children = _ref.children,
        _onClick = _ref.onClick;

    if (active) {
        return _react2.default.createElement(
            'span',
            null,
            children
        );
    }
    return _react2.default.createElement(
        'a',
        { href: '#',
            onClick: function onClick(e) {
                e.preventDefault();
                _onClick();
            }
        },
        children
    );
};

Link.propTypes = {
    active: _propTypes2.default.bool.isRequired,
    children: _propTypes2.default.node.isRequired,
    onClick: _propTypes2.default.func.isRequired
};

exports.default = Link;

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Todo = function Todo(_ref) {
  var onClick = _ref.onClick,
      completed = _ref.completed,
      text = _ref.text;
  return _react2.default.createElement(
    'li',
    {
      onClick: onClick,
      style: {
        textDecoration: completed ? 'line-through' : 'none'
      }
    },
    text
  );
};

Todo.propTypes = {
  onClick: _propTypes2.default.func.isRequired,
  completed: _propTypes2.default.bool.isRequired,
  text: _propTypes2.default.string.isRequired
};

exports.default = Todo;

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Todo = __webpack_require__(51);

var _Todo2 = _interopRequireDefault(_Todo);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TodoList = function TodoList(_ref) {
  var todos = _ref.todos,
      onTodoClick = _ref.onTodoClick;
  return _react2.default.createElement(
    'ul',
    null,
    todos.map(function (todo) {
      return _react2.default.createElement(_Todo2.default, _extends({
        key: todo.id
      }, todo, {
        onClick: function onClick() {
          return onTodoClick(todo.id);
        }
      }));
    })
  );
};

TodoList.propTypes = {
  todos: _propTypes2.default.arrayOf(_propTypes2.default.shape({
    id: _propTypes2.default.number.isRequired,
    completed: _propTypes2.default.bool.isRequired,
    text: _propTypes2.default.string.isRequired
  }).isRequired).isRequired,
  onTodoClick: _propTypes2.default.func.isRequired
};

exports.default = TodoList;

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddTodo = function AddTodo(_ref) {
  var dispatch = _ref.dispatch;

  var input = void 0;

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'form',
      { onSubmit: function onSubmit(e) {
          e.preventDefault();
          if (!input.value.trim()) {
            return;
          }
          dispatch((0, _actions.addTodo)(input.value));
          input.value = '';
        } },
      _react2.default.createElement('input', { ref: function ref(node) {
          input = node;
        } }),
      _react2.default.createElement(
        'button',
        { type: 'submit' },
        'Add Todo'
      )
    )
  );
};
AddTodo = (0, _reactRedux.connect)()(AddTodo);

exports.default = AddTodo;

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(6);

var _Link = __webpack_require__(50);

var _Link2 = _interopRequireDefault(_Link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mapStateToProps = function mapStateToProps(state, ownProps) {
  return {
    active: ownProps.filter === state.visibilityFilter
  };
};

var mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {
  return {
    onClick: function onClick() {
      dispatch((0, _actions.setVisibilityFilter)(ownProps.filter));
    }
  };
};

var FilterLink = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_Link2.default);

exports.default = FilterLink;

/***/ }),
/* 55 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _reactRedux = __webpack_require__(2);

var _actions = __webpack_require__(6);

var _TodoList = __webpack_require__(52);

var _TodoList2 = _interopRequireDefault(_TodoList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var getVisibleTodos = function getVisibleTodos(todos, filter) {
  switch (filter) {
    case 'SHOW_ALL':
      return todos;
    case 'SHOW_COMPLETED':
      return todos.filter(function (t) {
        return t.completed;
      });
    case 'SHOW_ACTIVE':
      return todos.filter(function (t) {
        return !t.completed;
      });
    default:
      throw new Error('Unknown filter: ' + filter);
  }
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};

var mapDispatchToProps = {
  onTodoClick: _actions.toggleTodo
};

var VisibleTodoList = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps)(_TodoList2.default);

exports.default = VisibleTodoList;

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(16);

var _redux = __webpack_require__(3);

var _reactRedux = __webpack_require__(2);

var _App = __webpack_require__(17);

var _App2 = _interopRequireDefault(_App);

var _reducers = __webpack_require__(18);

var _reducers2 = _interopRequireDefault(_reducers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var store = (0, _redux.createStore)(_reducers2.default);

(0, _reactDom.render)(_react2.default.createElement(
    _reactRedux.Provider,
    { store: store },
    _react2.default.createElement(_App2.default, null)
), document.getElementById('root'));

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

var todo = function todo(state, action) {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false
      };
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state;
      }

      return _extends({}, state, {
        completed: !state.completed
      });
    default:
      return state;
  }
};

var todos = function todos() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
  var action = arguments[1];

  switch (action.type) {
    case 'ADD_TODO':
      return [].concat(_toConsumableArray(state), [todo(undefined, action)]);
    case 'TOGGLE_TODO':
      return state.map(function (t) {
        return todo(t, action);
      });
    default:
      return state;
  }
};

exports.default = todos;

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var visibilityFilter = function visibilityFilter() {
  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'SHOW_ALL';
  var action = arguments[1];

  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter;
    default:
      return state;
  }
};

exports.default = visibilityFilter;

/***/ })
/******/ ]);