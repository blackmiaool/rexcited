import React from 'react';
const internalInstanceKey = '__reactInternalInstance$' + Math.random().toString(36).slice(2);


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
const attrMap = {
    dom: {

    },
    component: {

    }
};

function isText(key) {
    return typeof key === "string" || typeof key === "number";
}
regiterAttr("style", "dom", function (value, previousValue, dom) {
    if (value && previousValue && equals(value, previousValue)) {
        return;
    }

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
    let ref;
    const owner = renderingComponentStack[renderingComponentStack.length - 1];
    console.log('owner', owner);
    if (owner) {
        if (typeof value === "function") {
            owner.afterRenderQueue.push(value.bind(undefined, dom));
        } else {
            owner.afterRenderQueue.push(() => {
                owner._instance.refs[value] = dom;
            });
        }
    }


    console.log("arguments", arguments)
});

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

function onReactEvent(value, previousValue, dom, wrapper, attr) {
    const eventName = attr.match(/on(\w+)/i)[1].toLowerCase();

    if (wrapper.eventMap[eventName]) {
        dom.removeEventListener(eventName, wrapper.eventMap[eventName]);
        delete wrapper.eventMap[eventName];
    }
    const listener = function (e) {
        e.nativeEvent = e;
        value(e);
    };
    dom.addEventListener(eventName, listener);
    wrapper.eventMap[eventName] = listener;
    //    console.log('onReactEvent', attr, value, eventName);

    //    dom.addEventListener(value.match, )
}

events.forEach(function ({
    event,
    reactEvent
}) {
    regiterAttr(reactEvent, 'dom', onReactEvent);
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
            if (typeof (x[p]) == 'undefined' || (p != 'equals')) {
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

function getChildren(parent, children, old = {}, owner, context) {
    console.log('getChildren', parent, children, old)
    if (!children) {
        return {
            children: {}
        };
    }
    const _renderedChildren = {};

    let prependParent = true;
    let lastNode;

    function append(node, key) {
        console.log("node", node, key)
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
                    const dom = create(child, {
                        owner,
                        context
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
                        if (old[key]._currentElement.type === child.type) {
                            lastNode = old[key].updateProps(child.props, old[key]._hostNode, context);
                        } else {
                            lastNode = update(old[key]._hostNode, child, {
                                componentRef: old[key]._instance,
                                context
                            });
                        }
                    } else {
                        lastNode = update(old[key]._hostNode, child, {
                            context
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
        children: _renderedChildren,
    };
}

function init() {

}
class StatelessComponent {
    constructor(type) {
        this.type = type;
        this.refs = {};
        this.render = (props) => {
            return type(props);
        };
    }
}
const renderingComponentStack = [];
class ReactCompositeComponentWrapper {
    constructor(type, element, owner, context = {}) {
        this._currentElement = element;
        if (owner) {
            this._currentElement._owner = owner;
        }

        if (type.defaultProps) {
            for (const i in type.defaultProps) {
                if (element.props[i] === undefined) {
                    element.props[i] = type.defaultProps[i];
                }
            }
        }


        if (isStateLess(type)) {
            this._instance = new StatelessComponent(type, context);
            this.type = "stateless";
        } else {
            this.type = "component";
        }


        if (isReactComponent(type)) {
            const component = new type(element.props, context);

            component.context = context;
            this._instance = component;
            component._reactInternalInstance = this;
            if (!component.state) {
                component.state = {};
            }

            for (const attrName in element.props) {
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
        return this.create(element.props, context);
    }

    transformRef(element) {
        const refKey = element.props.ref;
        if (typeof refKey === "string") {
            element.props.ref = function (ref) {
                console.log("this", that);
                that._instance.refs[refKey] = ref;
            }
        }
        if (element.props.children) {
            element.props.children.forEach((child) => {
                if (typeof child === "object" && child && child.props) {
                    this.transformRef(child);
                }
            });
        }
    }
    getContext() {
        if (this._instance.getChildContext) {
            const context = this._instance.getChildContext();
            return Object.assign({}, this._context, context);
        } else {
            return this._context;
        }
    }
    updateSelfContext() {
        let contextThis = {}
        console.log(this);
        if (this._currentElement.type.contextTypes) {
            for (const i in this._currentElement.type.contextTypes) {
                contextThis[i] = this._context[i];
            }
        }
        this._instance.context = contextThis;
    }
    create(props, context) {
        renderingComponentStack.push(this);
        let dom;
        let element;

        this._context = context;

        this.updateSelfContext();


        element = this.render()


        let childContext = this.getContext();


        const that = this;

        if (element) {
            this.transformRef(element); //they will remove this    
        }

        dom = create(element, {
            owner: this,
            context: childContext
        });
        this._hostNode = dom;
        renderingComponentStack.pop();
        this.handleAfterRenderQueue();
        return dom;
    }
    updateProps(props, dom, context) {
        console.log('updateProps', context)
        this._context = context;
        const instance = this._instance;
        this.updateSelfContext();
        console.log('updateProps');
        const shouldRender = !instance.shouldComponentUpdate || !instance.shouldComponentUpdate(props, this._instance.state);


        console.log('props', props, this);
        if (this.type === "component") {
            for (const attrName in props) { //not on stateless
                if (props[attrName] !== this._instance.props[attrName] && attrMap.component[attrName]) {
                    attrMap.component[attrName](props[attrName], this._instance.props[attrName], dom, this, attrName);
                }
            }
        }

        this._instance.props = props;
        this._currentElement.props = props;

        let result;
        if (shouldRender) {
            renderingComponentStack.push(this);
            const element = this.render();
            this.transformRef(element); //they will remove this
            result = update(dom, element, {
                componentRef: this._instance,
                context: this.getContext()
            });
            renderingComponentStack.pop();
            this.handleAfterRenderQueue();
        }

        return result;

    }
    handleAfterRenderQueue() {
        this.afterRenderQueue.forEach((cb) => {
            console.log('cb', cb);
            cb(this._instance);
        });
        this.afterRenderQueue.length = 0;
    }
    render() {
        console.log("render");

        console.log('renderingComponentStack', renderingComponentStack);
        let element;
        if (this.type === "stateless") {
            console.log('render stateless', this._currentElement.props);
            element = this._instance.render.call(undefined, this._currentElement.props, this.getContext());
        } else {
            element = this._instance.render();
        }

        console.log("render end", element);
        return element;
    }
    handleStateQueue(oldState, props) {
        const cbList = [];
        const stateList = [];

        const instance = this._instance;

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
            cb.call(instance);
        });


        const shouldRender = !instance.shouldComponentUpdate || instance.shouldComponentUpdate(props, this._instance.state);

        instance.state = state;

        if (shouldRender) {
            renderingComponentStack.push(this);
            const element = instance.render();
            let context = this.getContext();

            this._hostNode = update(this._hostNode, element, {
                componentRef: instance,
                context
            });
            renderingComponentStack.pop();
            this.handleAfterRenderQueue();
        }

    }

}
class ReactDOMComponent {
    constructor(type, element, owner) {
        this._currentElement = element;
        if (owner) {
            this._currentElement._owner = owner;
        }
        const dom = document.createElement(type);
        this._hostNode = dom;
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
                            console.log("do")
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
        for (const attrName in element.props) {
            if (attrMap.dom[attrName]) {
                attrMap.dom[attrName](element.props[attrName], undefined, dom, this, attrName);
            } else {
                dom.setAttribute(attrName, element.props[attrName])
            }
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


function create(element, {
    owner,
    context
} = {}) {
    console.log('create', element, arguments[1])

    if (!isValidElement(element)) { //comment
        const dom = document.createComment("react-empty");
        dom[internalInstanceKey] = {
            _currentElement: element,
            _hostNode: dom
        };
        return dom;
    }

    const {
        type,
        props,
    } = element;
    if (isComponent(type)) {
        return new ReactCompositeComponentWrapper(type, element, owner, context);
    }


    //normal dom
    const instance = new ReactDOMComponent(type, element, owner);
    const dom = instance._hostNode;


    let children = []

    if (props.children) {
        let result = getChildren(dom, props.children, {}, owner, context)
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

function findTopOwner(owner) {
    if (!owner) {
        return;
    }
    while (owner._currentElement._owner) {
        owner = owner._currentElement._owner;
    }
    return owner;
}

function update(dom, element, {
    componentRef,
    context
} = {}) {
    console.log('update', dom, element, context, componentRef)
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





    function createAndReplace() {
        const newDom = create(element, {
            context
        });
        dom.parentElement.replaceChild(newDom, dom);
        return newDom;
    }
    if (isHost) {
        if (componentRef) {
            let owner = element0._owner;
            let lastOwner;
            let found;
            while (1) {
                if (owner && owner._instance === componentRef) {
                    found = true;
                    break;
                }
                lastOwner = owner;
                if (owner._currentElement._owner) {
                    owner = owner._currentElement._owner
                } else {
                    break;
                }
            }

            if (found) {
                if (lastOwner) {
                    return lastOwner.updateProps(element.props, dom, context);
                } else {

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

    }

    function replace() {
        const newDom = create(element, {
            componentRef,
            context
        });
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


    if (!equals(element0.props, element.props)) { //props changed        
        if (isComponent(element.type)) {
            return owner.updateProps(element.props, dom, context);
        } else { //normal dom            
            for (const attrName in element.props) {
                if (element0.props[attrName] !== element.props[attrName]) {
                    //                    console.log("not");
                    if (attrMap.dom[attrName]) {
                        attrMap.dom[attrName](element.props[attrName], element0.props[attrName], dom, instance, attrName);
                    } else {

                        dom.setAttribute(attrName, element.props[attrName])
                    }
                }
            }
            element0.props = element.props;
        }

    }

    if (!isComponent(element.type)) {
        const oldChildren = instance._renderedChildren;
        const newChildren = getChildren(dom, element.props.children, oldChildren, owner, context).children;


        console.log('oldChildren', oldChildren);
        for (const i in oldChildren) {
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
export {
    render
};
export default exports;
//window.ReactDOM = exports;