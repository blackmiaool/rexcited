var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(function (global, factory) {
    (typeof exports === 'undefined' ? 'undefined' : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? module.exports = factory() : typeof define === 'function' && define.amd ? define(factory) : global.ReactDOM = factory();
})(this, function () {
    'use strict';

    var internalInstanceKey = '__reactInternalInstance$' + Math.random().toString(36).slice(2);

    function regiterAttr(name, cb) {
        attrMap[name] = cb;
    }
    var attrMap = {};

    function isText(key) {
        return typeof key === "string" || typeof key === "number";
    }

    regiterAttr("className", function (value, dom) {
        dom.setAttribute("class", value);
    });
    regiterAttr("children", function (value, dom) {});

    regiterAttr("ref", function (value, dom, instance, attrName) {
        var ref = void 0;
        if (instance._currentElement._owner && instance._currentElement._owner._hostNode === dom) {
            //host
            ref = instance._currentElement._owner._instance;
        } else {
            ref = dom;
        }
        if (typeof value === "function") {} else {}
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

    function onReactEvent(value, dom, instance, attr) {
        var eventName = attr.match(/on(\w+)/i)[1].toLowerCase();
        dom.addEventListener(eventName, function (e) {
            e.nativeEvent = e;
            value(e);
        });
        //    console.log('onReactEvent', attr, value, eventName);

        //    dom.addEventListener(value.match, )
    }

    events.forEach(function (_ref) {
        var event = _ref.event,
            reactEvent = _ref.reactEvent;

        regiterAttr(reactEvent, onReactEvent);
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
                    if (typeof x[p] == 'undefined' || p != 'equals' && y[p].toString() != x[p].toString()) {
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
                        var _node = _create(child, owner);
                        append(_node, key);
                        //                    _renderedChildren[key] = new ReactDOMComponent(child, node, owner);
                        _renderedChildren[key] = findOwnerUntil(_node[internalInstanceKey], owner);
                        console.info('!!!!!!!!!!!!', _renderedChildren[key], owner);
                    } else {
                        if (old[key] instanceof ReactCompositeComponentWrapper) {
                            lastNode = update(old[key]._hostNode, child, {
                                componentRef: old[key]._instance
                            });
                        } else {
                            lastNode = update(old[key]._hostNode, child);
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

    var StatelessComponent = function StatelessComponent(props, type) {
        var _this = this;

        _classCallCheck(this, StatelessComponent);

        this.props = props;
        this.type = type;
        this.render = function () {
            return type(_this.props);
        };
    };

    var ReactCompositeComponentWrapper = function () {
        function ReactCompositeComponentWrapper(type, element, owner) {
            _classCallCheck(this, ReactCompositeComponentWrapper);

            this._currentElement = element;
            if (owner) {
                this._currentElement._owner = owner;
            }
            if (isStateLess(type)) {
                //            element = type(element.props)
                this._instance = new StatelessComponent(element.props, type);
                this.type = "stateless";
                return;
            } else {
                this.type = "component";
            }

            if (type.defaultProps) {
                for (var i in type.defaultProps) {
                    if (element.props[i] === undefined) {
                        element.props[i] = type.defaultProps[i];
                    }
                }
            }
            var component = new type(element.props);
            this._instance = component;
            component._reactInternalInstance = this;
            if (!component.state) {
                component.state = {};
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

            Object.assign(this, {
                stateQueue: []
            });
        }

        _createClass(ReactCompositeComponentWrapper, [{
            key: 'create',
            value: function create() {
                var dom = void 0;
                if (this.type === "stateless") {
                    dom = _create(this.render(this._currentElement.props), this);
                } else {
                    dom = _create(this.render(), this);
                }
                this._hostNode = dom;
                return dom;
            }
        }, {
            key: 'updateProps',
            value: function updateProps(props) {
                this._instance.props = props;
                this._currentElement.props = props;
            }
        }, {
            key: 'render',
            value: function render() {
                var element = void 0;
                if (this.type === "stateless") {
                    element = this._instance.render(this._currentElement.props);
                } else {
                    element = this._instance.render();
                }
                return element;
            }
        }, {
            key: 'handleStateQueue',
            value: function handleStateQueue(componentRef, oldState, props) {
                var cbList = [];
                var stateList = [];
                var instance = componentRef._reactInternalInstance;
                instance.stateQueue.forEach(function (_ref2) {
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

                instance.stateQueue.length = 0;
                cbList.forEach(function (cb) {
                    cb.call(componentRef);
                });
                componentRef.state = state;
                var element = componentRef.render();

                instance._hostNode = update(instance._hostNode, element, {
                    componentRef: componentRef
                });
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
                            target.value = propsValue;
                            instance.previousOnchangeValue = propsValue;
                        }
                    });
                    execAfterCallback();
                }
            });
        }
        for (var attrName in element.props) {
            if (attrMap[attrName]) {
                attrMap[attrName](element.props[attrName], dom, this, attrName);
            } else {
                dom.setAttribute(attrName, element.props[attrName]);
            }
        }
        dom[internalInstanceKey] = this;
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

    function _create(element, owner) {
        console.log('create', element);
        var type = element.type,
            props = element.props;

        if (!isValidElement(element)) {
            //comment
            var _dom = document.createComment("react-empty");
            _dom._hostNode = _dom;
            _dom[internalInstanceKey] = {
                _currentElement: element
            };
            return _dom;
        }
        if (isComponent(type)) {
            var _instance = new ReactCompositeComponentWrapper(type, element, owner);
            return _instance.create();
        }

        //normal dom
        var instance = new ReactDOMComponent(type, element, owner);
        var dom = instance._hostNode;

        var children = [];

        if (props.children) {
            var result = getChildren(dom, props.children, {}, owner);
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
        while (owner._currentElement._owner && owner._currentElement._owner !== top) {
            owner = owner._currentElement._owner;
        }
        return owner;
    }

    function update(dom, element) {
        var info = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        //    console.trace("1")
        console.log('update', dom, element, info);
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
            var newDom = _create(element);
            dom.parentElement.replaceChild(newDom, dom);
            return newDom;
        }
        if (isHost) {
            if (info.componentRef) {
                var _owner = element0._owner;
                var lastInstance = void 0;
                var lastOwner = void 0;
                var found = void 0;
                while (1) {
                    if (_owner && _owner._instance === info.componentRef) {
                        found = true;
                        break;
                    }
                    lastInstance = _owner._instance;
                    lastOwner = _owner;
                    if (_owner._currentElement._owner) {
                        _owner = _owner._currentElement._owner;
                    } else {
                        break;
                    }
                }

                if (found) {
                    if (lastOwner) {
                        lastOwner.updateProps(element.props);
                        return update(dom, lastOwner.render(), {
                            componentRef: lastInstance
                        });
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
                var newDom = _create(element);
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
                owner.updateProps(element.props);
                return update(dom, owner.render(), owner._instance);
            } else {
                //normal dom            
                for (var attrName in element.props) {
                    if (element0.props[attrName] !== element.props[attrName] && typeof element.props[attrName] !== 'function') {
                        if (attrMap[attrName]) {
                            attrMap[attrName](element.props[attrName], dom, instance, attrName);
                        } else {

                            dom.setAttribute(attrName, element.props[attrName]);
                        }
                    }
                }
                element0.props = element.props;
            }
        }

        var oldChildren = instance._renderedChildren;
        var newChildren = getChildren(dom, element.props.children, oldChildren, owner).children;

        for (var i in oldChildren) {
            if (!newChildren[i]) {
                oldChildren[i]._hostNode.parentElement.removeChild(oldChildren[i]._hostNode);
            }
        }

        instance._renderedChildren = newChildren;

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