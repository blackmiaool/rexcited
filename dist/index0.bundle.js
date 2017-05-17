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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.cloneElement = exports.isValidElement = exports.createClass = exports.PropTypes = exports.Children = exports.asyncSetState = exports.Component = exports.createElement = undefined;

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _createElement = __webpack_require__(22);

var _createElement2 = _interopRequireDefault(_createElement);

var _children = __webpack_require__(21);

var _children2 = _interopRequireDefault(_children);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isAsyncSetState = false;

function asyncSetState(value) {
    isAsyncSetState = value;
}

var createClassStaticKeys = ['getDefaultProps', 'getInitialState', 'propTypes', 'statics'];

function createClass(obj) {
    console.log('createClass', obj);

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
        key: "setWrapper",
        value: function setWrapper() {}
    }, {
        key: "forceUpdate",
        value: function forceUpdate() {
            var instance = this._reactInternalInstance;
            instance.handleStateQueue(this.state, this.props);
        }
    }, {
        key: "setState",
        value: function setState(updater, cb) {
            var _this2 = this;

            console.log('setState');
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
                instance.handleStateQueue(_this2.state, _this2.props);
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

function isText(key) {
    return typeof key === "string" || typeof key === "number";
}

function isValidElement(element) {
    if ((typeof element === "undefined" ? "undefined" : _typeof(element)) !== "object" || !element) {
        return false;
    }
    return true;
}
var PropTypes = _propTypes2.default.PropTypes;

function cloneElement(element, config) {
    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        children[_key - 2] = arguments[_key];
    }

    console.log('cloneElement', element, config, children);
    if (!isValidElement(element)) {
        return element;
    }
    if (Array.isArray(element)) {
        console.log('array', element);
        return element.map(function (a) {
            return a;
        });
    }
    var element0 = element;

    element = Object.assign({}, element);
    element.props = Object.assign({}, element.props, config);

    element.props.children = element.props.children || [];

    element.props.children = element.props.children.concat(children).map(function (child) {
        return cloneElement(child);
    });
    if (!element.props.children.length) {
        delete element.props.children;
    }

    return element;
}

var _exports = {
    createElement: _createElement2.default,
    Component: Component,
    asyncSetState: asyncSetState,
    Children: _children2.default,
    PropTypes: PropTypes,
    createClass: createClass,
    isValidElement: isValidElement,
    cloneElement: cloneElement
};

exports.createElement = _createElement2.default;
exports.Component = Component;
exports.asyncSetState = asyncSetState;
exports.Children = _children2.default;
exports.PropTypes = PropTypes;
exports.createClass = createClass;
exports.isValidElement = isValidElement;
exports.cloneElement = cloneElement;
exports.default = _exports;

window.React = _exports;

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
  module.exports = __webpack_require__(14)();
}

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = !!(typeof window !== 'undefined' && window.document && window.document.createElement);
module.exports = exports['default'];

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.nameShape = undefined;
exports.transitionTimeout = transitionTimeout;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function transitionTimeout(transitionType) {
  var timeoutPropName = 'transition' + transitionType + 'Timeout';
  var enabledPropName = 'transition' + transitionType;

  return function (props) {
    // If the transition is enabled
    if (props[enabledPropName]) {
      // If no timeout duration is provided
      if (props[timeoutPropName] == null) {
        return new Error(timeoutPropName + ' wasn\'t supplied to CSSTransitionGroup: ' + 'this can cause unreliable animations and won\'t be supported in ' + 'a future version of React. See ' + 'https://fb.me/react-animation-transition-group-timeout for more ' + 'information.');

        // If the duration isn't a number
      } else if (typeof props[timeoutPropName] !== 'number') {
        return new Error(timeoutPropName + ' must be a number (in milliseconds)');
      }
    }

    return null;
  };
}

var nameShape = exports.nameShape = _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  active: _propTypes2.default.string
}), _propTypes2.default.shape({
  enter: _propTypes2.default.string,
  enterActive: _propTypes2.default.string,
  leave: _propTypes2.default.string,
  leaveActive: _propTypes2.default.string,
  appear: _propTypes2.default.string,
  appearActive: _propTypes2.default.string
})]);

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TransitionGroup = __webpack_require__(17);

var _TransitionGroup2 = _interopRequireDefault(_TransitionGroup);

var _CSSTransitionGroupChild = __webpack_require__(16);

var _CSSTransitionGroupChild2 = _interopRequireDefault(_CSSTransitionGroupChild);

var _PropTypes = __webpack_require__(3);

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
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var propTypes = {
  transitionName: _PropTypes.nameShape.isRequired,

  transitionAppear: _propTypes2.default.bool,
  transitionEnter: _propTypes2.default.bool,
  transitionLeave: _propTypes2.default.bool,
  transitionAppearTimeout: (0, _PropTypes.transitionTimeout)('Appear'),
  transitionEnterTimeout: (0, _PropTypes.transitionTimeout)('Enter'),
  transitionLeaveTimeout: (0, _PropTypes.transitionTimeout)('Leave')
};

var defaultProps = {
  transitionAppear: false,
  transitionEnter: true,
  transitionLeave: true
};

var CSSTransitionGroup = function (_React$Component) {
  _inherits(CSSTransitionGroup, _React$Component);

  function CSSTransitionGroup() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroup);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this._wrapChild = function (child) {
      return _react2.default.createElement(_CSSTransitionGroupChild2.default, {
        name: _this.props.transitionName,
        appear: _this.props.transitionAppear,
        enter: _this.props.transitionEnter,
        leave: _this.props.transitionLeave,
        appearTimeout: _this.props.transitionAppearTimeout,
        enterTimeout: _this.props.transitionEnterTimeout,
        leaveTimeout: _this.props.transitionLeaveTimeout
      }, child);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  // We need to provide this childFactory so that
  // ReactCSSTransitionGroupChild can receive updates to name, enter, and
  // leave while it is leaving.


  CSSTransitionGroup.prototype.render = function render() {
    return _react2.default.createElement(_TransitionGroup2.default, _extends({}, this.props, { childFactory: this._wrapChild }));
  };

  return CSSTransitionGroup;
}(_react2.default.Component);

CSSTransitionGroup.displayName = 'CSSTransitionGroup';

CSSTransitionGroup.propTypes = propTypes;
CSSTransitionGroup.defaultProps = defaultProps;

exports.default = CSSTransitionGroup;
module.exports = exports['default'];

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _CSSTransitionGroup = __webpack_require__(4);

var _CSSTransitionGroup2 = _interopRequireDefault(_CSSTransitionGroup);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(20);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } // ES6


var TodoList = function (_React$Component) {
    _inherits(TodoList, _React$Component);

    function TodoList(props) {
        _classCallCheck(this, TodoList);

        var _this = _possibleConstructorReturn(this, (TodoList.__proto__ || Object.getPrototypeOf(TodoList)).call(this, props));

        _this.state = {
            items: ['hello', 'world', 'click', 'me']
        };
        _this.handleAdd = _this.handleAdd.bind(_this);
        return _this;
    }

    _createClass(TodoList, [{
        key: 'handleAdd',
        value: function handleAdd() {
            var newItems = this.state.items.concat([prompt('Enter some text')]);
            this.setState({
                items: newItems
            });
        }
    }, {
        key: 'handleRemove',
        value: function handleRemove(i) {
            var newItems = this.state.items.slice();
            newItems.splice(i, 1);
            this.setState({
                items: newItems
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var items = this.state.items.map(function (item, i) {
                return _react2.default.createElement(
                    'div',
                    { key: item, onClick: function onClick() {
                            return _this2.handleRemove(i);
                        } },
                    item
                );
            });
            console.log(items, _react2.default.Children.map([items], function (child) {
                return child;
            }));

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'button',
                    { onClick: this.handleAdd },
                    'Add Item'
                ),
                _react2.default.createElement(
                    _CSSTransitionGroup2.default,
                    {
                        transitionName: 'example',
                        transitionEnterTimeout: 500,
                        transitionLeaveTimeout: 300 },
                    items
                )
            );
        }
    }]);

    return TodoList;
}(_react2.default.Component);

//import { render } from 'react-dom'
//import { createStore } from 'redux'
//import { Provider } from 'react-redux'
//import App from './components/App'
//import reducer from './reducers'
//const store = createStore(reducer)

(0, _reactDom.render)(_react2.default.createElement(TodoList, null), document.getElementById('root'));

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function chain() {
  var len = arguments.length;
  var args = [];

  for (var i = 0; i < len; i++) {
    args[i] = arguments[i];
  }args = args.filter(function (fn) {
    return fn != null;
  });

  if (args.length === 0) return undefined;
  if (args.length === 1) return args[0];

  return args.reduce(function (current, next) {
    return function chainedFunction() {
      current.apply(this, arguments);
      next.apply(this, arguments);
    };
  });
};

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = addClass;

var _hasClass = __webpack_require__(8);

var _hasClass2 = _interopRequireDefault(_hasClass);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

function addClass(element, className) {
  if (element.classList) element.classList.add(className);else if (!(0, _hasClass2.default)(element)) element.className = element.className + ' ' + className;
}
module.exports = exports['default'];

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = hasClass;
function hasClass(element, className) {
  if (element.classList) return !!className && element.classList.contains(className);else return (" " + element.className + " ").indexOf(" " + className + " ") !== -1;
}
module.exports = exports["default"];

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = function removeClass(element, className) {
  if (element.classList) element.classList.remove(className);else element.className = element.className.replace(new RegExp('(^|\\s)' + className + '(?:\\s|$)', 'g'), '$1').replace(/\s+/g, ' ').replace(/^\s*|\s*$/g, '');
};

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.animationEnd = exports.animationDelay = exports.animationTiming = exports.animationDuration = exports.animationName = exports.transitionEnd = exports.transitionDuration = exports.transitionDelay = exports.transitionTiming = exports.transitionProperty = exports.transform = undefined;

var _inDOM = __webpack_require__(2);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var transform = 'transform';
var prefix = void 0,
    transitionEnd = void 0,
    animationEnd = void 0;
var transitionProperty = void 0,
    transitionDuration = void 0,
    transitionTiming = void 0,
    transitionDelay = void 0;
var animationName = void 0,
    animationDuration = void 0,
    animationTiming = void 0,
    animationDelay = void 0;

if (_inDOM2.default) {
  var _getTransitionPropert = getTransitionProperties();

  prefix = _getTransitionPropert.prefix;
  exports.transitionEnd = transitionEnd = _getTransitionPropert.transitionEnd;
  exports.animationEnd = animationEnd = _getTransitionPropert.animationEnd;

  exports.transform = transform = prefix + '-' + transform;
  exports.transitionProperty = transitionProperty = prefix + '-transition-property';
  exports.transitionDuration = transitionDuration = prefix + '-transition-duration';
  exports.transitionDelay = transitionDelay = prefix + '-transition-delay';
  exports.transitionTiming = transitionTiming = prefix + '-transition-timing-function';

  exports.animationName = animationName = prefix + '-animation-name';
  exports.animationDuration = animationDuration = prefix + '-animation-duration';
  exports.animationTiming = animationTiming = prefix + '-animation-delay';
  exports.animationDelay = animationDelay = prefix + '-animation-timing-function';
}

exports.transform = transform;
exports.transitionProperty = transitionProperty;
exports.transitionTiming = transitionTiming;
exports.transitionDelay = transitionDelay;
exports.transitionDuration = transitionDuration;
exports.transitionEnd = transitionEnd;
exports.animationName = animationName;
exports.animationDuration = animationDuration;
exports.animationTiming = animationTiming;
exports.animationDelay = animationDelay;
exports.animationEnd = animationEnd;
exports.default = {
  transform: transform,
  end: transitionEnd,
  property: transitionProperty,
  timing: transitionTiming,
  delay: transitionDelay,
  duration: transitionDuration
};

function getTransitionProperties() {
  var style = document.createElement('div').style;

  var vendorMap = {
    O: function O(e) {
      return 'o' + e.toLowerCase();
    },
    Moz: function Moz(e) {
      return e.toLowerCase();
    },
    Webkit: function Webkit(e) {
      return 'webkit' + e;
    },
    ms: function ms(e) {
      return 'MS' + e;
    }
  };

  var vendors = Object.keys(vendorMap);

  var transitionEnd = void 0,
      animationEnd = void 0;
  var prefix = '';

  for (var i = 0; i < vendors.length; i++) {
    var vendor = vendors[i];

    if (vendor + 'TransitionProperty' in style) {
      prefix = '-' + vendor.toLowerCase();
      transitionEnd = vendorMap[vendor]('TransitionEnd');
      animationEnd = vendorMap[vendor]('AnimationEnd');
      break;
    }
  }

  if (!transitionEnd && 'transitionProperty' in style) transitionEnd = 'transitionend';

  if (!animationEnd && 'animationName' in style) animationEnd = 'animationend';

  style = null;

  return { animationEnd: animationEnd, transitionEnd: transitionEnd, prefix: prefix };
}

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _inDOM = __webpack_require__(2);

var _inDOM2 = _interopRequireDefault(_inDOM);

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

var vendors = ['', 'webkit', 'moz', 'o', 'ms'];
var cancel = 'clearTimeout';
var raf = fallback;
var compatRaf = void 0;

var getKey = function getKey(vendor, k) {
  return vendor + (!vendor ? k : k[0].toUpperCase() + k.substr(1)) + 'AnimationFrame';
};

if (_inDOM2.default) {
  vendors.some(function (vendor) {
    var rafKey = getKey(vendor, 'request');

    if (rafKey in window) {
      cancel = getKey(vendor, 'cancel');
      return raf = function raf(cb) {
        return window[rafKey](cb);
      };
    }
  });
}

/* https://github.com/component/raf */
var prev = new Date().getTime();
function fallback(fn) {
  var curr = new Date().getTime(),
      ms = Math.max(0, 16 - (curr - prev)),
      req = setTimeout(fn, ms);

  prev = curr;
  return req;
}

compatRaf = function compatRaf(cb) {
  return raf(cb);
};
compatRaf.cancel = function (id) {
  window[cancel] && typeof window[cancel] === 'function' && window[cancel](id);
};
exports.default = compatRaf;
module.exports = exports['default'];

/***/ }),
/* 12 */
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
/* 13 */
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
/* 14 */
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



var emptyFunction = __webpack_require__(12);
var invariant = __webpack_require__(13);
var ReactPropTypesSecret = __webpack_require__(15);

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
/* 15 */
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
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _addClass = __webpack_require__(7);

var _addClass2 = _interopRequireDefault(_addClass);

var _removeClass = __webpack_require__(9);

var _removeClass2 = _interopRequireDefault(_removeClass);

var _requestAnimationFrame = __webpack_require__(11);

var _requestAnimationFrame2 = _interopRequireDefault(_requestAnimationFrame);

var _properties = __webpack_require__(10);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDom = __webpack_require__(20);

var _PropTypes = __webpack_require__(3);

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
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var events = [];
if (_properties.transitionEnd) events.push(_properties.transitionEnd);
if (_properties.animationEnd) events.push(_properties.animationEnd);

function addEndListener(node, listener) {
  if (events.length) {
    events.forEach(function (e) {
      return node.addEventListener(e, listener, false);
    });
  } else {
    setTimeout(listener, 0);
  }

  return function () {
    if (!events.length) return;
    events.forEach(function (e) {
      return node.removeEventListener(e, listener, false);
    });
  };
}

var propTypes = {
  children: _propTypes2.default.node,
  name: _PropTypes.nameShape.isRequired,

  // Once we require timeouts to be specified, we can remove the
  // boolean flags (appear etc.) and just accept a number
  // or a bool for the timeout flags (appearTimeout etc.)
  appear: _propTypes2.default.bool,
  enter: _propTypes2.default.bool,
  leave: _propTypes2.default.bool,
  appearTimeout: _propTypes2.default.number,
  enterTimeout: _propTypes2.default.number,
  leaveTimeout: _propTypes2.default.number
};

var CSSTransitionGroupChild = function (_React$Component) {
  _inherits(CSSTransitionGroupChild, _React$Component);

  function CSSTransitionGroupChild() {
    var _temp, _this, _ret;

    _classCallCheck(this, CSSTransitionGroupChild);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.componentWillAppear = function (done) {
      if (_this.props.appear) {
        _this.transition('appear', done, _this.props.appearTimeout);
      } else {
        done();
      }
    }, _this.componentWillEnter = function (done) {
      if (_this.props.enter) {
        _this.transition('enter', done, _this.props.enterTimeout);
      } else {
        done();
      }
    }, _this.componentWillLeave = function (done) {
      if (_this.props.leave) {
        _this.transition('leave', done, _this.props.leaveTimeout);
      } else {
        done();
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  CSSTransitionGroupChild.prototype.componentWillMount = function componentWillMount() {
    this.classNameAndNodeQueue = [];
    this.transitionTimeouts = [];
  };

  CSSTransitionGroupChild.prototype.componentWillUnmount = function componentWillUnmount() {
    this.unmounted = true;

    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    this.transitionTimeouts.forEach(function (timeout) {
      clearTimeout(timeout);
    });

    this.classNameAndNodeQueue.length = 0;
  };

  CSSTransitionGroupChild.prototype.transition = function transition(animationType, finishCallback, timeout) {
    var node = (0, _reactDom.findDOMNode)(this);

    if (!node) {
      if (finishCallback) {
        finishCallback();
      }
      return;
    }

    var className = this.props.name[animationType] || this.props.name + '-' + animationType;
    var activeClassName = this.props.name[animationType + 'Active'] || className + '-active';
    var timer = null;
    var removeListeners = void 0;

    (0, _addClass2.default)(node, className);

    // Need to do this to actually trigger a transition.
    this.queueClassAndNode(activeClassName, node);

    // Clean-up the animation after the specified delay
    var finish = function finish(e) {
      if (e && e.target !== node) {
        return;
      }

      clearTimeout(timer);
      if (removeListeners) removeListeners();

      (0, _removeClass2.default)(node, className);
      (0, _removeClass2.default)(node, activeClassName);

      if (removeListeners) removeListeners();

      // Usually this optional callback is used for informing an owner of
      // a leave animation and telling it to remove the child.
      if (finishCallback) {
        finishCallback();
      }
    };

    if (timeout) {
      timer = setTimeout(finish, timeout);
      this.transitionTimeouts.push(timer);
    } else if (_properties.transitionEnd) {
      removeListeners = addEndListener(node, finish);
    }
  };

  CSSTransitionGroupChild.prototype.queueClassAndNode = function queueClassAndNode(className, node) {
    var _this2 = this;

    this.classNameAndNodeQueue.push({
      className: className,
      node: node
    });

    if (!this.rafHandle) {
      this.rafHandle = (0, _requestAnimationFrame2.default)(function () {
        return _this2.flushClassNameAndNodeQueue();
      });
    }
  };

  CSSTransitionGroupChild.prototype.flushClassNameAndNodeQueue = function flushClassNameAndNodeQueue() {
    if (!this.unmounted) {
      this.classNameAndNodeQueue.forEach(function (obj) {
        // This is for to force a repaint,
        // which is necessary in order to transition styles when adding a class name.
        /* eslint-disable no-unused-expressions */
        obj.node.scrollTop;
        /* eslint-enable no-unused-expressions */
        (0, _addClass2.default)(obj.node, obj.className);
      });
    }
    this.classNameAndNodeQueue.length = 0;
    this.rafHandle = null;
  };

  CSSTransitionGroupChild.prototype.render = function render() {
    var props = _extends({}, this.props);
    delete props.name;
    delete props.appear;
    delete props.enter;
    delete props.leave;
    delete props.appearTimeout;
    delete props.enterTimeout;
    delete props.leaveTimeout;
    delete props.children;
    return _react2.default.cloneElement(_react2.default.Children.only(this.props.children), props);
  };

  return CSSTransitionGroupChild;
}(_react2.default.Component);

CSSTransitionGroupChild.displayName = 'CSSTransitionGroupChild';

CSSTransitionGroupChild.propTypes = propTypes;

exports.default = CSSTransitionGroupChild;
module.exports = exports['default'];

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

exports.__esModule = true;

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }return target;
};

var _chainFunction = __webpack_require__(6);

var _chainFunction2 = _interopRequireDefault(_chainFunction);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(1);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _warning = __webpack_require__(19);

var _warning2 = _interopRequireDefault(_warning);

var _ChildMapping = __webpack_require__(18);

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
  }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof(call)) === "object" || typeof call === "function") ? call : self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof(superClass)));
  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
}

var propTypes = {
  component: _propTypes2.default.any,
  childFactory: _propTypes2.default.func,
  children: _propTypes2.default.node
};

var defaultProps = {
  component: 'span',
  childFactory: function childFactory(child) {
    return child;
  }
};

var TransitionGroup = function (_React$Component) {
  _inherits(TransitionGroup, _React$Component);

  function TransitionGroup(props, context) {
    _classCallCheck(this, TransitionGroup);

    var _this = _possibleConstructorReturn(this, _React$Component.call(this, props, context));

    _this.performAppear = function (key) {
      _this.currentlyTransitioningKeys[key] = true;

      var component = _this.childRefs[key];

      if (component.componentWillAppear) {
        component.componentWillAppear(_this._handleDoneAppearing.bind(_this, key));
      } else {
        _this._handleDoneAppearing(key);
      }
    };

    _this._handleDoneAppearing = function (key) {
      var component = _this.childRefs[key];
      if (component && component.componentDidAppear) {
        component.componentDidAppear();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully appeared. Remove it.
        _this.performLeave(key);
      }
    };

    _this.performEnter = function (key) {
      _this.currentlyTransitioningKeys[key] = true;

      var component = _this.childRefs[key];

      if (component.componentWillEnter) {
        component.componentWillEnter(_this._handleDoneEntering.bind(_this, key));
      } else {
        _this._handleDoneEntering(key);
      }
    };

    _this._handleDoneEntering = function (key) {
      var component = _this.childRefs[key];
      if (component && component.componentDidEnter) {
        component.componentDidEnter();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (!currentChildMapping || !currentChildMapping.hasOwnProperty(key)) {
        // This was removed before it had fully entered. Remove it.
        _this.performLeave(key);
      }
    };

    _this.performLeave = function (key) {
      _this.currentlyTransitioningKeys[key] = true;

      var component = _this.childRefs[key];
      if (component.componentWillLeave) {
        component.componentWillLeave(_this._handleDoneLeaving.bind(_this, key));
      } else {
        // Note that this is somewhat dangerous b/c it calls setState()
        // again, effectively mutating the component before all the work
        // is done.
        _this._handleDoneLeaving(key);
      }
    };

    _this._handleDoneLeaving = function (key) {
      var component = _this.childRefs[key];

      if (component && component.componentDidLeave) {
        component.componentDidLeave();
      }

      delete _this.currentlyTransitioningKeys[key];

      var currentChildMapping = (0, _ChildMapping.getChildMapping)(_this.props.children);

      if (currentChildMapping && currentChildMapping.hasOwnProperty(key)) {
        // This entered again before it fully left. Add it again.
        _this.performEnter(key);
      } else {
        _this.setState(function (state) {
          var newChildren = _extends({}, state.children);
          delete newChildren[key];
          return { children: newChildren };
        });
      }
    };

    _this.childRefs = Object.create(null);

    _this.state = {
      children: (0, _ChildMapping.getChildMapping)(props.children)
    };
    return _this;
  }

  TransitionGroup.prototype.componentWillMount = function componentWillMount() {
    this.currentlyTransitioningKeys = {};
    this.keysToEnter = [];
    this.keysToLeave = [];
  };

  TransitionGroup.prototype.componentDidMount = function componentDidMount() {
    var initialChildMapping = this.state.children;
    for (var key in initialChildMapping) {
      if (initialChildMapping[key]) {
        this.performAppear(key);
      }
    }
  };

  TransitionGroup.prototype.componentWillReceiveProps = function componentWillReceiveProps(nextProps) {
    var nextChildMapping = (0, _ChildMapping.getChildMapping)(nextProps.children);
    var prevChildMapping = this.state.children;

    this.setState({
      children: (0, _ChildMapping.mergeChildMappings)(prevChildMapping, nextChildMapping)
    });

    for (var key in nextChildMapping) {
      var hasPrev = prevChildMapping && prevChildMapping.hasOwnProperty(key);
      if (nextChildMapping[key] && !hasPrev && !this.currentlyTransitioningKeys[key]) {
        this.keysToEnter.push(key);
      }
    }

    for (var _key in prevChildMapping) {
      var hasNext = nextChildMapping && nextChildMapping.hasOwnProperty(_key);
      if (prevChildMapping[_key] && !hasNext && !this.currentlyTransitioningKeys[_key]) {
        this.keysToLeave.push(_key);
      }
    }

    // If we want to someday check for reordering, we could do it here.
  };

  TransitionGroup.prototype.componentDidUpdate = function componentDidUpdate() {
    var keysToEnter = this.keysToEnter;
    this.keysToEnter = [];
    keysToEnter.forEach(this.performEnter);

    var keysToLeave = this.keysToLeave;
    this.keysToLeave = [];
    keysToLeave.forEach(this.performLeave);
  };

  TransitionGroup.prototype.render = function render() {
    var _this2 = this;

    // TODO: we could get rid of the need for the wrapper node
    // by cloning a single child
    var childrenToRender = [];

    var _loop = function _loop(key) {
      var child = _this2.state.children[key];
      if (child) {
        var isCallbackRef = typeof child.ref !== 'string';
        var factoryChild = _this2.props.childFactory(child);
        var ref = function ref(r) {
          _this2.childRefs[key] = r;
        };

         false ? (0, _warning2.default)(isCallbackRef, 'string refs are not supported on children of TransitionGroup and will be ignored. ' + 'Please use a callback ref instead: https://facebook.github.io/react/docs/refs-and-the-dom.html#the-ref-callback-attribute') : void 0;

        // Always chaining the refs leads to problems when the childFactory
        // wraps the child. The child ref callback gets called twice with the
        // wrapper and the child. So we only need to chain the ref if the
        // factoryChild is not different from child.
        if (factoryChild === child && isCallbackRef) {
          ref = (0, _chainFunction2.default)(child.ref, ref);
        }

        // You may need to apply reactive updates to a child as it is leaving.
        // The normal React way to do it won't work since the child will have
        // already been removed. In case you need this behavior you can provide
        // a childFactory function to wrap every child, even the ones that are
        // leaving.
        childrenToRender.push(_react2.default.cloneElement(factoryChild, {
          key: key,
          ref: ref
        }));
      }
    };

    for (var key in this.state.children) {
      _loop(key);
    }

    // Do not forward TransitionGroup props to primitive DOM nodes
    var props = _extends({}, this.props);
    delete props.transitionLeave;
    delete props.transitionName;
    delete props.transitionAppear;
    delete props.transitionEnter;
    delete props.childFactory;
    delete props.transitionLeaveTimeout;
    delete props.transitionEnterTimeout;
    delete props.transitionAppearTimeout;
    delete props.component;

    return _react2.default.createElement(this.props.component, props, childrenToRender);
  };

  return TransitionGroup;
}(_react2.default.Component);

TransitionGroup.displayName = 'TransitionGroup';

TransitionGroup.propTypes = propTypes;
TransitionGroup.defaultProps = defaultProps;

exports.default = TransitionGroup;
module.exports = exports['default'];

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getChildMapping = getChildMapping;
exports.mergeChildMappings = mergeChildMappings;

var _react = __webpack_require__(0);

/**
 * Given `this.props.children`, return an object mapping key to child.
 *
 * @param {*} children `this.props.children`
 * @return {object} Mapping of key to child
 */
function getChildMapping(children) {
  if (!children) {
    return children;
  }
  var result = {};
  _react.Children.map(children, function (child) {
    return child;
  }).forEach(function (child) {
    result[child.key] = child;
  });
  return result;
}

/**
 * When you're adding or removing children some may be added or removed in the
 * same render pass. We want to show *both* since we want to simultaneously
 * animate elements in and out. This function takes a previous set of keys
 * and a new set of keys and merges them with its best guess of the correct
 * ordering. In the future we may expose some of the utilities in
 * ReactMultiChild to make this easy, but for now React itself does not
 * directly have this concept of the union of prevChildren and nextChildren
 * so we implement it here.
 *
 * @param {object} prev prev children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @param {object} next next children as returned from
 * `ReactTransitionChildMapping.getChildMapping()`.
 * @return {object} a key set that contains all keys in `prev` and all keys
 * in `next` in a reasonable order.
 */
function mergeChildMappings(prev, next) {
  prev = prev || {};
  next = next || {};

  function getValueForKey(key) {
    if (next.hasOwnProperty(key)) {
      return next[key];
    }

    return prev[key];
  }

  // For each key of `next`, the list of keys to insert before that key in
  // the combined list
  var nextKeysPending = {};

  var pendingKeys = [];
  for (var prevKey in prev) {
    if (next.hasOwnProperty(prevKey)) {
      if (pendingKeys.length) {
        nextKeysPending[prevKey] = pendingKeys;
        pendingKeys = [];
      }
    } else {
      pendingKeys.push(prevKey);
    }
  }

  var i = void 0;
  var childMapping = {};
  for (var nextKey in next) {
    if (nextKeysPending.hasOwnProperty(nextKey)) {
      for (i = 0; i < nextKeysPending[nextKey].length; i++) {
        var pendingNextKey = nextKeysPending[nextKey][i];
        childMapping[nextKeysPending[nextKey][i]] = getValueForKey(pendingNextKey);
      }
    }
    childMapping[nextKey] = getValueForKey(nextKey);
  }

  // Finally, add the keys which didn't appear before any key in `next`
  for (i = 0; i < pendingKeys.length; i++) {
    childMapping[pendingKeys[i]] = getValueForKey(pendingKeys[i]);
  }

  return childMapping;
}

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/**
 * Copyright 2014-2015, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */



/**
 * Similar to invariant but only logs a warning if the condition is not met.
 * This can be used to log issues in development environments in critical
 * paths. Removing the logging code for production environments will keep the
 * same logic and follow the same code paths.
 */

var warning = function warning() {};

if (false) {
  warning = function warning(condition, format, args) {
    var len = arguments.length;
    args = new Array(len > 2 ? len - 2 : 0);
    for (var key = 2; key < len; key++) {
      args[key - 2] = arguments[key];
    }
    if (format === undefined) {
      throw new Error('`warning(condition, format, ...args)` requires a warning ' + 'message argument');
    }

    if (format.length < 10 || /^[s\W]*$/.test(format)) {
      throw new Error('The warning format should be able to uniquely identify this ' + 'warning. Please, use a more descriptive format than: ' + format);
    }

    if (!condition) {
      var argIndex = 0;
      var message = 'Warning: ' + format.replace(/%s/g, function () {
        return args[argIndex++];
      });
      if (typeof console !== 'undefined') {
        console.error(message);
      }
      try {
        // This error was thrown as a convenience so that you can use this stack
        // to find the callsite that caused this warning to fire.
        throw new Error(message);
      } catch (x) {}
    }
  };
}

module.exports = warning;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.findDOMNode = exports.render = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var internalInstanceKey = '__reactInternalInstance$' + Math.random().toString(36).slice(2);

function log() {
    console.log.apply(console, arguments);
}

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

    if (typeof value === "string") {
        dom.setAttribute("style", value);
    } else {
        dom.setAttribute("style", "");
        Object.assign(dom.style, value);
    }
});
regiterAttr("className", "dom", function (value, previousValue, dom) {
    dom.setAttribute("class", value);
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

regiterAttr("children", "", function (value, previousValue, dom) {});

regiterAttr("ref", "", function (value, previousValue, dom, wrapper, attrName) {
    var ref = void 0;
    var owner = renderingComponentStack[renderingComponentStack.length - 1];
    if (owner) {
        if (typeof value === "function") {
            owner.afterRenderQueue.push(value.bind(undefined, dom));
        } else {
            owner.afterRenderQueue.push(function () {
                owner._instance.refs[value] = dom;
            });
        }
    }
});

var events = [];
for (var property in document.documentElement) {
    var match = property.match(/^on(.+)/);
    if (match) {
        var event = match[1];
        var reactEvent = 'on' + event[0].toUpperCase() + event.slice(1);
        events.push({
            event: match[1],
            reactEvent: reactEvent
        });
    }
}

function onReactEvent(value, previousValue, dom, wrapper, attr) {
    var eventName = attr.match(/on(\w+)/i)[1].toLowerCase();

    if (wrapper.eventMap[eventName]) {
        dom.removeEventListener(eventName, wrapper.eventMap[eventName]);
        delete wrapper.eventMap[eventName];
    }
    var listener = function listener(e) {
        console.log('onReactEvent', eventName);
        e.nativeEvent = e;
        value(e);
    };
    dom.addEventListener(eventName, listener);
    wrapper.eventMap[eventName] = listener;
    //    log('onReactEvent', attr, value, eventName);

    //    dom.addEventListener(value.match, )
}

events.forEach(function (_ref) {
    var event = _ref.event,
        reactEvent = _ref.reactEvent;

    regiterAttr(reactEvent, 'dom', onReactEvent);
});

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
var cnt = 0;

function equals(x, y) {
    if (!((typeof x === 'undefined' ? 'undefined' : _typeof(x)) === 'object' && x && (typeof y === 'undefined' ? 'undefined' : _typeof(y)) === 'object' && y)) {
        if (x !== y) {
            return;
        }
    }
    cnt++;
    if (cnt > 100) {
        return;
    }
    for (var p in y) {
        if (p === "_owner") {
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

    for (var p in x) {
        if (typeof y[p] == 'undefined') {
            return false;
        }
    }

    return true;
}

function getChildren(parent, children) {
    var old = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    var owner = arguments[3];
    var context = arguments[4];

    console.log('getChildren', parent, children, old, owner, context);
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

    children.forEach(function () {
        var child = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
        var i = arguments[1];

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
                    //                    _renderedChildren[key] = new ReactDOMComponent(child, node, owner);
                    //                    if (isValidElement(dom[internalInstanceKey]._currentElement)) {
                    _renderedChildren[key] = findOwnerUntil(dom[internalInstanceKey], owner);
                    //                    } else {
                    //                        log("else")
                    //                        _renderedChildren[key] = null;
                    //                    }

                    //                    info('!!!!!!!!!!!!', _renderedChildren[key], owner)
                } else {
                    if (old[key] instanceof ReactCompositeComponentWrapper) {

                        if (child && old[key]._currentElement.type === child.type) {
                            lastNode = old[key].updateProps(child.props, context);
                        } else {
                            if (!child) {
                                old[key].remove();
                            }
                            var _dom = _create(child, {
                                owner: owner,
                                context: context
                            });
                            lastNode.parentElement.replaceChild(_dom, lastNode);
                            //                            lastNode = update(old[key]._hostNode, child, {
                            //                                componentRef: old[key]._instance,
                            //                                context
                            //                            });
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
    });

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

var renderingComponentStack = [];

var ReactCompositeComponentWrapper = function () {
    function ReactCompositeComponentWrapper(type, element, owner) {
        var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        _classCallCheck(this, ReactCompositeComponentWrapper);

        element = Object.assign({}, element);
        this._currentElement = element;
        if (owner) {
            this._currentElement._owner = owner;
        }

        if (type.defaultProps) {
            for (var i in type.defaultProps) {
                if (element.props[i] === undefined) {
                    element.props[i] = type.defaultProps[i];
                }
            }
        }

        if (isStateLess(type)) {
            this._instance = new StatelessComponent(type, context);
            this.type = "stateless";
        } else {
            this.type = "component";
        }

        if (isReactComponent(type)) {
            var component = new type(element.props, context);

            if (type.statics) {
                for (var _i in type.statics) {
                    type[_i] = type.statics[_i];
                }
            }
            if (type.getInitialState) {
                component.state = type.getInitialState.call(component);
            }
            if (type.getDefaultProps) {
                //deprecated
                type.defaultProps = type.getDefaultProps.call(component);
                if (type.defaultProps) {
                    for (var _i2 in type.defaultProps) {
                        if (element.props[_i2] === undefined) {
                            element.props[_i2] = type.defaultProps[_i2];
                        }
                    }
                }
                component.props = element.props;
            }

            component.context = context;
            this._instance = component;
            component._reactInternalInstance = this;
            if (!component.state) {
                component.state = {};
            }

            for (var attrName in element.props) {
                if (attrMap.component[attrName]) {
                    attrMap.component[attrName](element.props[attrName], undefined, component, this, attrName);
                }
            }

            if (component.componentDidMount) {
                setTimeout(function () {
                    _react2.default.asyncSetState(true);
                    component.componentDidMount();
                    _react2.default.asyncSetState(false);
                });
            }
        }

        Object.assign(this, {
            stateQueue: [],
            afterRenderQueue: []
        });
        return this.create(element.props, context);
    }

    _createClass(ReactCompositeComponentWrapper, [{
        key: 'transformRef',
        value: function transformRef(element) {
            var _this = this;

            var that = this;
            var refKey = element.props.ref;
            if (typeof refKey === "string") {
                element.props.ref = function (ref) {
                    log("this", that);
                    that._instance.refs[refKey] = ref;
                };
            }
            if (element.props.children) {
                element.props.children.forEach(function (child) {
                    if ((typeof child === 'undefined' ? 'undefined' : _typeof(child)) === "object" && child && child.props) {
                        _this.transformRef(child);
                    }
                });
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
        key: 'updateSelfContext',
        value: function updateSelfContext() {
            var contextThis = {};
            if (this._currentElement.type.contextTypes) {
                for (var i in this._currentElement.type.contextTypes) {
                    contextThis[i] = this._context[i];
                }
            }
            this._instance.context = contextThis;
        }
    }, {
        key: 'create',
        value: function create(props, context) {
            renderingComponentStack.push(this);
            var dom = void 0;
            var element = void 0;

            this._context = context;

            this.updateSelfContext();

            _react2.default.asyncSetState(true);
            this._instance.componentWillMount && this._instance.componentWillMount();
            _react2.default.asyncSetState(false);

            element = this.render();

            var childContext = this.getContext();

            var that = this;

            if (element) {
                this.transformRef(element); //they will remove this    
            }

            dom = _create(element, {
                owner: this,
                context: childContext
            });
            if (!dom) {
                log('wrong hostNode', element, this, dom);
            }

            this._hostNode = dom;
            renderingComponentStack.pop();
            this.handleAfterRenderQueue();
            return dom;
        }
    }, {
        key: 'updateProps',
        value: function updateProps(props, context) {
            log('updateProps', context);
            //        React.asyncSetState(true);
            this._instance.componentWillReceiveProps && this._instance.componentWillReceiveProps(props);
            //        React.asyncSetState(false);
            this._context = context;
            var instance = this._instance;
            this.updateSelfContext();
            return this.doUpdate(this._instance.state, props);
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
            log("render", this._instance, this._instance.render);

            log('renderingComponentStack', renderingComponentStack);
            var element = void 0;
            if (this.type === "stateless") {
                var props = this._currentElement.props;
                var context = this.getContext();
                log('render stateless', props, context, this._instance.render);
                element = this._instance.render.call(undefined, props, context);
            } else {
                element = this._instance.render();
            }
            if (Array.isArray(element)) {
                element = element[0];
            }
            log("render end", element);
            return element;
        }
    }, {
        key: 'remove',
        value: function remove() {
            _react2.default.asyncSetState(true);
            this._instance.componentWillUnmount && this._instance.componentWillUnmount();
            _react2.default.asyncSetState(false);
        }
    }, {
        key: 'handleStateQueue',
        value: function handleStateQueue(oldState, props) {
            var cbList = [];
            var stateList = [];

            var instance = this._instance;

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
            cbList.forEach(function (cb) {
                cb.call(instance);
            });

            this.doUpdate(state, this._instance.props);
        }
    }, {
        key: 'doUpdate',
        value: function doUpdate(nextState, nextProps) {
            var instance = this._instance;
            var result = void 0;
            var shouldRender = !instance.shouldComponentUpdate || instance.shouldComponentUpdate(nextProps, nextState);

            if (shouldRender) {
                var dom = this._hostNode;
                _react2.default.asyncSetState(true);
                instance.componentWillUpdate && instance.componentWillUpdate(nextProps, nextState);
                _react2.default.asyncSetState(false);
                var prevState = instance.state;
                var prevProps = instance.props;

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

                renderingComponentStack.push(this);
                var element = this.render();
                this.transformRef(element); //they will remove this
                result = update(dom, element, {
                    componentRef: instance,
                    context: this.getContext()
                });
                this._hostNode = result;
                renderingComponentStack.pop();
                this.handleAfterRenderQueue();
                _react2.default.asyncSetState(true);
                instance.componentDidUpdate && instance.componentDidUpdate(prevProps, prevState);
                _react2.default.asyncSetState(false);
            } else {
                instance.state = nextState;
                instance.props = nextProps;
                result = this._hostNode;
            }
            return result;
        }
    }]);

    return ReactCompositeComponentWrapper;
}();

var ReactDOMComponent = function ReactDOMComponent(type, element, owner) {
    _classCallCheck(this, ReactDOMComponent);

    element = Object.assign({}, element);
    this._currentElement = element;
    if (owner) {
        this._currentElement._owner = owner;
    }
    var dom = document.createElement(type);
    this._hostNode = dom;
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
                        log("do");
                        target.value = propsValue;
                        instance.previousOnchangeValue = propsValue;
                    }
                });
                execAfterCallback();
            }
        });
    }
    this.eventMap = {};
    dom[internalInstanceKey] = this;
    for (var attrName in element.props) {
        if (attrMap.dom[attrName]) {
            attrMap.dom[attrName](element.props[attrName], undefined, dom, this, attrName);
        } else {
            dom.setAttribute(attrName, element.props[attrName]);
        }
    }
};

var ReactDOMTextComponent = function ReactDOMTextComponent(element, dom, owner) {
    _classCallCheck(this, ReactDOMTextComponent);

    this._currentElement = element;
    this._hostNode = dom;
    if (owner) {
        this.owner = owner;
    }
};

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

    //    console.log('create', element, arguments[1])

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
    var instance = new ReactDOMComponent(type, element, owner);
    var dom = instance._hostNode;

    var children = [];

    if (props.children) {
        var result = getChildren(dom, props.children, {}, owner, context);
        instance._renderedChildren = result.children;
    }

    children.forEach(function (child) {
        dom.appendChild(child);
    });
    return dom;
}

function isComponent(type) {
    return typeof type === "function";
}

function isStateLess(type) {
    return isComponent(type) && !isReactComponent(type);
}

function isReactComponent(type) {
    //    console.log('checktype');
    //    console.dir(type);
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

    //    if (!dom) { //todo
    //        return create(element, {
    //            context
    //        });
    //    }
    log('update', dom, element, context, componentRef);
    var forceRender = false;
    if (!element && dom) {
        //dom to comment
        var comment = document.createComment("react-empty: ?");
        dom.parentElement && dom.parentElement.replaceChild(comment, dom);
        comment[internalInstanceKey] = dom[internalInstanceKey];
        return comment;
    }

    //    if (element && isStateLess(element.type)) {
    //        return update(dom, element.type(element.props));
    //    }

    if (dom.nodeType === 8 && element) {
        //comment, force render
        forceRender = true;
    }
    var instance = dom[internalInstanceKey];
    var element0 = instance._currentElement;

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
                    return createAndReplace();
                }
            } else {
                return createAndReplace();
            }
        } else if (element.type !== element0.type || forceRender) {
            log("type changed", element.type, element0.type);
            return createAndReplace();
        } else {}
    }

    //    function replace() {
    //        const newDom = create(element, {
    //            owner:componentRef._reactInternalInstance,
    //            context
    //        });
    //        if (dom.parentElement) {
    //            dom.parentElement.replaceChild(newDom, dom);
    //        }
    //
    //        return newDom;
    //    }
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

    if (!equals(element0.props, element.props)) {
        //props changed        
        if (isComponent(element.type)) {
            return owner.updateProps(element.props, context);
        } else {
            //normal dom            
            for (var attrName in element.props) {
                if (element0.props[attrName] !== element.props[attrName]) {
                    //                    log("not");
                    if (attrMap.dom[attrName]) {
                        attrMap.dom[attrName](element.props[attrName], element0.props[attrName], dom, instance, attrName);
                    } else {

                        dom.setAttribute(attrName, element.props[attrName]);
                    }
                }
            }
            element0.props = element.props;
        }
    }

    if (!isComponent(element.type)) {
        var oldChildren = instance._renderedChildren;
        var newChildren = getChildren(dom, element.props.children, oldChildren, owner, context).children;

        log('oldChildren', oldChildren);
        for (var i in oldChildren) {
            if (!newChildren[i] && oldChildren[i]) {
                oldChildren[i].remove();
                oldChildren[i]._hostNode.parentElement.removeChild(oldChildren[i]._hostNode);
            }
        }

        instance._renderedChildren = newChildren;
    }

    return dom;
}

function render(element, target) {
    //    $dom.attr("data-reactroot", "");
    if (target.childNodes[0]) {
        update(target.childNodes[0], element);
    } else {
        var created = _create(element);
        created.setAttribute('data-reactroot', "");
        target.appendChild(created);
    }

    //    const targetInstance = target.childNodes[0][internalInstanceKey];
    //    log(targetInstance)
}

function findDOMNode(component) {
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
//window.ReactDOM = exports;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function only(children) {
    return children[0];
}

function isText(key) {
    return typeof key === "string" || typeof key === "number";
}
//React.Children.map(children, function[(thisArg)])
//Invokes a function on every immediate child contained within children with this set to thisArg. If children is a keyed fragment or array it will be traversed: the function will never be passed the container objects. If children is null or undefined, returns null or undefined rather than an array.
function map(children, cb, thisArg) {
    console.log('map', children, cb);
    if ((typeof children === "undefined" ? "undefined" : _typeof(children)) === 'object' && children) {
        children = Object.keys(children).map(function (key) {
            return children[key];
        });
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
                child = Object.assign({}, child);
                child.key = key;
            } else if (Array.isArray(child)) {
                //array 
                child.forEach(function (ele, j) {
                    return recursion(ele, key + ":", j);
                });
                return;
            } else {
                child = Object.assign({}, child);
                if (child && isText(child.key)) {
                    key = preKey + "$" + child.key;
                    child.key = key;
                } else {

                    child.key = key;
                }
            }
            arr.push(cb.call(thisArg, child));
        }
        recursion(child, ".", i);
    });
    console.log('arr', arr);
    return arr;
    //    
    //    if (children && children.length === 1 && children[0] === null) {
    //        return [];
    //    }
    //
    //    if (Array.isArray(children)) {
    //        return children.map(cb, thisArg);
    //    } else if (typeof children === "object" && children) {
    //        const map = {}
    //        for (const i in children) {
    //            map[i] = cb.call(thisArg, children[i]);
    //        }
    //        return map;
    //    } else {
    //        return children;
    //    }
}

function forEach(children, cb, thisArg) {
    map.call(thisArg, children, cb, thisArg);
}

function count(children) {
    var count = 0;
    if ((typeof children === "undefined" ? "undefined" : _typeof(children)) === "object" && children) {
        for (var i in children) {
            count++;
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

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
//import $ from "jquery";


function createElement(type, props) {
    if (!props) {
        props = {};
    }

    var instance = {
        type: type,
        props: props
    };
    if (props.key) {
        instance.key = props.key;
        delete props.key;
    }

    for (var _len = arguments.length, children = Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
        children[_key - 2] = arguments[_key];
    }

    if (children.length) {
        instance.props.children = children;
    }
    return instance;
}

exports.default = createElement;
//window.React = exports;

/***/ })
/******/ ]);