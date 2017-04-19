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

    function getChildren(children, old) {
        var _renderedChildren = {};
        var arr = [];
        children.forEach(function (child, i) {
            function append(child, preKey, index) {
                if (isText(child)) {
                    var value = void 0;

                    if (!old) {
                        var node = document.createTextNode(child);
                        arr.push(node);
                        value = node;
                    } else {
                        value = child;
                    }
                    _renderedChildren['' + preKey + index] = value;
                } else if (Array.isArray(child)) {
                    child.forEach(function (ele, j) {
                        append(ele, '' + preKey + index + ':', j);
                    });
                } else {
                    var _value = void 0;
                    if (!old) {
                        var _node = create(child);
                        arr.push(_node);
                        _value = _node;
                    } else {
                        _value = child;
                    }
                    if (isText(child.props.key)) {
                        _renderedChildren[preKey + '$' + child.props.key] = _value;
                    } else {
                        _renderedChildren['' + preKey + index] = _value;
                    }
                }
            }
            append(child, ".", i);
        });
        return {
            children: _renderedChildren,
            arr: arr
        };
    }

    function create(element) {
        var type = element.type,
            props = element.props;


        var dom = void 0;
        var instance = {
            _currentElement: element
        };
        var children = [];
        if (props.children) {
            var result = getChildren(props.children, false);
            children = result.arr;
            instance._renderedChildren = result.children;
        }

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
            instance.component = new type();
            dom = create(instance.component.render());
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
            dom.parentElement.removeChild(dom);
            dom.appendChild(create(element));
            return;
        }
        console.log();
        if (element.props.children) {
            console.log();
        }
        var oldChildren = instance._renderedChildren;
        var newChildren = getChildren(element.props.children, oldChildren).children;

        for (var i in oldChildren) {
            if (!newChildren[i]) {
                oldChildren[i].parentElement.removeChild(oldChildren[i]);
                delete oldChildren[i];
            }
        }
        console.log(oldChildren, newChildren);
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