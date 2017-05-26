(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return webpackJsonp([0],{

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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

            if (render) {
                this.doUpdate(state, this._instance.props, this._instance.context);
            }
            this._instance.state = state;
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
                if (lastOwner && lastOwner._currentElement.type === element.type) {
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

module.exports = _exports;
window.ReactDOM = _exports;

/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(1);


/***/ })

},[9]);
});