import React from 'react';
const internalInstanceKey = '__reactInternalInstance$' + Math.random().toString(36).slice(2);

function log() {
    //    console.log.apply(console, arguments);
}
const _correlate = ',x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,';

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

regiterAttr("dangerouslySetInnerHTML", "dom", function (value, previousValue, dom) {
    dom.innerHTML = value.__html;
});

regiterAttr("style", "dom", function (value, previousValue, dom) {

    if (value && previousValue && equals(value, previousValue)) {
        return;
    }
    if (typeof value === 'number') {
        value += 'px';
    }
    if (!value) {
        dom.removeAttribute("style");
    }
    if (typeof value === "string" && value) {
        dom.setAttribute("style", value);
    } else if (typeof value === 'object' && value) {
        if (Object.keys(value).length) {
            dom.setAttribute("style", "");
            for (const i in value) {
                if (typeof value[i] === 'number') {
                    value[i] += 'px';
                }
            }
            Object.assign(dom.style, value);
        }

    }

});
regiterAttr("className", "dom", function (value, previousValue, dom) {
    if (!value) {
        dom.setAttribute("class", "");
    } else {
        dom.setAttribute("class", value);
    }

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
    if (owner) {
        if (typeof value === "function") {
            owner.afterRenderQueue.push(value.bind(undefined, wrapper._instance));
        } else {
            owner.afterRenderQueue.push(() => {
                owner._instance.refs[value] = wrapper._instance;
            });
        }
    }

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
        console.log('onReactEvent', eventName);
        e.nativeEvent = e;
        value(e);
    };
    dom.addEventListener(eventName, listener);
    wrapper.eventMap[eventName] = listener;
    //    log('onReactEvent', attr, value, eventName);

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
    if (!(typeof x === 'object' && x && typeof y === 'object' && y)) {
        if (x !== y) {
            return;
        }
    }
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
    log('getChildren', parent, children, old, owner, context)
    if (!children) {
        return {
            children: {}
        };
    }

    const _renderedChildren = {};

    let prependParent = true;
    let lastNode;

    function append(node, key) {

        if (prependParent && !lastNode) {
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

    function handleChild(child = '', i = 0) {
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
            } else if (Array.isArray(child)) { //array 
                child.forEach((ele, j) => {
                    recursion(ele, `${key}:`, j);
                });
            } else {
                //                if (child.props.key) {
                //                    child.key = child.props.key.match(/\w+$/)[0];
                //                    delete child.props.key;
                //                }



                if (child && isText(child.key)) {
                    key = `${preKey}\$${child.key}`;

                }
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
                    //                        log("else")
                    //                        _renderedChildren[key] = null;
                    //                    }

                    //                    info('!!!!!!!!!!!!', _renderedChildren[key], owner)

                } else {
                    if (old[key] instanceof ReactCompositeComponentWrapper) {

                        if (child && old[key]._currentElement.type === child.type) {
                            lastNode = old[key].updateProps(child.props, context);
                        } else {
                            lastNode = old[key]._hostNode;
                            log('replace child')
                                //                            if (!child) {
                            old[key].remove();
                            //                            }
                            const dom = create(child, {
                                owner,
                                context
                            });
                            lastNode.parentElement.replaceChild(dom, lastNode);
                            lastNode = dom;
                            //                            lastNode = update(old[key]._hostNode, child, {
                            //                                componentRef: old[key]._instance,
                            //                                context
                            //                            });
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
    }
    if (Array.isArray(children)) {
        children.forEach(handleChild);
    } else {
        handleChild(children)
    }

    log('_renderedChildren', _renderedChildren);
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
        this.render = (props, context) => {
            return type(props, context);
        };
    }
}
const renderingComponentStack = [];
const afterRenderQueue = [];

function handleQueue(queue) {
    queue.forEach(func => func());
    queue.length = 0;
}
class ReactCompositeComponentWrapper {
    constructor(type, element, owner, context = {}) {

        element = Object.assign({}, element);
        this._currentElement = element;
        if (owner) {
            this._currentElement._owner = owner;
        }

        this.jsxType = type;

        this.assignDefaultProps(element.props);

        if (isStateLess(type)) {
            this._instance = new StatelessComponent(type, context);
            this.type = "stateless";
        } else {
            this.type = "component";
        }


        let instance;
        if (isReactComponent(type)) {
            instance = new type(element.props, context);

            if (type.statics) {
                for (const i in type.statics) {
                    type[i] = type.statics[i];
                }
            }
            if (type.getInitialState) {
                instance.state = type.getInitialState.call(instance);
            }

            if (type.getDefaultProps) { //deprecated
                type.defaultProps = type.getDefaultProps.call(instance);
                this.assignDefaultProps(element.props);
                instance.props = element.props;
            }

            instance.context = context;
            this._instance = instance;
            instance._reactInternalInstance = this;
            if (!instance.state) {
                instance.state = {};
            }

            for (const attrName in element.props) {
                if (attrMap.component[attrName]) {
                    attrMap.component[attrName](element.props[attrName], undefined, instance, this, attrName);
                }
            }




        }

        Object.assign(this, {
            stateQueue: [],
            afterRenderQueue: []
        });
        if (isReactComponent(type)) {

            if (instance.componentDidMount) {
                afterRenderQueue.push(() => {
                    this.isAsyncSetState = true;
                    instance.componentDidMount();
                    this.handleStateQueue(this._instance.props, true);
                });
            }
        }
        const dom = this.create(element.props, context);


        return dom;
    }
    assignDefaultProps(props) {
        if (this.jsxType.defaultProps) {
            for (const i in this.jsxType.defaultProps) {
                if (props[i] === undefined) {
                    props[i] = this.jsxType.defaultProps[i];
                }
            }
        }
    }
    transformRef(element) {
        const that = this;
        const refKey = element.props.ref;
        if (typeof refKey === "string") {
            element.ref = function (ref) {
                log("this", that);
                that._instance.refs[refKey] = ref;
            }
        }

        function handleRef(child) {
            if (typeof child === "object" && child && child.props) {
                that.transformRef(child);
            }
        }

        if (element.props.children) {
            if (Array.isArray(element.props.children)) {
                element.props.children.forEach(handleRef);
            } else {
                handleRef(element.props.children)
            }

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
    getSelfContext() {
        this._context = this._context || {}
        let contextThis = {}
        if (this._currentElement.type.contextTypes) {
            for (const i in this._currentElement.type.contextTypes) {
                contextThis[i] = this._context[i];
            }
        }
        return contextThis;
    }
    updateSelfContext() {
        this._instance.context = this.getSelfContext();
    }
    create(props, context) {
        renderingComponentStack.push(this);
        let dom;
        let element;

        this._context = context;

        this.updateSelfContext();

        if (this._instance.componentWillMount) {
            this.isAsyncSetState = true;
            this._instance.componentWillMount();
        }
        if (this._instance.componentWillMount) {
            this.handleStateQueue(props);
        }

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

        if (!dom) {
            log('wrong hostNode', element, this, dom);
        }

        this._hostNode = dom;

        renderingComponentStack.pop();
        if (!renderingComponentStack.length) {
            handleQueue(afterRenderQueue);
        }

        this.handleAfterRenderQueue();


        return dom;
    }
    updateProps(nextProps, nextRawContext) {
        log('updateProps', nextProps, this)
        this._context = nextRawContext;
        this.assignDefaultProps(nextProps);
        const nextContext = this.getSelfContext();
        if (this._instance.componentWillReceiveProps) {
            this.isAsyncSetState = true;

            this._instance.componentWillReceiveProps(nextProps, nextContext);
            this.handleStateQueue(nextProps);
        }


        const instance = this._instance;

        return this.doUpdate(this._instance.state, nextProps, nextContext);
    }

    handleAfterRenderQueue() {
        this.afterRenderQueue.forEach((cb) => {
            cb(this._instance);
        });
        this.afterRenderQueue.length = 0;
    }
    render() {
        log("render", this._instance);

        log('renderingComponentStack', renderingComponentStack);
        let element;
        if (this.type === "stateless") {
            const props = this._currentElement.props;
            const context = this.getContext();
            log('render stateless', props, context, this._instance.render);
            element = this._instance.render.call(undefined, props, context);
        } else {
            element = this._instance.render();
        }
        if (Array.isArray(element)) {
            element = element[0];
        }
        log("render end", element);
        return element;
    }
    remove() {
        if (this._instance.componentWillUnmount) {
            this.isAsyncSetState = true;
            this._instance.componentWillUnmount();
            this.handleStateQueue(this._instance.props);
        }

    }
    handleStateQueue(props, render) {
        this.isAsyncSetState = false;
        const instance = this._instance;
        const oldState = instance.state;
        if (!this.stateQueue.length) {
            return;
        }
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
            cb.call(instance);
        });
        instance.state = state;
        if (render) {
            this.doUpdate(state, this._instance.props, this._instance.context);
        }
        //        this.doUpdate(state, this._instance.props);
    }
    doUpdate(nextState, nextProps, nextContext) {
        const instance = this._instance;
        let result;
        this.getSelfContext();

        let shouldRender;
        if (instance.shouldComponentUpdate) {
            //            this.isAsyncSetState = true;
            shouldRender = instance.shouldComponentUpdate(nextProps, nextState, nextContext);
            //            this.handleStateQueue(nextProps,!shouldRender);
        } else {
            shouldRender = true;
        }

        if (shouldRender) {
            const dom = this._hostNode;

            if (instance.componentWillUpdate) {
                this.isAsyncSetState = true;
                instance.componentWillUpdate(nextProps, nextState, nextContext)
                this.handleStateQueue(nextProps);
            }

            const prevState = instance.state;
            const prevProps = instance.props;
            const prevContext = instance.context;

            instance.state = nextState;
            if (nextProps !== prevProps) {
                if (this.type === "component") {
                    for (const attrName in nextProps) { //not on stateless
                        if (nextProps[attrName] !== this._instance.props[attrName] && attrMap.component[attrName]) {
                            attrMap.component[attrName](nextProps[attrName], this._instance.props[attrName], dom, this, attrName);
                        }
                    }
                    if (instance.ref) {
                        attrMap.component.ref(instance.ref, this._instance.props[attrName], dom, this, attrName);
                    }
                }
                instance.props = nextProps;
                this._currentElement.props = nextProps;
            }
            instance.context = nextContext;


            renderingComponentStack.push(this);
            const element = this.render();
            this.transformRef(element); //they will remove this
            result = update(dom, element, {
                componentRef: instance,
                context: this.getContext()
            });
            this._hostNode = result;
            renderingComponentStack.pop();
            if (!renderingComponentStack.length) {
                handleQueue(afterRenderQueue);
            }
            this.handleAfterRenderQueue();
            if (instance.componentDidUpdate) {
                this.isAsyncSetState = true;
                instance.componentDidUpdate(prevProps, prevState, prevContext)
                this.handleStateQueue(instance.props, true);
            }
        } else {
            instance.state = nextState;
            instance.props = nextProps;
            result = this._hostNode;
        }
        return result;
    }

}
class ReactDOMComponent {
    constructor(type, element, owner) {
        element = Object.assign({}, element);
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
                            log("do")
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
    remove() {

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


    if (!React.isValidElement(element)) { //comment
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

    return type.prototype instanceof React.Component || type.prototype.render;
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
    //    if (!dom) { //todo
    //        return create(element, {
    //            context
    //        });
    //    }
    log('update', dom, element, context, componentRef)
    let forceRender = false;
    if (!element && dom) { //dom to comment
        log('dom to comment')
        const comment = document.createComment("react-empty: ?");
        //        dom[internalInstanceKey].remove&&dom[internalInstanceKey].remove();
        dom.parentElement && dom.parentElement.replaceChild(comment, dom)
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

    if (React.isValidElement(element0)) {
        owner = element0._owner;
    } else {

    }


    let isHost = false;
    if (owner) {
        isHost = owner._hostNode === dom;
        ownerType = owner._currentElement.type;
    }





    function createAndReplace() {

        dom[internalInstanceKey].remove && dom[internalInstanceKey].remove();
        const newDom = create(element, {
            context,
            owner: (componentRef || {})._reactInternalInstance
        });
        if (dom.parentElement) {

            dom.parentElement.replaceChild(newDom, dom);


        }

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
                    return lastOwner.updateProps(element.props, context);
                } else {
                    //                    return createAndReplace();
                }
            } else {
                return createAndReplace();

            }
        } else if (element.type !== element0.type || forceRender) {
            log("type changed", element.type, element0.type)
            return createAndReplace();
        } else {

        }

    }

    //    function replace() {
    //        const newDom = create(element, {
    //            owner:componentRef._reactInternalInstance,
    //            context
    //        });
    //        if (dom.parentElement) {
    //            dom.parentElement.replaceChild(newDom, dom);
    //        }
    //
    //        return newDom;
    //    }
    if (forceRender || typeof element0 !== typeof element) {
        return createAndReplace();
    }

    if (React.isValidElement(element0) && React.isValidElement(element)) {
        if (element.type !== element0.type) {
            return createAndReplace();
        }
    } else {
        if (element !== element0) {
            return createAndReplace();
        }
    }


    if (!equals(element0.props, element.props)) { //props changed        
        if (isComponent(element.type)) {
            return owner.updateProps(element.props, context);
        } else { //normal dom            
            for (const attrName in element.props) {
                if (element0.props[attrName] !== element.props[attrName]) {
                    //                    log("not");
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


        log('oldChildren', oldChildren);
        for (const i in oldChildren) {
            if (!newChildren[i] && oldChildren[i]) {

                oldChildren[i].remove();
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
    //    log(targetInstance)
}

function findDOMNode(component) {
    if (!component) {
        return;
    }
    return component._reactInternalInstance._hostNode;
}
const exports = {
    render,
    findDOMNode
}
export {
    render,
    findDOMNode
};
export default exports;
//window.ReactDOM = exports;
