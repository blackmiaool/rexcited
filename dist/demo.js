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
/******/ 	return __webpack_require__(__webpack_require__.s = 37);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
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
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
    if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
        var a = factory();
        for (var i in a) {
            ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object' ? exports : root)[i] = a[i];
        }
    }
})(undefined, function () {
    return webpackJsonp([0], {

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
                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            };

            var _react = __webpack_require__(0);

            var _react2 = _interopRequireDefault(_react);

            function _interopRequireDefault(obj) {
                return obj && obj.__esModule ? obj : { default: obj };
            }

            function _possibleConstructorReturn(self, call) {
                if (!self) {
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
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

                if ((typeof value === 'undefined' ? 'undefined' : _typeof(value)) === 'object') {
                    value = Object.assign({}, value);
                }

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
            regiterAttr("value", "dom", function (value, previousValue, dom) {
                if (dom.tagName === 'TEXTAREA') {
                    dom.value = value || '';
                } else {
                    dom.setAttribute("value", value);
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
                            if (y[p] === x[p]) {
                                continue;
                            } else {
                                return false;
                            }
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
                                        if (equals(old[key]._currentElement.props, child.props)) {
                                            lastNode = old[key]._hostNode;
                                        } else {
                                            lastNode = old[key].updateProps(child.props, context);
                                        }
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

                    if (type === 'input' || type === 'textarea') {
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
                        console.log('b');
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
                    created.setAttribute('data-rexcited', "");
                    target.appendChild(created);
                }
                handleQueue(globalAfterRenderQueue);
                firstRender = false;
            }

            function findDOMNode(component) {
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
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(module) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;

var _typeof2 = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

(function webpackUniversalModuleDefinition(root, factory) {
    if (( false ? 'undefined' : _typeof2(exports)) === 'object' && ( false ? 'undefined' : _typeof2(module)) === 'object') module.exports = factory();else if (true) !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));else {
        var a = factory();
        for (var i in a) {
            ((typeof exports === 'undefined' ? 'undefined' : _typeof2(exports)) === 'object' ? exports : root)[i] = a[i];
        }
    }
})(undefined, function () {
    return (/******/function (modules) {
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
        }(
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
                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
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
                }return call && ((typeof call === 'undefined' ? 'undefined' : _typeof2(call)) === "object" || typeof call === "function") ? call : self;
            }

            function _inherits(subClass, superClass) {
                if (typeof superClass !== "function" && superClass !== null) {
                    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === 'undefined' ? 'undefined' : _typeof2(superClass)));
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
                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
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
                return typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
            } : function (obj) {
                return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj === 'undefined' ? 'undefined' : _typeof2(obj);
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
        }])
    );
});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(0)(module)))

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./10adding_local_state_to_a_class.jsx": 4,
	"./11adding_lifecycle_methods_to_a_class.jsx": 5,
	"./12the_data_flows_down.jsx": 6,
	"./13handling_events.jsx": 7,
	"./14conditional_rendering.jsx": 8,
	"./15element_variables.jsx": 9,
	"./16inline_if_with_logical_operator.jsx": 10,
	"./17preventing_component_from_rendering.jsx": 11,
	"./18rendering_multiple_components.jsx": 12,
	"./19basic_list_component.jsx": 13,
	"./1hello_world.jsx": 14,
	"./20extracting_components_with_keys.jsx": 15,
	"./21keys_must_only_be_unique_among_siblings.jsx": 16,
	"./22embedding_map()_in_jsx.jsx": 17,
	"./23controlled_components.jsx": 18,
	"./24the_select_tag.jsx": 19,
	"./25handling_multiple_inputs.jsx": 20,
	"./26lifting_state_up.jsx": 21,
	"./27adding_a_second_input.jsx": 22,
	"./28lifting_state_up2.jsx": 23,
	"./2embedding_expressions_in_jsx.jsx": 25,
	"./30specialization.jsx": 26,
	"./31exposing_dom_refs_to_parent_components.jsx": 27,
	"./32uncontrolled_components.jsx": 28,
	"./33how_to_use_context.jsx": 29,
	"./3react_only_updates_what's_necessary.jsx": 30,
	"./4rendering_a_component.jsx": 31,
	"./5composing_components.jsx": 32,
	"./6extracting_components.jsx": 33,
	"./7extracting_components2.jsx": 34,
	"./8state_and_lifecycle.jsx": 35,
	"./9converting_a_function_to_a_class.jsx": 36
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 3;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "class Clock extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            date: new Date()\n        };\n    }\n\n    render() {\n        return (\n            <div>\n        <h1>Hello, world!</h1>\n        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>\n      </div>\n        );\n    }\n}\n\nReactDOM.render(\n    <Clock />,\n    document.getElementById('root')\n);\n";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "class Clock extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            date: new Date()\n        };\n    }\n\n    componentDidMount() {\n        this.timerID = setInterval(\n            () => this.tick(),\n            1000\n        );\n    }\n\n    componentWillUnmount() {\n        clearInterval(this.timerID);\n    }\n\n    tick() {\n        this.setState({\n            date: new Date()\n        });\n    }\n\n    render() {\n        return (\n            <div>\n        <h1>Hello, world!</h1>\n        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>\n      </div>\n        );\n    }\n}\n\nReactDOM.render(\n    <Clock />,\n    document.getElementById('root')\n);\n";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "function FormattedDate(props) {\n    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;\n}\n\nclass Clock extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            date: new Date()\n        };\n    }\n\n    componentDidMount() {\n        this.timerID = setInterval(\n            () => this.tick(),\n            1000\n        );\n    }\n\n    componentWillUnmount() {\n        clearInterval(this.timerID);\n    }\n\n    tick() {\n        this.setState({\n            date: new Date()\n        });\n    }\n\n    render() {\n        return (\n            <div>\n        <h1>Hello, world!</h1>\n        <FormattedDate date={this.state.date} />\n      </div>\n        );\n    }\n}\n\nfunction App() {\n    return (\n        <div>\n      <Clock />\n      <Clock />\n      <Clock />\n    </div>\n    );\n}\n\nReactDOM.render(<App />, document.getElementById('root'));\n";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "class Toggle extends React.Component {\n    constructor(props) {\n        super(props);\n        this.state = {\n            isToggleOn: true\n        };\n\n        // This binding is necessary to make `this` work in the callback\n        this.handleClick = this.handleClick.bind(this);\n    }\n\n    handleClick() {\n        this.setState(prevState => ({\n            isToggleOn: !prevState.isToggleOn\n        }));\n    }\n\n    render() {\n        return (\n            <button onClick={this.handleClick}>\n        {this.state.isToggleOn ? 'ON' : 'OFF'}\n      </button>\n        );\n    }\n}\n\nReactDOM.render(\n    <Toggle />,\n    document.getElementById('root')\n);\n";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "function UserGreeting(props) {\n    return <h1>Welcome back!</h1>;\n}\n\nfunction GuestGreeting(props) {\n    return <h1>Please sign up.</h1>;\n}\n\nfunction Greeting(props) {\n    const isLoggedIn = props.isLoggedIn;\n    if (isLoggedIn) {\n        return <UserGreeting />;\n    }\n    return <GuestGreeting />;\n}\n\nReactDOM.render(\n    // Try changing to isLoggedIn={true}:\n    <Greeting isLoggedIn={false} />,\n    document.getElementById('root')\n);\n";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "class LoginControl extends React.Component {\r\n  constructor(props) {\r\n    super(props);\r\n    this.handleLoginClick = this.handleLoginClick.bind(this);\r\n    this.handleLogoutClick = this.handleLogoutClick.bind(this);\r\n    this.state = {isLoggedIn: false};\r\n  }\r\n\r\n  handleLoginClick() {\r\n    this.setState({isLoggedIn: true});\r\n  }\r\n\r\n  handleLogoutClick() {\r\n    this.setState({isLoggedIn: false});\r\n  }\r\n\r\n  render() {\r\n    const isLoggedIn = this.state.isLoggedIn;\r\n    \r\n    let button = null;\r\n    if (isLoggedIn) {\r\n      button = <LogoutButton onClick={this.handleLogoutClick} />;\r\n    } else {\r\n      button = <LoginButton onClick={this.handleLoginClick} />;\r\n    }\r\n\r\n    return (\r\n      <div>\r\n        <Greeting isLoggedIn={isLoggedIn} />\r\n        {button}\r\n      </div>\r\n    );\r\n  }\r\n}\r\n\r\nfunction UserGreeting(props) {\r\n  return <h1>Welcome back!</h1>;\r\n}\r\n\r\nfunction GuestGreeting(props) {\r\n  return <h1>Please sign up.</h1>;\r\n}\r\n\r\nfunction Greeting(props) {\r\n  const isLoggedIn = props.isLoggedIn;\r\n  if (isLoggedIn) {\r\n    return <UserGreeting />;\r\n  }\r\n  return <GuestGreeting />;\r\n}\r\n\r\nfunction LoginButton(props) {\r\n  return (\r\n    <button onClick={props.onClick}>\r\n      Login\r\n    </button>\r\n  );\r\n}\r\n\r\nfunction LogoutButton(props) {\r\n  return (\r\n    <button onClick={props.onClick}>\r\n      Logout\r\n    </button>\r\n  );\r\n}\r\n\r\nReactDOM.render(\r\n  <LoginControl />,\r\n  document.getElementById('root')\r\n);\r\n";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "function Mailbox(props) {\r\n    const unreadMessages = props.unreadMessages;\r\n    return (\r\n        <div>\r\n      <h1>Hello!</h1>\r\n      {unreadMessages.length > 0 &&\r\n        <h2>\r\n          You have {unreadMessages.length} unread messages.\r\n        </h2>\r\n      }\r\n    </div>\r\n    );\r\n}\r\n\r\nconst messages = ['React', 'Re: React', 'Re:Re: React'];\r\nReactDOM.render(\r\n    <Mailbox unreadMessages={messages} />,\r\n    document.getElementById('root')\r\n);";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "function WarningBanner(props) {\r\n    if (!props.warn) {\r\n        return null;\r\n    }\r\n\r\n    return (\r\n        <div className=\"warning\">\r\n      Warning!\r\n    </div>\r\n    );\r\n}\r\n\r\nclass Page extends React.Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            showWarning: true\r\n        }\r\n        this.handleToggleClick = this.handleToggleClick.bind(this);\r\n    }\r\n\r\n    handleToggleClick() {\r\n        this.setState(prevState => ({\r\n            showWarning: !prevState.showWarning\r\n        }));\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <div>\r\n        <WarningBanner warn={this.state.showWarning} />\r\n        <button onClick={this.handleToggleClick}>\r\n          {this.state.showWarning ? 'Hide' : 'Show'}\r\n        </button>\r\n      </div>\r\n        );\r\n    }\r\n}\r\n\r\nReactDOM.render(\r\n    <Page />,\r\n    document.getElementById('root')\r\n);";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "const numbers = [1, 2, 3, 4, 5];\r\nconst listItems = numbers.map((numbers) =>\r\n    <li>{numbers}</li>\r\n);\r\n\r\nReactDOM.render(\r\n    <ul>{listItems}</ul>,\r\n    document.getElementById('root')\r\n);";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "function NumberList(props) {\r\n    const numbers = props.numbers;\r\n    const listItems = numbers.map((number) =>\r\n        <li key={number.toString()}>\r\n      {number}\r\n    </li>\r\n    );\r\n    return (\r\n        <ul>{listItems}</ul>\r\n    );\r\n}\r\n\r\nconst numbers = [1, 2, 3, 4, 5];\r\nReactDOM.render(\r\n    <NumberList numbers={numbers} />,\r\n    document.getElementById('root')\r\n);";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "ReactDOM.render(\n    <h1>Hello, world!</h1>,\n    document.getElementById('root')\n);\n";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "function ListItem(props) {\r\n    // Correct! There is no need to specify the key here:\r\n    return <li>{props.value}</li>;\r\n}\r\n\r\nfunction NumberList(props) {\r\n    const numbers = props.numbers;\r\n    const listItems = numbers.map((number) =>\r\n        // Correct! Key should be specified inside the array.\r\n        <ListItem key={number.toString()}\r\n              value={number} />\r\n    );\r\n    return (\r\n        <ul>\r\n      {listItems}\r\n    </ul>\r\n    );\r\n}\r\n\r\nconst numbers = [1, 2, 3, 4, 5];\r\nReactDOM.render(\r\n    <NumberList numbers={numbers} />,\r\n    document.getElementById('root')\r\n);";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "function Blog(props) {\r\n    const sidebar = (\r\n        <ul>\r\n      {props.posts.map((post) =>\r\n        <li key={post.id}>\r\n          {post.title}\r\n        </li>\r\n      )}\r\n    </ul>\r\n    );\r\n    const content = props.posts.map((post) =>\r\n        <div key={post.id}>\r\n      <h3>{post.title}</h3>\r\n      <p>{post.content}</p>\r\n    </div>\r\n    );\r\n    return (\r\n        <div>\r\n      {sidebar}\r\n      <hr />\r\n      {content}\r\n    </div>\r\n    );\r\n}\r\n\r\nconst posts = [\r\n    {\r\n        id: 1,\r\n        title: 'Hello World',\r\n        content: 'Welcome to learning React!'\r\n    },\r\n    {\r\n        id: 2,\r\n        title: 'Installation',\r\n        content: 'You can install React from npm.'\r\n    }\r\n];\r\nReactDOM.render(\r\n    <Blog posts={posts} />,\r\n    document.getElementById('root')\r\n);";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "function ListItem(props) {\r\n    return <li>{props.value}</li>;\r\n}\r\n\r\nfunction NumberList(props) {\r\n    const numbers = props.numbers;\r\n    return (\r\n        <ul>\r\n      {numbers.map((number) =>\r\n        <ListItem key={number.toString()}\r\n                  value={number} />\r\n      )}\r\n    </ul>\r\n    );\r\n}\r\n\r\nconst numbers = [1, 2, 3, 4, 5];\r\nReactDOM.render(\r\n    <NumberList numbers={numbers} />,\r\n    document.getElementById('root')\r\n);";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "class NameForm extends React.Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            value: ''\r\n        };\r\n\r\n        this.handleChange = this.handleChange.bind(this);\r\n        this.handleSubmit = this.handleSubmit.bind(this);\r\n    }\r\n\r\n    handleChange(event) {\r\n        this.setState({\r\n            value: event.target.value\r\n        });\r\n    }\r\n\r\n    handleSubmit(event) {\r\n        alert('A name was submitted: ' + this.state.value);\r\n        event.preventDefault();\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <form onSubmit={this.handleSubmit}>\r\n        <label>\r\n          Name:\r\n          <input type=\"text\" value={this.state.value} onChange={this.handleChange} />\r\n        </label>\r\n        <input type=\"submit\" value=\"Submit\" />\r\n      </form>\r\n        );\r\n    }\r\n}\r\n\r\nReactDOM.render(\r\n    <NameForm />,\r\n    document.getElementById('root')\r\n);";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "class FlavorForm extends React.Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            value: 'coconut'\r\n        };\r\n\r\n        this.handleChange = this.handleChange.bind(this);\r\n        this.handleSubmit = this.handleSubmit.bind(this);\r\n    }\r\n\r\n    handleChange(event) {\r\n        this.setState({\r\n            value: event.target.value\r\n        });\r\n    }\r\n\r\n    handleSubmit(event) {\r\n        alert('Your favorite flavor is: ' + this.state.value);\r\n        event.preventDefault();\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <form onSubmit={this.handleSubmit}>\r\n        <label>\r\n          Pick your favorite La Croix flavor:\r\n          <select value={this.state.value} onChange={this.handleChange}>\r\n            <option value=\"grapefruit\">Grapefruit</option>\r\n            <option value=\"lime\">Lime</option>\r\n            <option value=\"coconut\">Coconut</option>\r\n            <option value=\"mango\">Mango</option>\r\n          </select>\r\n        </label>\r\n        <input type=\"submit\" value=\"Submit\" />\r\n      </form>\r\n        );\r\n    }\r\n}\r\n\r\nReactDOM.render(\r\n    <FlavorForm />,\r\n    document.getElementById('root')\r\n);";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "class Reservation extends React.Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.state = {\r\n            isGoing: true,\r\n            numberOfGuests: 2\r\n        };\r\n\r\n        this.handleInputChange = this.handleInputChange.bind(this);\r\n    }\r\n\r\n    handleInputChange(event) {\r\n        const target = event.target;\r\n        const value = target.type === 'checkbox' ? target.checked : target.value;\r\n        const name = target.name;\r\n\r\n        this.setState({\r\n      [name]: value\r\n        });\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <form>\r\n        <label>\r\n          Is going:\r\n          <input\r\n            name=\"isGoing\"\r\n            type=\"checkbox\"\r\n            checked={this.state.isGoing}\r\n            onChange={this.handleInputChange} />\r\n        </label>\r\n        <br />\r\n        <label>\r\n          Number of guests:\r\n          <input\r\n            name=\"numberOfGuests\"\r\n            type=\"number\"\r\n            value={this.state.numberOfGuests}\r\n            onChange={this.handleInputChange} />\r\n        </label>\r\n      </form>\r\n        );\r\n    }\r\n}\r\n\r\nReactDOM.render(\r\n    <Reservation />,\r\n    document.getElementById('root')\r\n);";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "function BoilingVerdict(props) {\r\n    if (props.celsius >= 100) {\r\n        return <p>The water would boil.</p>;\r\n    }\r\n    return <p>The water would not boil.</p>;\r\n}\r\n\r\nclass Calculator extends React.Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.handleChange = this.handleChange.bind(this);\r\n        this.state = {\r\n            temperature: ''\r\n        };\r\n    }\r\n\r\n    handleChange(e) {\r\n        this.setState({\r\n            temperature: e.target.value\r\n        });\r\n    }\r\n\r\n    render() {\r\n        const temperature = this.state.temperature;\r\n        return (\r\n            <fieldset>\r\n        <legend>Enter temperature in Celsius:</legend>\r\n        <input\r\n          value={temperature}\r\n          onChange={this.handleChange} />\r\n        <BoilingVerdict\r\n          celsius={parseFloat(temperature)} />\r\n      </fieldset>\r\n        );\r\n    }\r\n}\r\n\r\nReactDOM.render(\r\n    <Calculator />,\r\n    document.getElementById('root')\r\n);";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "const scaleNames = {\r\n    c: 'Celsius',\r\n    f: 'Fahrenheit'\r\n};\r\n\r\nclass TemperatureInput extends React.Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.handleChange = this.handleChange.bind(this);\r\n        this.state = {\r\n            temperature: ''\r\n        };\r\n    }\r\n\r\n    handleChange(e) {\r\n        this.setState({\r\n            temperature: e.target.value\r\n        });\r\n    }\r\n\r\n    render() {\r\n        const temperature = this.state.temperature;\r\n        const scale = this.props.scale;\r\n        return (\r\n            <fieldset>\r\n        <legend>Enter temperature in {scaleNames[scale]}:</legend>\r\n        <input value={temperature}\r\n               onChange={this.handleChange} />\r\n      </fieldset>\r\n        );\r\n    }\r\n}\r\n\r\nclass Calculator extends React.Component {\r\n    render() {\r\n        return (\r\n            <div>\r\n        <TemperatureInput scale=\"c\" />\r\n        <TemperatureInput scale=\"f\" />\r\n      </div>\r\n        );\r\n    }\r\n}\r\n\r\nReactDOM.render(\r\n    <Calculator />,\r\n    document.getElementById('root')\r\n);";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "const scaleNames = {\r\n    c: 'Celsius',\r\n    f: 'Fahrenheit'\r\n};\r\n\r\nfunction toCelsius(fahrenheit) {\r\n    return (fahrenheit - 32) * 5 / 9;\r\n}\r\n\r\nfunction toFahrenheit(celsius) {\r\n    return (celsius * 9 / 5) + 32;\r\n}\r\n\r\nfunction tryConvert(temperature, convert) {\r\n    const input = parseFloat(temperature);\r\n    if (Number.isNaN(input)) {\r\n        return '';\r\n    }\r\n    const output = convert(input);\r\n    const rounded = Math.round(output * 1000) / 1000;\r\n    return rounded.toString();\r\n}\r\n\r\nfunction BoilingVerdict(props) {\r\n    if (props.celsius >= 100) {\r\n        return <p>The water would boil.</p>;\r\n    }\r\n    return <p>The water would not boil.</p>;\r\n}\r\n\r\nclass TemperatureInput extends React.Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.handleChange = this.handleChange.bind(this);\r\n    }\r\n\r\n    handleChange(e) {\r\n        this.props.onTemperatureChange(e.target.value);\r\n    }\r\n\r\n    render() {\r\n        const temperature = this.props.temperature;\r\n        const scale = this.props.scale;\r\n        return (\r\n            <fieldset>\r\n        <legend>Enter temperature in {scaleNames[scale]}:</legend>\r\n        <input value={temperature}\r\n               onChange={this.handleChange} />\r\n      </fieldset>\r\n        );\r\n    }\r\n}\r\n\r\nclass Calculator extends React.Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.handleCelsiusChange = this.handleCelsiusChange.bind(this);\r\n        this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);\r\n        this.state = {\r\n            temperature: '',\r\n            scale: 'c'\r\n        };\r\n    }\r\n\r\n    handleCelsiusChange(temperature) {\r\n        this.setState({\r\n            scale: 'c',\r\n            temperature\r\n        });\r\n    }\r\n\r\n    handleFahrenheitChange(temperature) {\r\n        this.setState({\r\n            scale: 'f',\r\n            temperature\r\n        });\r\n    }\r\n\r\n    render() {\r\n        const scale = this.state.scale;\r\n        const temperature = this.state.temperature;\r\n        const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;\r\n        const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;\r\n\r\n        return (\r\n            <div>\r\n        <TemperatureInput\r\n          scale=\"c\"\r\n          temperature={celsius}\r\n          onTemperatureChange={this.handleCelsiusChange} />\r\n        <TemperatureInput\r\n          scale=\"f\"\r\n          temperature={fahrenheit}\r\n          onTemperatureChange={this.handleFahrenheitChange} />\r\n        <BoilingVerdict\r\n          celsius={parseFloat(celsius)} />\r\n      </div>\r\n        );\r\n    }\r\n}\r\n\r\nReactDOM.render(\r\n    <Calculator />,\r\n    document.getElementById('root')\r\n);";

/***/ }),
/* 24 */,
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "function formatName(user) {\n    return user.firstName + ' ' + user.lastName;\n}\n\nconst user = {\n    firstName: 'Harper',\n    lastName: 'Perez'\n};\n\nconst element = (\n    <h1>\n    Hello, {formatName(user)}!\n  </h1>\n);\n\nReactDOM.render(\n    element,\n    document.getElementById('root')\n);\n";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "function FancyBorder(props) {\r\n    return (\r\n        <div className={'FancyBorder FancyBorder-' + props.color}>\r\n      {props.children}\r\n    </div>\r\n    );\r\n}\r\n\r\nfunction Dialog(props) {\r\n    return (\r\n        <FancyBorder color=\"blue\">\r\n      <h1 className=\"Dialog-title\">\r\n        {props.title}\r\n      </h1>\r\n      <p className=\"Dialog-message\">\r\n        {props.message}\r\n      </p>\r\n      {props.children}\r\n    </FancyBorder>\r\n    );\r\n}\r\n\r\nclass SignUpDialog extends React.Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.handleChange = this.handleChange.bind(this);\r\n        this.handleSignUp = this.handleSignUp.bind(this);\r\n        this.state = {\r\n            login: ''\r\n        };\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <Dialog title=\"Mars Exploration Program\"\r\n              message=\"How should we refer to you?\">\r\n        <input value={this.state.login}\r\n               onChange={this.handleChange} />\r\n        <button onClick={this.handleSignUp}>\r\n          Sign Me Up!\r\n        </button>\r\n      </Dialog>\r\n        );\r\n    }\r\n\r\n    handleChange(e) {\r\n        this.setState({\r\n            login: e.target.value\r\n        });\r\n    }\r\n\r\n    handleSignUp() {\r\n        alert(`Welcome aboard, ${this.state.login}!`);\r\n    }\r\n}\r\n\r\nReactDOM.render(\r\n    <SignUpDialog />,\r\n    document.getElementById('root')\r\n);";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "function CustomTextInput(props) {\r\n    return (\r\n        <div>\r\n      <input ref={props.inputRef} />\r\n    </div>\r\n    );\r\n}\r\n\r\nfunction Parent(props) {\r\n    return (\r\n        <div>\r\n      My input: <CustomTextInput inputRef={props.inputRef} />\r\n    </div>\r\n    );\r\n}\r\n\r\n\r\nclass Grandparent extends React.Component {\r\n    render() {\r\n        return (\r\n            <Parent\r\n        inputRef={el => this.inputElement = el}\r\n      />\r\n        );\r\n    }\r\n}\r\n\r\nReactDOM.render(\r\n    <Grandparent />,\r\n    document.getElementById('root')\r\n);";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "class NameForm extends React.Component {\r\n    constructor(props) {\r\n        super(props);\r\n        this.handleSubmit = this.handleSubmit.bind(this);\r\n    }\r\n\r\n    handleSubmit(event) {\r\n        alert('A name was submitted: ' + this.input.value);\r\n        event.preventDefault();\r\n    }\r\n\r\n    render() {\r\n        return (\r\n            <form onSubmit={this.handleSubmit}>\r\n      <label>\r\n        Name:\r\n        <input\r\n          defaultValue=\"Bob\"\r\n          type=\"text\"\r\n          ref={(input) => this.input = input} />\r\n      </label>\r\n      <input type=\"submit\" value=\"Submit\" />\r\n    </form>\r\n        );\r\n    }\r\n}\r\n\r\nReactDOM.render(\r\n    <NameForm />,\r\n    document.getElementById('root')\r\n);";

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "class Button extends React.Component {\r\n    render() {\r\n        return (\r\n            <button style={{background: this.props.color}}>\r\n        {this.props.children}\r\n      </button>\r\n        );\r\n    }\r\n}\r\n\r\nclass Message extends React.Component {\r\n    render() {\r\n        return (\r\n            <div>\r\n        {this.props.text} <Button color={this.props.color}>Delete</Button>\r\n      </div>\r\n        );\r\n    }\r\n}\r\n\r\nclass MessageList extends React.Component {\r\n    render() {\r\n        const color = \"purple\";\r\n        const children = this.props.messages.map((message, i) =>\r\n            <Message text={message.text} color={color}  key={i}/>\r\n        );\r\n        return <div>{children}</div>;\r\n    }\r\n}\r\nconst messages = [{\r\n    text: 'a'\r\n}, {\r\n    text: 'b'\r\n}, {\r\n    text: 'c'\r\n}, ];\r\n\r\nReactDOM.render(\r\n    <MessageList messages={messages}/>,\r\n    document.getElementById('root')\r\n);\r\n";

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "function tick() {\n    const element = (\n        <div>\n      <h1>Hello, world!</h1>\n      <h2>It is {new Date().toLocaleTimeString()}.</h2>\n    </div>\n    );\n    ReactDOM.render(\n        element,\n        document.getElementById('root')\n    );\n}\n\nsetInterval(tick, 1000);\n";

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "function Welcome(props) {\n    return <h1>Hello, {props.name}</h1>;\n}\n\nconst element = <Welcome name=\"Sara\" />;\nReactDOM.render(\n    element,\n    document.getElementById('root')\n);\n";

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "function Welcome(props) {\n    return <h1>Hello, {props.name}</h1>;\n}\n\nfunction App() {\n    return (\n        <div>\n      <Welcome name=\"Sara\" />\n      <Welcome name=\"Cahal\" />\n      <Welcome name=\"Edite\" />\n    </div>\n    );\n}\n\nReactDOM.render(\n    <App />,\n    document.getElementById('root')\n);\n";

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "function formatDate(date) {\n    return date.toLocaleDateString();\n}\n\nfunction Comment(props) {\n    return (\n        <div className=\"Comment\">\n      <div className=\"UserInfo\">\n        <img className=\"Avatar\"\n             src={props.author.avatarUrl}\n             alt={props.author.name} />\n        <div className=\"UserInfo-name\">\n          {props.author.name}\n        </div>\n      </div>\n      <div className=\"Comment-text\">\n        {props.text}\n      </div>\n      <div className=\"Comment-date\">\n        {formatDate(props.date)}\n      </div>\n    </div>\n    );\n}\n\nconst comment = {\n    date: new Date(),\n    text: 'I hope you enjoy learning React!',\n    author: {\n        name: 'Hello Kitty',\n        avatarUrl: 'http://placekitten.com/g/64/64'\n    }\n};\nReactDOM.render(\n    <Comment\n    date={comment.date}\n    text={comment.text}\n    author={comment.author} />,\n    document.getElementById('root')\n);\n";

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "function formatDate(date) {\n    return date.toLocaleDateString();\n}\n\nfunction Avatar(props) {\n    return (\n        <img className=\"Avatar\"\n         src={props.user.avatarUrl}\n         alt={props.user.name} />\n    );\n}\n\nfunction UserInfo(props) {\n    return (\n        <div className=\"UserInfo\">\n      <Avatar user={props.user} />\n      <div className=\"UserInfo-name\">\n        {props.user.name}\n      </div>\n    </div>\n    );\n}\n\nfunction Comment(props) {\n    return (\n        <div className=\"Comment\">\n      <UserInfo user={props.author} />\n      <div className=\"Comment-text\">\n        {props.text}\n      </div>\n      <div className=\"Comment-date\">\n        {formatDate(props.date)}\n      </div>\n    </div>\n    );\n}\n\nconst comment = {\n    date: new Date(),\n    text: 'I hope you enjoy learning React!',\n    author: {\n        name: 'Hello Kitty',\n        avatarUrl: 'http://placekitten.com/g/64/64'\n    }\n};\nReactDOM.render(\n    <Comment\n    date={comment.date}\n    text={comment.text}\n    author={comment.author} />,\n    document.getElementById('root')\n);\n";

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "function Clock(props) {\n    return (\n        <div>\n      <h1>Hello, world!</h1>\n      <h2>It is {props.date.toLocaleTimeString()}.</h2>\n    </div>\n    );\n}\n\nfunction tick() {\n    ReactDOM.render(\n        <Clock date={new Date()} />,\n        document.getElementById('root')\n    );\n}\n\nsetInterval(tick, 1000);\n";

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


module.exports = "class Clock extends React.Component {\n    render() {\n        return (\n            <div>\n        <h1>Hello, world!</h1>\n        <h2>It is {this.props.date.toLocaleTimeString()}.</h2>\n      </div>\n        );\n    }\n}\n\nfunction tick() {\n    ReactDOM.render(\n        <Clock date={new Date()} />,\n        document.getElementById('root')\n    );\n}\n\nsetInterval(tick, 1000);\n";

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(2);

var _react2 = _interopRequireDefault(_react);

var _reactDom = __webpack_require__(1);

var _reactDom2 = _interopRequireDefault(_reactDom);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var context = __webpack_require__(3);

function path2name(path) {
    path = path.match(/\d+([\w']+)/)[1];

    function replace(match, header) {
        if (match[0] === '_') {
            return ' ' + header.toUpperCase();
        } else {
            return header.toUpperCase();
        }
    }
    return path.replace(/^(\w)/, replace).replace(/_(\w)/g, replace);
}

var testCases = context.keys().slice().sort(function (a, b) {
    var reg = /\.\/(\d+)/;
    a = a.match(reg)[1] * 1;
    b = b.match(reg)[1] * 1;
    return a - b;
}).map(function (key) {
    return {
        path: key,
        name: path2name(key),
        code: context(key)
    };
});

Object.keys(testCases).forEach(function (i) {
    var testCase = testCases[i];
    testCases[testCase.name] = testCase;
    delete testCases[i];
});
console.log(testCases);

function bindThis(that, arr) {
    arr.forEach(function (funcName) {
        that[funcName] = that[funcName].bind(that);
    });
}

var Header = function (_React$Component) {
    _inherits(Header, _React$Component);

    function Header(props) {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).call(this, props));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return _react2.default.createElement(
                'ul',
                { id: 'case-select' },
                this.props.list.map(function (li) {
                    return _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            'button',
                            { onClick: _this2.props.onSelect.bind(undefined, li) },
                            li
                        )
                    );
                })
            );
        }
    }]);

    return Header;
}(_react2.default.Component);

//  <Editor/>
//            <Iframe/>

var Editor = function (_React$Component2) {
    _inherits(Editor, _React$Component2);

    function Editor(props) {
        _classCallCheck(this, Editor);

        return _possibleConstructorReturn(this, (Editor.__proto__ || Object.getPrototypeOf(Editor)).call(this, props));
        //        bindThis(this, ['onChange']);

    }

    _createClass(Editor, [{
        key: 'onEditor',
        value: function onEditor(ref) {
            var _this4 = this;

            console.log('ref', ref);
            setTimeout(function () {
                _this4.editor = CodeMirror.fromTextArea(ref, {
                    lineNumbers: true,
                    mode: "jsx"
                });
                _this4.editor.on("change", function (editor) {
                    var code = editor.getValue();
                    _this4.code = code;
                    _this4.props.onChange(code);
                });
            });
        }
    }, {
        key: 'componentWillReceiveProps',
        value: function componentWillReceiveProps(props) {
            if (props.code === this.code) {
                return;
            }
            this.editor && this.editor.setValue(props.code);
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                { style: 'display:inline-block;', id: 'editor' },
                _react2.default.createElement('textarea', { ref: this.onEditor, name: '', id: '', cols: '50', rows: '30', value: this.props.code })
            );
        }
    }]);

    return Editor;
}(_react2.default.Component);

var preScript = ' var origin = location.origin;\n        parent.postMessage(name, origin);\n        var interval_id = setInterval(function(){}, 1e5);\n        for (var i = 1; i <= interval_id; i++){\n            clearInterval(i);            \n        } ';

var App = function (_React$Component3) {
    _inherits(App, _React$Component3);

    function App(props) {
        _classCallCheck(this, App);

        var _this5 = _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).call(this, props));

        bindThis(_this5, ['onSelect', 'onChange']);
        _this5.list = [];
        for (var name in testCases) {
            _this5.list.push(name);
        }
        setTimeout(function () {
            _this5.updatePreview();
        }, 100);
        window.addEventListener('message', function (e) {
            var msg = e.data;
            var obj = _defineProperty({}, msg, true);
            _this5.setState(obj);
        });
        return _this5;
    }

    _createClass(App, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.setState({
                code: 'ReactDOM.render(\n    <h1>Hello, world!</h1>,\n    document.getElementById(\'root\')\n);'
            });
        }
    }, {
        key: 'setCode',
        value: function setCode(iframe, code) {
            var doc = iframe.contentDocument;
            doc.open();
            doc.write(code);
            doc.close();
        }
    }, {
        key: 'updatePreview',
        value: function updatePreview() {
            var _this6 = this;

            console.trace('updatePreview');
            if (!this.refs.preview) {
                return;
            }
            this.setState({
                react: false,
                rexcited: false
            });
            setTimeout(function () {
                _this6.setCode(_this6.refs['preview'], '\n<!DOCTYPE html>\n<html>\n\n<head>\n    <meta charset="UTF-8" />\n    <title>Hello World</title>\n    <script src="../dist/react.js"></script>\n    <script src="../dist/react-dom.js"></script>\n    <script src="demo/babel.min.js"></script>\n</head>\n\n<body>\n    <div id="root"></div>\n    <script>\n        var name=\'rexcited\';\n        ' + preScript + '\n    </script>\n    <script type="text/babel">' + _this6.state.code + '</script>\n</body>\n</html>\n');
                _this6.setCode(_this6.refs['preview-original'], '\n<!DOCTYPE html>\n<html>\n\n<head>\n    <meta charset="UTF-8" />\n    <title>Hello World</title>\n    <script src="demo/react.js"></script>\n    <script src="demo/react-dom.js"></script>\n    <script src="demo/babel.min.js"></script>\n</head>\n\n<body>\n    <div id="root"></div>\n    <script>\n        var name=\'react\';\n        ' + preScript + '\n    </script>\n    <script type="text/babel">' + _this6.state.code + '</script>\n</body>\n</html>\n');
            });
        }
    }, {
        key: 'onSelect',
        value: function onSelect(name) {
            var code = testCases[name].code;
            if (code === this.state.code) {
                return;
            }

            this.setState({
                code: code
            });
            this.updatePreview();
        }
    }, {
        key: 'onChange',
        value: function onChange(code) {
            var _this7 = this;

            if (code.replace(/\s/g, '') === this.state.code.replace(/\s/g, '')) {
                return;
            }

            this.setState({
                code: code
            });
            if (this.previewTimeout) {
                clearTimeout(this.previewTimeout);
                this.previewTimeout = 0;
            }
            this.previewTimeout = setTimeout(function () {
                _this7.updatePreview();
            }, 1000);
        }
    }, {
        key: 'render',
        value: function render() {

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(Header, { list: this.list, onSelect: this.onSelect }),
                _react2.default.createElement(Editor, { onChange: this.onChange, code: this.state.code }),
                _react2.default.createElement(
                    'div',
                    { id: 'preview' },
                    _react2.default.createElement(
                        'h5',
                        { 'class': 'top-indicator' },
                        'Rexcited\u2193'
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'preview top' },
                        _react2.default.createElement(
                            'div',
                            { 'class': 'loading-text' },
                            _react2.default.createElement(
                                'h1',
                                null,
                                'Loading...'
                            )
                        ),
                        _react2.default.createElement('iframe', { style: { opacity: this.state.rexcited ? 1 : 0.1, 'vertical-align': 'top' }, ref: 'preview', 'class': 'top-iframe', src: './demo/iframe.html?name=rexcited', frameborder: '0' })
                    ),
                    _react2.default.createElement(
                        'div',
                        { 'class': 'preview bottom' },
                        _react2.default.createElement(
                            'div',
                            { 'class': 'loading-text' },
                            _react2.default.createElement(
                                'h1',
                                null,
                                'Loading...'
                            )
                        ),
                        _react2.default.createElement('iframe', { style: { opacity: this.state.react ? 1 : 0.1, 'vertical-align': 'top' }, ref: 'preview-original', src: './demo/iframe.html?name=react', frameborder: '0' })
                    ),
                    _react2.default.createElement(
                        'h5',
                        { 'class': 'bottom-indicator' },
                        'React\u2191'
                    )
                )
            );
        }
    }]);

    return App;
}(_react2.default.Component);

_reactDom2.default.render(_react2.default.createElement(App, null), document.getElementById('root'));

//console.log(context(context.keys()[0]));

/***/ })
/******/ ]);