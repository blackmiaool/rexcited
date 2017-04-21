var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

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

    function insertAfter(newNode, referenceNode) {
        referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
    }

    function equals(x, y) {
        for (var p in y) {
            switch (_typeof(y[p])) {
                case 'object':
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
            return [];
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

        children.forEach(function (child, i) {
            function recursion(child, preKey, index) {
                var key = '' + preKey + index;

                if (isText(child)) {
                    var value = void 0;

                    if (!old[key]) {
                        var node = document.createTextNode(child);
                        value = node;
                        append(value, key);
                    } else {
                        lastNode = old[key];
                        value = child;

                        if (old[key].textContent !== value) {
                            old[key].textContent = value;
                        }
                    }
                    _renderedChildren[key] = value;
                } else if (Array.isArray(child)) {
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

                        lastNode = old[key];
                        _value = old[key];
                        update(old[key], child);
                    }
                    _renderedChildren[key] = _value;
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

    function create(element) {
        var type = element.type,
            props = element.props;

        var dom = void 0;
        var instance = {
            _currentElement: element
        };

        if (typeof type === "string") {
            dom = document.createElement(type);
            for (var attrName in props) {
                if (attrMap[attrName]) {
                    attrMap[attrName](props[attrName], dom, instance, attrName);
                } else {
                    dom.setAttribute(attrName, props[attrName]);
                }
            }
        } else {
            var component = new type(element.props);
            if (Object instanceof React.Component) {
                instance.component = component;
                dom = create(instance.component.render());
            } else {
                dom = create(component);
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

    function update(dom, element) {
        var instance = dom[internalInstanceKey];
        var element0 = instance._currentElement;
        console.log("instance", element0, "to", element);
        if (element.type !== element0.type) {
            dom.parentElement.replaceChild(dom, create(element));
            return;
        }

        if (!equals(element0.props, element.props)) {
            console.log(123);
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
        //    console.log(oldChildren, newChildren);
        //    const keys = dom.childrenNode.map(function (child, i) {
        //        if (child.props.key) {
        //            return child.props.key;
        //        } else {
        //            return internalInstanceKey + i;
        //        }
        //    });
        //    let keys0 = [];
        //    [].slice.call(dom.childNodes).forEach(function (node, i) {
        //        if (node.nodeType === 1) {
        //            const key = node[internalInstanceKey]._currentElement.props.key;
        //            console.log(key)
        //            if (typeof key === "string" || typeof key === "number") {
        //                return key;
        //            } else {
        //                return undefined;
        //            }
        //        } else {
        //            return undefined;
        //        }
        //    });

        //    const keys = element.props.children.map(function (child, i) {
        //        if (typeof child === "string") {
        //            return undefined;
        //        } else if (Array.isArray(child)) {
        //            return undefined;
        //        } else if (typeof child === "boolean") {
        //            return undefined;
        //        } else if (typeof child === "object" && child) {
        //            if (child.props.key) {
        //                return child.props.key;
        //            } else {
        //                return undefined;
        //            }
        //        } else {
        //            return i;
        //        }
        //    });
        //    console.log("key", keys0, "to", keys);
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