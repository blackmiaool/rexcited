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

const events = [];
for (var property in document.documentElement) {
    var match = property.match(/^on(.+)/);
    if (match) {
        const event = match[1];
        const reactEvent = 'on' + event[0].toUpperCase() + event.slice(1);
        events.push({
            event: match[1],
            reactEvent
        });
    }
}

function onReactEvent(value, dom, instance, attr, eventName) {
    console.log('onReactEvent', attr, value, eventName);

    //    dom.addEventListener(value.match, )
}
console.log(events)
events.forEach(function ({
    event,
    reactEvent
}) {
    regiterAttr(reactEvent, onReactEvent);
});
regiterAttr()

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}

function equals(x, y) {
    for (var p in y) {
        if (typeof y[p] !== typeof x[p]) {
            return false;
        }
        switch (typeof (y[p])) {
            case 'object':
                if (y[p] instanceof Date) {
                    if (y[p].getTime() !== x[p].getTime()) {
                        return false;
                    }
                }
                if (!equals(x[p], y[p])) {
                    return false
                };
                break;
            case 'function':
                if (typeof (x[p]) == 'undefined' || (p != 'equals' && y[p].toString() != x[p].toString())) {
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
        if (typeof (y[p]) == 'undefined') {
            return false;
        }
    }

    return true;
}

function getChildren(parent, children, old = {}) {
    if (!children) {
        return {
            children: {}
        };
    }
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


    children.forEach(function (child = '', i) {
        function recursion(child, preKey, index) {
            let key = `${preKey}${index}`;

            if (isText(child)) { //text node
                let value;

                if (!old[key]) {
                    const node = document.createTextNode(child);
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

            } else if (Array.isArray(child)) { //array 
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

                    lastNode = old[key]._hostNode;
                    value = old[key]._hostNode;
                    update(old[key]._hostNode, child);
                }
                _renderedChildren[key] = new ReactDOMComponent(child, value);

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

function init() {

}

class ReactCompositeComponentWrapper {
    constructor(element, type) {
        this._currentElement = element;
        if (!isComponent(type)) {
            return;
        }

        if (type.defaultProps) {
            for (const i in type.defaultProps) {
                if (element.props[i] === undefined) {
                    element.props[i] = type.defaultProps[i];
                }
            }
        }
        const component = new type(element.props);
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
        })
    }
    handleStateQueue(oldState, props) {
        const cbList = [];
        const stateList = [];
        this.stateQueue.forEach(function ({
            updater,
            cb
        }) {
            if (cb) {
                cbList.push(cb);
            }
            if (typeof updater === 'function') {
                stateList.push(updater(oldState, props));
            } else {
                stateList.push(updater);
            }
        });
        const state = {};
        Object.assign(state, oldState);
        stateList.forEach(function (stateThis) {
            Object.assign(state, stateThis);
        });
        this.stateQueue.length = 0;
        cbList.forEach((cb) => {
            cb.call(this);
        });
        this._instance.state = state;
        const element = this._instance.render();
        update(this._hostNode, element);
    }

}
class ReactDOMComponent {
    constructor(element, dom) {
        this._currentElement = element;
        this._hostNode = dom;
    }
}
class ReactDOMTextComponent {
    constructor(element, dom) {
        this._currentElement = element;
        this._hostNode = dom;
    }
}

function create(element, owner) {
    const {
        type,
        props,
    } = element;

    if (owner) {
        element._owner = owner;
    }

    let dom;
    const instance = {
        _currentElement: element,
    }

    if (typeof type === "string") { //normal dom
        dom = document.createElement(type);
        for (const attrName in props) {
            if (attrMap[attrName]) {
                attrMap[attrName](props[attrName], dom, instance, attrName);
            } else {
                dom.setAttribute(attrName, props[attrName])
            }
        }
        dom[internalInstanceKey] = instance;

    } else {
        if (type.prototype instanceof React.Component) { //component
            const owner = new ReactCompositeComponentWrapper(element, type);
            dom = create(owner._instance.render(), owner);
            owner._hostNode = dom;
            return dom;
        } else { //stateless
            const ele = type(element.props);
            const owner = new ReactCompositeComponentWrapper(element, type);
            const dom = create(ele, owner);
            owner._hostNode = dom;
            return dom;
        }
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

function isStateLess(type) {
    return typeof type === "function" && !isComponent(type);
}

function isComponent(type) {
    return type.prototype instanceof React.Component;
}

function update(dom, element) {

    const instance = dom[internalInstanceKey];
    const element0 = instance._currentElement;


    let ownerType;
    const owner = element0._owner;

    let isHost = false;
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



    if (!equals(element0.props, element.props)) { //props changed        
        if (isComponent(element.type)) {
            console.log("com")
        } else { //normal dom
        }

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
