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

    function onReactEvent(value, dom, instance, attr, eventName) {
        console.log('onReactEvent', attr, value, eventName);

        //    dom.addEventListener(value.match, )
    }
    console.log(events);
    events.forEach(function (_ref) {
        var event = _ref.event,
            reactEvent = _ref.reactEvent;

        regiterAttr(reactEvent, onReactEvent);
    });
    regiterAttr();

    function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    function equals(x, y) {
        for (var p in y) {
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

                    if (!old[key]) {
                        var node = document.createTextNode(child);
                        value = node;
                        append(value, key);
                    } else {
                        lastNode = old[key]._hostNode;
                        value = child;

                        if (old[key]._hostNode.textContent !== value) {
                            old[key]._hostNode.textContent = value;
                        }
                    }
                    _renderedChildren[key] = new ReactDOMTextComponent(child, value);
                } else if (Array.isArray(child)) {
                    //array 
                    child.forEach(function (ele, j) {
                        recursion(ele, key + ':', j);
                    });
                } else {
                    var _value = void 0;

                    if (isText(child.props.key)) {
                        key = preKey + '$' + child.props.key;
                    }
                    //                console.log(key, old[[key]]);
                    if (!old[key]) {
                        var _node = create(child);
                        _value = _node;
                        append(_value, key);
                    } else {

                        lastNode = old[key]._hostNode;
                        _value = old[key]._hostNode;
                        update(old[key]._hostNode, child);
                    }
                    _renderedChildren[key] = new ReactDOMComponent(child, _value);
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

    var ReactCompositeComponentWrapper = function () {
        function ReactCompositeComponentWrapper(element, type) {
            _classCallCheck(this, ReactCompositeComponentWrapper);

            this._currentElement = element;
            if (!isComponent(type)) {
                return;
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
            component.componentWillMount && component.componentWillMount();
            if (component.componentDidMount) {
                setTimeout(function () {
                    component.componentDidMount();
                });
            }

            Object.assign(this, {
                stateQueue: []
            });
        }

        _createClass(ReactCompositeComponentWrapper, [{
            key: 'handleStateQueue',
            value: function handleStateQueue(oldState, props) {
                var _this = this;

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
                cbList.forEach(function (cb) {
                    cb.call(_this);
                });
                this._instance.state = state;
                var element = this._instance.render();
                update(this._hostNode, element);
            }
        }]);

        return ReactCompositeComponentWrapper;
    }();

    var ReactDOMComponent = function ReactDOMComponent(element, dom) {
        _classCallCheck(this, ReactDOMComponent);

        this._currentElement = element;
        this._hostNode = dom;
    };

    var ReactDOMTextComponent = function ReactDOMTextComponent(element, dom) {
        _classCallCheck(this, ReactDOMTextComponent);

        this._currentElement = element;
        this._hostNode = dom;
    };

    function create(element, owner) {
        var type = element.type,
            props = element.props;


        if (owner) {
            element._owner = owner;
        }

        var dom = void 0;
        var instance = {
            _currentElement: element
        };

        if (typeof type === "string") {
            //normal dom
            dom = document.createElement(type);
            for (var attrName in props) {
                if (attrMap[attrName]) {
                    attrMap[attrName](props[attrName], dom, instance, attrName);
                } else {
                    dom.setAttribute(attrName, props[attrName]);
                }
            }
            dom[internalInstanceKey] = instance;
        } else {
            if (type.prototype instanceof React.Component) {
                //component
                var _owner = new ReactCompositeComponentWrapper(element, type);
                dom = create(_owner._instance.render(), _owner);
                _owner._hostNode = dom;
                return dom;
            } else {
                //stateless
                var ele = type(element.props);
                var _owner2 = new ReactCompositeComponentWrapper(element, type);
                var _dom = create(ele, _owner2);
                _owner2._hostNode = _dom;
                return _dom;
            }
        }

        var children = [];

        if (props.children) {
            var result = getChildren(dom, props.children, {});
            instance._renderedChildren = result.children;
        }

        instance._hostNode = dom;

        children.forEach(function (child) {
            dom.appendChild(child);
        });
        //    console.log(dom, element);


        dom[internalInstanceKey] = instance;
        return dom;
    }

    function isStateLess(type) {
        return typeof type === "function" && !isComponent(type);
    }

    function isComponent(type) {
        return type.prototype instanceof React.Component;
    }

    function update(dom, element) {

        var instance = dom[internalInstanceKey];
        var element0 = instance._currentElement;

        var ownerType = void 0;
        var owner = element0._owner;

        var isHost = false;
        if (owner) {
            isHost = owner._hostNode === dom;
            ownerType = owner._currentElement.type;
        }

        if (isStateLess(element.type) && isHost && ownerType === element.type) {
            update(dom, element.type(element.props));
            return;
        }

        if (isHost) {
            if (element.type !== ownerType && element.type !== element0.type) {
                dom.parentElement.replaceChild(create(element), dom);
                return;
            }
        } else {
            if (element.type !== element0.type) {
                dom.parentElement.replaceChild(create(element), dom);
                return;
            }
        }

        if (!equals(element0.props, element.props)) {
            //props changed        
            if (isComponent(element.type)) {
                console.log("com");
            } else {//normal dom
            }
        }

        if (element.props.children) {
            //        console.log();
        }
        var oldChildren = instance._renderedChildren;
        var newChildren = getChildren(dom, element.props.children, oldChildren).children;

        //    console.log(oldChildren, "oldChildren");
        for (var i in oldChildren) {
            if (!newChildren[i]) {
                oldChildren[i].parentElement.removeChild(oldChildren[i]);
                delete oldChildren[i];
            }
        }
    }

    function render(element, target) {
        //    $dom.attr("data-reactroot", "");
        if (target.childNodes[0]) {
            update(target.childNodes[0], element);
        } else {
            var created = create(element);
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