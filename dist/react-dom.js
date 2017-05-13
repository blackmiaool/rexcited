var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (global, factory) {
    (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.ReactDOM = factory();
})(this, function () {
    'use strict';

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
        console.log('value', value, previousValue);
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
        console.log(111111111111111111, previousValue);
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
                    if (isText(child.props.key)) {
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
                            lastNode = update(old[key]._hostNode, child, {
                                componentRef: old[key]._instance,
                                context: context
                            });
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
        //    for (const i in old) {
        //        if (!_renderedChildren[i]) {
        //            console.log(old[i], old[i].parentElement);
        //            old[i].parentElement.removeChild(old[i]);
        //        }
        //    }
        return {
            children: _renderedChildren
        };
    }

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
                this._instance = new StatelessComponent(type);
                this.type = "stateless";
            } else {
                this.type = "component";
            }

            if (isReactComponent(type)) {
                var component = new type(element.props);

                component.context = {};
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

                React.asyncSetState(true);
                component.componentWillMount && component.componentWillMount();
                React.asyncSetState(false);
                if (component.componentDidMount) {
                    setTimeout(function () {
                        React.asyncSetState(true);
                        component.componentDidMount();
                        React.asyncSetState(false);
                    });
                }
            }

            Object.assign(this, {
                stateQueue: [],
                afterRenderQueue: []
            });
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
            value: function create(props) {
                var context = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                renderingComponentStack.push(this);
                var dom = void 0;
                var element = void 0;

                this._context = context;

                this.updateSelfContext();

                if (this.type === "stateless") {
                    element = this.render(props, this._instance.context);
                } else {
                    element = this.render();
                }

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
            value: function updateProps(props, dom, context) {
                console.log('updateProps', context);
                this._context = context;
                var instance = this._instance;
                this.updateSelfContext();
                console.log('updateProps');
                var shouldRender = !instance.shouldComponentUpdate || !instance.shouldComponentUpdate(props, this._instance.state);

                console.log('props', props);
                for (var attrName in props) {
                    //not on stateless
                    if (props[attrName] !== this._instance.props[attrName] && attrMap.component[attrName]) {
                        attrMap.component[attrName](props[attrName], this._instance.props[attrName], dom, this, attrName);
                    }
                }
                this._instance.props = props;
                this._currentElement.props = props;

                var result = void 0;
                if (shouldRender) {
                    renderingComponentStack.push(this);
                    var element = this.render();
                    this.transformRef(element); //they will remove this
                    result = update(dom, element, {
                        componentRef: this._instance,
                        context: this.getContext()
                    });
                    renderingComponentStack.pop();
                    this.handleAfterRenderQueue();
                }

                return dom;
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
                    element = this._instance.render.call(undefined, this._currentElement.props);
                } else {
                    element = this._instance.render();
                }

                console.log("render end");
                return element;
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

                var shouldRender = !instance.shouldComponentUpdate || instance.shouldComponentUpdate(props, this._instance.state);

                instance.state = state;

                if (shouldRender) {
                    renderingComponentStack.push(this);
                    var element = instance.render();
                    var context = this.getContext();

                    this._hostNode = update(this._hostNode, element, {
                        componentRef: instance,
                        context: context
                    });
                    renderingComponentStack.pop();
                    this.handleAfterRenderQueue();
                }
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
            var _instance = new ReactCompositeComponentWrapper(type, element, owner);
            return _instance.create(props, context);
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
        return type.prototype instanceof React.Component;
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

    function update(dom, element) {
        var _ref4 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {},
            componentRef = _ref4.componentRef,
            context = _ref4.context;

        //    console.trace("1")
        console.log('update', dom, element, context);
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
                        return lastOwner.updateProps(element.props, dom, context);
                    }
                } else {
                    console.log("else");
                    return createAndReplace();
                }
            } else if (element.type !== element0.type || forceRender) {
                console.log("type changed", element.type, element0.type);
                return createAndReplace();
            } else {}
        } else {
            var replace = function replace() {
                var newDom = _create(element, {
                    context: context
                });
                dom.parentElement.replaceChild(newDom, dom);
                return newDom;
            };

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
        }

        if (!equals(element0.props, element.props)) {
            //props changed        
            if (isComponent(element.type)) {
                return owner.updateProps(element.props, dom, context);
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
    var exports$1 = {
        render: render
    };

    //window.ReactDOM = exports;

    return exports$1;
});