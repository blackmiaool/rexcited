(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.ReactDOM = factory());
}(this, (function () { 'use strict';

const internalInstanceKey = '__reactInternalInstance$' + Math.random().toString(36).slice(2);


function regiterAttr(name, cb) {
    attrMap[name] = cb;
}
const attrMap = {};

function isText(key) {
    return typeof key === "string" || typeof key === "number";
}

regiterAttr("className", function (value, dom) {
    dom.setAttribute("class", value);
});
regiterAttr("children", function (value, dom) {});

function getChildren(children, old) {
    const _renderedChildren = {};
    const arr = [];
    children.forEach(function (child, i) {
        function append(child, preKey, index) {
            if (isText(child)) {
                let value;

                if (!old) {
                    const node = document.createTextNode(child);
                    arr.push(node);
                    value = node;
                } else {
                    value = child;
                }
                _renderedChildren[`${preKey}${index}`] = value;

            } else if (Array.isArray(child)) {
                child.forEach((ele, j) => {
                    append(ele, `${preKey}${index}:`, j);
                });
            } else {
                let value;
                if (!old) {
                    const node = create(child);
                    arr.push(node);
                    value = node;

                } else {
                    value = child;
                }
                if (isText(child.props.key)) {
                    _renderedChildren[`${preKey}\$${child.props.key}`] = value;
                } else {
                    _renderedChildren[`${preKey}${index}`] = value;
                }

            }
        }
        append(child, ".", i);
    });
    return {
        children: _renderedChildren,
        arr
    };
}

function create(element) {
    const {
        type,
        props
    } = element;

    let dom;
    const instance = {
        _currentElement: element,
    };
    let children = [];
    if (props.children) {
        let result = getChildren(props.children,false);
        children = result.arr;
        instance._renderedChildren = result.children;
    }

    if (typeof type === "string") {
        dom = document.createElement(type);
        for (const attrName in props) {
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
    const instance = dom[internalInstanceKey];
    const element0 = instance._currentElement;
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
    const oldChildren = instance._renderedChildren;
    const newChildren = getChildren(element.props.children, oldChildren).children;

    for (const i in oldChildren) {
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
        const created = create(element);
        created.setAttribute('data-reactroot', "");
        target.appendChild(created);
    }

    //    const targetInstance = target.childNodes[0][internalInstanceKey];
    //    console.log(targetInstance)
}
const exports$1 = {
    render
};



//window.ReactDOM = exports;

return exports$1;

})));
