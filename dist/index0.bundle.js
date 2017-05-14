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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.createClass = exports.PropTypes = exports.Children = exports.asyncSetState = exports.Component = exports.createElement = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _createElement = __webpack_require__(9);

var _createElement2 = _interopRequireDefault(_createElement);

var _children = __webpack_require__(8);

var _children2 = _interopRequireDefault(_children);

var _propTypes = __webpack_require__(6);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var isAsyncSetState = false;

function asyncSetState(value) {
    isAsyncSetState = value;
}

function createClass() {}

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
        key: "setState",
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
                instance.handleStateQueue(_this.state, _this.props);
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

var PropTypes = _propTypes2.default.PropTypes;
var _exports = {
    createElement: _createElement2.default,
    Component: Component,
    asyncSetState: asyncSetState,
    Children: _children2.default,
    PropTypes: PropTypes,
    createClass: createClass
};
console.log('Component', Component);
//if (window.React) {
//    exports = window.React;
//}
exports.createElement = _createElement2.default;
exports.Component = Component;
exports.asyncSetState = asyncSetState;
exports.Children = _children2.default;
exports.PropTypes = PropTypes;
exports.createClass = createClass;
exports.default = _exports;

window.React = _exports;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.render = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var internalInstanceKey = '__reactInternalInstance$' + Math.random().toString(36).slice(2);

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
    console.log('owner', owner);
    if (owner) {
        if (typeof value === "function") {
            owner.afterRenderQueue.push(value.bind(undefined, dom));
        } else {
            owner.afterRenderQueue.push(function () {
                owner._instance.refs[value] = dom;
            });
        }
    }

    console.log("arguments", arguments);
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
        e.nativeEvent = e;
        value(e);
    };
    dom.addEventListener(eventName, listener);
    wrapper.eventMap[eventName] = listener;
    //    console.log('onReactEvent', attr, value, eventName);

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

    console.log('getChildren', parent, children, old);
    if (!children) {
        return {
            children: {}
        };
    }
    var _renderedChildren = {};

    var prependParent = true;
    var lastNode = void 0;

    function append(node, key) {
        console.log("node", node, key);
        if (prependParent) {
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

                //                if (!old[key]) {
                //                    const node = create(child, parent[internalInstanceKey]._currentElement._owner);
                //                    append(node, key);
                //                    _renderedChildren[key] = new ReactDOMComponent(child, node);
                //                } else {
                //                    lastNode = update(old[key]._hostNode, child);
                //                    if (lastNode !== old[key]._hostNode) {
                //                        _renderedChildren[key] = new ReactDOMTextComponent(child, lastNode);
                //                    }
                //                }
            } else if (Array.isArray(child)) {
                //array 
                child.forEach(function (ele, j) {
                    recursion(ele, key + ':', j);
                });
            } else {
                if (child && child.props && isText(child.props.key)) {
                    key = preKey + '$' + child.props.key;
                }
                //                console.log(key, old[[key]]);
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
                    //                        console.log("else")
                    //                        _renderedChildren[key] = null;
                    //                    }

                    //                    console.info('!!!!!!!!!!!!', _renderedChildren[key], owner)
                } else {
                    if (old[key] instanceof ReactCompositeComponentWrapper) {
                        if (child && old[key]._currentElement.type === child.type) {
                            lastNode = old[key].updateProps(child.props, context);
                        } else {
                            if (!child) {
                                old[key].remove();
                            }
                            lastNode = update(old[key]._hostNode, child, {
                                componentRef: old[key]._instance,
                                context: context
                            });
                        }

                        //                        if (!child) {
                        //                            console.log(33)
                        //                        } else if (old[key]._currentElement.type === child.type) {
                        //                            console.log("2322")
                        //
                        //                        } else {
                        //                            console.log('555', old[key])
                        //                            old[key].remove();
                        //                            lastNode = update(old[key]._hostNode, child, {
                        //                                componentRef: old[key]._instance,
                        //                                context
                        //                            });
                        //                        }
                    } else {
                        console.log(3);
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
    this.render = function (props) {
        return type(props);
    };
};

var renderingComponentStack = [];

var ReactCompositeComponentWrapper = function () {
    function ReactCompositeComponentWrapper(type, element, owner) {
        var context = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};

        _classCallCheck(this, ReactCompositeComponentWrapper);

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

            _react2.default.asyncSetState(true);

            _react2.default.asyncSetState(false);
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

            var refKey = element.props.ref;
            if (typeof refKey === "string") {
                element.props.ref = function (ref) {
                    console.log("this", that);
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
            console.log(this);
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

            this._instance.componentWillMount && this._instance.componentWillMount();
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
            this._hostNode = dom;
            renderingComponentStack.pop();
            this.handleAfterRenderQueue();
            return dom;
        }
    }, {
        key: 'updateProps',
        value: function updateProps(props, context) {
            console.log('updateProps', context);
            this._instance.componentWillReceiveProps && this._instance.componentWillReceiveProps(props);
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
                console.log('cb', cb);
                cb(_this2._instance);
            });
            this.afterRenderQueue.length = 0;
        }
    }, {
        key: 'render',
        value: function render() {
            console.log("render");

            console.log('renderingComponentStack', renderingComponentStack);
            var element = void 0;
            if (this.type === "stateless") {
                console.log('render stateless', this._currentElement.props);
                element = this._instance.render.call(undefined, this._currentElement.props, this.getContext());
            } else {
                element = this._instance.render();
            }

            console.log("render end", element);
            return element;
        }
    }, {
        key: 'remove',
        value: function remove() {
            this._instance.componentWillUnmount && this._instance.componentWillUnmount();
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
                instance.componentWillUpdate && instance.componentWillUpdate(nextProps, nextState);
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
                instance.componentDidUpdate && instance.componentDidUpdate(prevProps, prevState);
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
                        console.log("do");
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

function isValidElement(element) {
    if ((typeof element === 'undefined' ? 'undefined' : _typeof(element)) !== "object" || !element) {
        return false;
    }
    return true;
}
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

    console.log('create', element, arguments[1]);

    if (!isValidElement(element)) {
        //comment
        var _dom = document.createComment("react-empty");
        _dom[internalInstanceKey] = {
            _currentElement: element,
            _hostNode: _dom
        };
        return _dom;
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
    return type.prototype instanceof _react2.default.Component;
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

    console.log('update', dom, element, context, componentRef);
    var forceRender = false;
    if (!element && dom) {
        //dom to comment
        var comment = document.createComment("react-empty: ?");
        dom.parentElement.replaceChild(comment, dom);
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

    if (isValidElement(element0)) {
        owner = element0._owner;
    } else {}

    var isHost = false;
    if (owner) {
        isHost = owner._hostNode === dom;
        ownerType = owner._currentElement.type;
    }

    function createAndReplace() {
        var newDom = _create(element, {
            context: context
        });
        dom.parentElement.replaceChild(newDom, dom);
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
                } else {}
            } else {
                console.log("else");
                return createAndReplace();
            }
        } else if (element.type !== element0.type || forceRender) {
            console.log("type changed", element.type, element0.type);
            return createAndReplace();
        } else {}
    }

    function replace() {
        var newDom = _create(element, {
            componentRef: componentRef,
            context: context
        });

        dom.parentElement.replaceChild(newDom, dom);
        return newDom;
    }
    if (forceRender || (typeof element0 === 'undefined' ? 'undefined' : _typeof(element0)) !== (typeof element === 'undefined' ? 'undefined' : _typeof(element))) {
        return replace();
    }

    if (isValidElement(element0) && isValidElement(element)) {
        if (element.type !== element0.type) {
            return replace();
        }
    } else {
        if (element !== element0) {
            return replace();
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
                    //                    console.log("not");
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

        console.log('oldChildren', oldChildren);
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
    //    console.log(targetInstance)
}
var _exports = {
    render: render
};
exports.render = render;
exports.default = _exports;
//window.ReactDOM = exports;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var B = function (_React$Component) {
    _inherits(B, _React$Component);

    function B() {
        _classCallCheck(this, B);

        return _possibleConstructorReturn(this, (B.__proto__ || Object.getPrototypeOf(B)).apply(this, arguments));
    }

    _createClass(B, [{
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log("unmount");
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'a',
                null,
                'test'
            );
        }
    }]);

    return B;
}(_react2.default.Component);

var App = function (_React$Component2) {
    _inherits(App, _React$Component2);

    function App(props) {
        _classCallCheck(this, App);

        var _this2 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        _this2.state = {
            a: 1
        };
        return _this2;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            var _this3 = this;

            setTimeout(function () {
                _this3.setState({
                    a: 0
                });
            }, 1000);
        }
    }, {
        key: 'componentWillUnmount',
        value: function componentWillUnmount() {
            console.log("unmount");
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                null,
                this.state.a && _react2.default.createElement(B, null) || null
            );
        }
    }]);

    return App;
}(_react2.default.Component);

(0, _reactDom.render)(_react2.default.createElement(App, null), document.getElementById('root'));

/***/ }),
/* 3 */
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
/* 4 */
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
/* 5 */
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



var emptyFunction = __webpack_require__(3);
var invariant = __webpack_require__(4);
var ReactPropTypesSecret = __webpack_require__(7);

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
/* 6 */
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
  module.exports = __webpack_require__(5)();
}

/***/ }),
/* 7 */
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
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
function only(children) {
    return children[0];
}
exports.default = {
    only: only
};

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
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

exports.default = createElement;
//window.React = exports;

/***/ })
/******/ ]);