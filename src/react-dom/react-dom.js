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

function onReactEvent(value, dom, instance, attr) {
    const eventName = attr.match(/on(\w+)/i)[1].toLowerCase();
    dom.addEventListener(eventName, function (e) {
        e.nativeEvent = e;
        value(e);
    });
    //    console.log('onReactEvent', attr, value, eventName);

    //    dom.addEventListener(value.match, )
}

events.forEach(function ({
    event,
    reactEvent
}) {
    regiterAttr(reactEvent, onReactEvent);
});

function insertAfter(newNode, referenceNode) {
    referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
let cnt = 0;

function equals(x, y) {
    cnt++;
    if (cnt > 100) {
        return;
    }
    for (var p in y) {
        if (p === "_owner") {
            continue;
        }
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

function getChildren(parent, children, old = {}, owner) {
    console.log('getChildren', children, old)
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
                let node;
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
            } else if (Array.isArray(child)) { //array 
                child.forEach((ele, j) => {
                    recursion(ele, `${key}:`, j);
                });
            } else {
                if (isText(child.props.key)) {
                    key = `${preKey}\$${child.props.key}`;

                }
                //                console.log(key, old[[key]]);
                if (!old[key]) {
                    const node = create(child, owner);
                    append(node, key);
                    _renderedChildren[key] = new ReactDOMComponent(child, node, owner);

                } else {
                    lastNode = update(old[key]._hostNode, child);
                    if (lastNode !== old[key]._hostNode) {
                        _renderedChildren[key] = new ReactDOMComponent(child, lastNode, owner);
                    } else {
                        _renderedChildren[key] = old[key];
                    }
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
        children: _renderedChildren,
    };
}

function init() {

}
class StatelessComponent {
    constructor(props, type) {
        this.props = props;
        this.type = type;
        this.render = () => {
            return type(this.props);
        };
    }
}
class ReactCompositeComponentWrapper {
    constructor(element, type) {
        this._currentElement = element;
        if (isStateLess(type)) {
            this._instance = new StatelessComponent(element.props, type);
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
        })
    }
    updateProps(props) {
        this._instance.props = props;
        this._currentElement.props = props;
    }

    handleStateQueue(oldState, props) {
        const cbList = [];
        const stateList = [];
        const instance = this._reactInternalInstance;
        instance.stateQueue.forEach(function ({
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

        instance.stateQueue.length = 0;
        cbList.forEach((cb) => {
            cb.call(this);
        });
        this.state = state;
        const element = this.render();

        instance._hostNode = update(instance._hostNode, element, {
            componentRef: this
        });
    }

}
class ReactDOMComponent {
    constructor(element, dom, owner) {
        this._currentElement = element;
        this._hostNode = dom;
        if (owner) {
            this.owner = owner;
        }
    }
}
class ReactDOMTextComponent {
    constructor(element, dom, owner) {
        this._currentElement = element;
        this._hostNode = dom;
        if (owner) {
            this.owner = owner;
        }
    }
}

function isValidElement(element) {
    if (typeof element !== "object" || !element) {
        return false;
    }
    return true;
}
const afterCallback = [];

function execAfterCallback() {
    afterCallback.forEach(function (cb) {
        cb();
    });
    afterCallback.length = 0;
}


function create(element, owner) {
    console.log('create', element)
    let dom;
    const instance = {
        _currentElement: element,
    }

    if (!isValidElement(element)) {
        dom = document.createComment("react-empty");
        dom._hostNode = dom;
        dom[internalInstanceKey] = instance;
        return dom;

    }
    const {
        type,
        props,
    } = element;

    if (owner) {
        element._owner = owner;
    }




    if (typeof type === "string") { //normal dom
        dom = document.createElement(type);
        if (type === 'input') {
            dom.addEventListener("input", function (e) {
                const target = e.target;
                const instance = target[internalInstanceKey];
                const element = instance._currentElement;
                if (target.value !== instance.previousOnchangeValue) {
                    instance.previousOnchangeValue = target.value;
                    if (element.props.onChange) {
                        element.props.onChange.call(element, e);
                    }
                    afterCallback.push(function () {
                        const propsValue = target[internalInstanceKey]._currentElement.props.value;
                        if (propsValue !== undefined && propsValue !== target.value) {
                            target.value = propsValue;
                            instance.previousOnchangeValue = propsValue;
                        }
                    });
                    execAfterCallback();
                }
            });
        }
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
        let result = getChildren(dom, props.children, {}, owner)
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

function isComponent(type) {
    return typeof type === "function";
}

function isStateLess(type) {
    return isComponent(type) && !isReactComponent(type);
}

function isReactComponent(type) {
    return type.prototype instanceof React.Component;
}

function update(dom, element, info = {}) {
    //    console.trace("1")
    console.log('update', dom, element, info)
    let forceRender = false;
    if (!element && dom) { //dom to comment
        const comment = document.createComment("react-empty: ?");
        dom.parentElement.replaceChild(comment, dom)
        comment[internalInstanceKey] = dom[internalInstanceKey];
        return comment;
    }

    //    if (element && isStateLess(element.type)) {
    //        return update(dom, element.type(element.props));
    //    }

    if (dom.nodeType === 8 && element) { //comment, force render
        forceRender = true;
    }
    const instance = dom[internalInstanceKey];
    const element0 = instance._currentElement;


    let ownerType;
    let owner;

    if (isValidElement(element0)) {
        owner = element0._owner;
    } else {

    }


    let isHost = false;
    if (owner) {
        isHost = owner._hostNode === dom;
        ownerType = owner._currentElement.type;
    }



    function findTopOwner(ref) {
        let owner = element0._owner;
        if (!owner) {
            return;
        }
        while (owner._currentElement._owner) {
            owner = owner._currentElement._owner;
        }
        return owner;
    }

    function createAndReplace() {
        console.log("createAndReplace")
        const newDom = create(element);
        console.log(dom, dom.parentElement);
        dom.parentElement.replaceChild(newDom, dom);
        return newDom;
    }
    if (isHost) {
        if (info.componentRef) {
            let owner = element0._owner;
            let lastInstance;
            let lastOwner;
            let found;
            while (1) {
                if (owner && owner._instance === info.componentRef) {
                    found = true;
                    break;
                }
                lastInstance = owner._instance;
                lastOwner = owner;
                if (owner._currentElement._owner) {
                    owner = owner._currentElement._owner
                } else {
                    break;
                }
            }

            if (found) {
                if (lastOwner) {
                    lastOwner.updateProps(element.props);
                    return update(dom, lastOwner._instance.render(), {
                        componentRef: lastInstance
                    });
                }
            } else {
                console.log("else");
                return createAndReplace();

            }
        } else if (element.type !== element0.type || forceRender) {
            console.log("type changed", element.type, element0.type)
            return createAndReplace();
        } else {

        }
        //        if (isStateLess(element.type) && ownerType === element.type) {
        //            return update(dom, element.type(element.props));
        //        } else if (isReactComponent(element.type) && ownerType === element.type) {
        //            owner._instance.props = element.props;
        //            owner._currentElement.props = element.props;;
        //            return update(dom, owner._instance.render());
        //        } else if (element.type !== element0.type || forceRender) {
        //            console.log(element, element0);
        //            const newDom = create(element);
        //            dom.parentElement.replaceChild(newDom, dom);
        //            return newDom;
        //        }

    } else {
        function replace() {
            const newDom = create(element);
            dom.parentElement.replaceChild(newDom, dom);
            return newDom;
        }
        if (forceRender || typeof element0 !== typeof element) {
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



    if (!equals(element0.props, element.props)) { //props changed        
        if (isReactComponent(element.type)) {

        } else { //normal dom            
            for (const attrName in element.props) {
                if (element0.props[attrName] !== element.props[attrName] && typeof element.props[attrName] !== 'function') {
                    if (attrMap[attrName]) {
                        attrMap[attrName](element.props[attrName], dom, instance, attrName);
                    } else {

                        dom.setAttribute(attrName, element.props[attrName])

                    }
                }

            }
            element0.props = element.props;
        }

    }

    const oldChildren = instance._renderedChildren;
    const newChildren = getChildren(dom, element.props.children, oldChildren, owner).children;


    for (const i in oldChildren) {
        if (!newChildren[i]) {
            console.log('remove', i, oldChildren[i]);
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
