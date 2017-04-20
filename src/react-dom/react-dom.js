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


function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function getChildren(parent, children, old = {}) {
    const _renderedChildren = {};

    let prependParent = true;
    let lastNode;

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
            let key = `${preKey}${index}`;

            if (isText(child)) {
                let value;

                if (!old[key]) {
                    const node = document.createTextNode(child);
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
                child.forEach((ele, j) => {
                    recursion(ele, `${key}:`, j);
                });
            } else {
                let value;


                if (isText(child.props.key)) {
                    key = `${preKey}\$${child.props.key}`;

                }
                //                console.log(key, old[[key]]);
                if (!old[key]) {
                    const node = create(child);
                    value = node;
                    append(value, key);

                } else {

                    lastNode = old[key];
                    value = old[key];
                    update(old[key], child);
                }
                _renderedChildren[key] = value;

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
        children: _renderedChildren,
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
    }

    if (typeof type === "string") {
        dom = document.createElement(type);
        for (const attrName in props) {
            if (attrMap[attrName]) {
                attrMap[attrName](props[attrName], dom, instance, attrName);
            } else {
                dom.setAttribute(attrName, props[attrName])
            }
        }

    } else {
        instance.component = new type();
        dom = create(instance.component.render());
    }

    let children = []
    if (props.children) {
        let result = getChildren(dom, props.children, {})
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
    const instance = dom[internalInstanceKey];
    const element0 = instance._currentElement;
    //    console.log("instance", element0, "to", element);
    if (element.type !== element0.type) {
        dom.parentElement.removeChild(dom);
        dom.appendChild(create(element));
        return;
    }

    if (element.props.children) {
        //        console.log();
    }
    const oldChildren = instance._renderedChildren;
    const newChildren = getChildren(dom, element.props.children, oldChildren).children;

    //    console.log(oldChildren, "oldChildren");
    for (const i in oldChildren) {
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
        const created = create(element);
        created.setAttribute('data-reactroot', "");
        target.appendChild(created);
    }

    //    const targetInstance = target.childNodes[0][internalInstanceKey];
    //    console.log(targetInstance)
}
const exports = {
    render
}


export default exports;
//window.ReactDOM = exports;
