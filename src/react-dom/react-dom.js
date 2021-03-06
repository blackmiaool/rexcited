import React from 'react';
const internalInstanceKey = '__reactInternalInstance$' + Math.random().toString(36).slice(2);

const showLog = 0;

const number2pxKeys = {
    x: 1,
    y: 1,
    z: 1,
    borderRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    lineHeight: 1,
    width: 1,
    height: 1,
    left: 1,
    top: 1,
    right: 1,
    bottom: 1,
    margin: 1,
    marginTop: 1,
    marginLeft: 1,
    marginRight: 1,
    marginBottom: 1,
    padding: 1,
    paddingLeft: 1,
    paddingTop: 1,
    paddingRight: 1,
    paddingBottom: 1,
    backgroundPosition: 1,
    backgroundPosition_y: 1
}
let firstRender = true;

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

    if (!value) {
        dom.removeAttribute("style");
    }

    if (typeof value === 'object') {
        value = Object.assign({}, value);
    }

    if (typeof value === "string" && value) {
        dom.setAttribute("style", value);
    } else if (typeof value === 'object' && value) {
        if (Object.keys(value).length) {
            dom.setAttribute("style", "");
            for (const i in value) {
                if (number2pxKeys[i]) {
                    if (typeof value[i] === 'number') {
                        value[i] += 'px';
                    }
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
regiterAttr("value", "dom", function (value, previousValue, dom) {
    if (dom.tagName === 'TEXTAREA') {
        dom.value = value || '';
    } else {
        dom.setAttribute("value", value);
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

regiterAttr("key", "", function () {});
regiterAttr("children", "", function () {});

const events = [];

function firstToUpperCase(word) {
    return word[0].toUpperCase() + word.slice(1)
}

function addEvent(eventName) {
    const match = eventName.match(/^on(.+)/);
    if (match) {
        const event = match[1];
        const reg = /((?:mouse)|(?:key)|(?:touch))(\w+)$/;
        const match2 = event.match(reg);

        if (match2) {
            const reactEvent = 'on' + firstToUpperCase(match2[1]) + firstToUpperCase(match2[2])
            events.push({
                event: match[1],
                reactEvent
            });
        } else {
            const reactEvent = 'on' + firstToUpperCase(event);
            events.push({
                event: match[1],
                reactEvent
            });
        }

    }
}
for (const property in document.documentElement) {
    addEvent(property)
}
addEvent('ontap');
addEvent('ontouchstart');
addEvent('ontouchend');
addEvent('ontouchmove');

function onReactEvent(value, previousValue, dom, wrapper, attr) {
    const eventName = attr.match(/on(\w+)$/i)[1].toLowerCase();
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

function equals(x, y) {
    if (x === y) {
        return true;
    }
    if (!(typeof x === 'object' && x && typeof y === 'object' && y)) {
        if (x !== y) {
            return;
        }
    }
    for (const p in y) {
        if (p === "_owner" || p === "_refowner") {
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
                if (y[p] === x[p]) {
                    continue;
                } else {
                    return false;
                }
            default:
                if (y[p] != x[p]) {
                    return false;
                }
        }
    }

    for (const p in x) {
        if (typeof (y[p]) == 'undefined') {
            return false;
        }
    }

    return true;
}
let ccc = 1;

function getChildren(parent, children, old = {}, owner, context, instance) {
    if (showLog) {
        console.log('getChildren', parent, children, old, owner, context, ccc)
    }
    const cc = ccc;
    ccc++;



    if (!children) {
        if (showLog) {
            console.log('no children', cc);
        }
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
                if (child && isText(child.key)) {
                    key = `${preKey}\$${child.key}`;

                }
                if (!old[key]) {
                    const dom = create(child, {
                        owner,
                        context
                    });
                    append(dom, key);
                    _renderedChildren[key] = findOwnerUntil(dom[internalInstanceKey], owner);
                } else {
                    if (old[key] instanceof ReactCompositeComponentWrapper) {

                        if (child && old[key]._currentElement.type === child.type) {
                            if (equals(old[key]._currentElement.props, child.props) && !old[key].isContextChanged(context)) { //TODO
                                lastNode = old[key]._hostNode;
                            } else {
                                lastNode = old[key].updateProps(child.props, context);
                            }

                        } else {
                            lastNode = old[key]._hostNode;
                            if (showLog) {
                                console.log('replace child', cc, old[key])
                            }
                            //                            if (!child) {
                            old[key].remove();
                            //                            }
                            const dom = create(child, {
                                owner,
                                context
                            });

                            lastNode.parentElement.replaceChild(dom, lastNode);
                            lastNode = dom;
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
    if (showLog) {

        console.log('_renderedChildren', _renderedChildren, instance, arguments, cc);

    }

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
const renderingComponentStack = React.renderingComponentStack;
const globalAfterRenderQueue = [];

function handleQueue(queue0) {
    const queue = queue0.slice();
    queue0.length = 0;
    queue.forEach(func => {
        func()
    });
}

function asyncSetState(mode = true) {
    React.isAsyncSetState = mode;
}

class ReactWrapper {
    constructor(element, owner) {
        if (typeof element === 'object' && element) {
            this._currentElement = Object.assign({}, element);
        }


        if (owner && this._currentElement) {
            this._currentElement._owner = owner;
        }
        if (typeof this._currentElement === 'string') {
            this.owner = owner;
        }
    }
    bindDom(dom) { //not on composite
        this._hostNode = dom;
        this._instance = dom;
        dom[internalInstanceKey] = this;
    }
    refAttach(ref) {

        if (!ref && !this.previousRef) {
            return;
        }

        const owner = this._currentElement._refowner || this._currentElement._owner;
        if (!owner && typeof ref === 'string') {

            console.error(this, ref, this.previousRef);
            throw "no owner ref";
            return;
        }

        if (ref !== this.previousRef) {
            if (typeof this.previousRef === 'string') {
                delete owner._instance.refs[this.previousRef];
            }
            if (typeof ref === 'string') {
                owner._instance.refs[ref] = this._instance;
            } else if (typeof ref === 'function') {
                ref.call(owner ? owner._instance : undefined, this._instance);
            }
            this.previousRef = ref;
        }
    }
    handleRemove() {
        this.isMounted = false;
        if (this._instance.componentWillUnmount) {
            asyncSetState();
            this._instance.componentWillUnmount();
            this.handleStateQueue(this._instance.props);
        }
    }

}
class ReactCompositeComponentWrapper extends ReactWrapper {
    constructor(type, element, owner, context = {}) {
        super(element, owner);

        this.isMounted = true;
        this.jsxType = type;

        this.assignDefaultProps(element.props);

        if (isStateLess(type)) {
            this._instance = new StatelessComponent(type, context);
            this.type = "stateless";
        } else {
            this.type = "component";
        }


        let instance;
        Object.assign(this, {
            stateQueue: [],
            afterRenderQueue: []
        });
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


        if (isReactComponent(type)) {
            if (instance.componentDidMount) {
                globalAfterRenderQueue.push(this.didMount.bind(this));
            }
        }
        const dom = this.create(element.props, context);

        return dom;
    }
    didMount() {
        if (!this.isMounted) {
            return;
        }
        asyncSetState();
        this._instance.componentDidMount();
        this.handleStateQueue(this._instance.props, true);
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
    getContext() {
        if (this._instance.getChildContext) {
            const context = this._instance.getChildContext();
            return Object.assign({}, this._context, context);
        } else {
            return this._context;
        }
    }
    getSelfContext(context = this._context) {
        //        this._context = this._context || {}
        let contextThis = {}
        if (this._currentElement.type.contextTypes) {
            for (const i in this._currentElement.type.contextTypes) {
                contextThis[i] = context[i];
            }
        }
        return contextThis;
    }
    updateSelfContext() {
        this._instance.context = this.getSelfContext();
    }
    isContextChanged(context) {
        const ret = !equals(this._instance.context, this.getSelfContext(context));
        return ret;
    }
    create(props, context) {

        let dom;
        let element;

        this._context = context;
        this.updateSelfContext();
        if (this._instance.componentWillMount) {
            asyncSetState();
            this._instance.componentWillMount();
            this.handleStateQueue(props);
        }

        let childContext = this.getContext();

        const that = this;
        renderingComponentStack.push(this);
        element = this.render()

        dom = create(element, {
            owner: this,
            context: childContext
        });
        renderingComponentStack.pop();
        if (!dom) {
            console.warn('wrong hostNode', element, this, dom);
        }
        this._hostNode = dom;
        this.refAttach(this._currentElement.ref);
        this.handleAfterRenderQueue();
        return dom;
    }
    updateProps(nextProps, nextRawContext) {
        if (showLog) {
            console.log('updateProps', nextProps, this)
        }
        this._context = nextRawContext;
        this.assignDefaultProps(nextProps);
        const nextContext = this.getSelfContext();
        if (this._instance.componentWillReceiveProps) {
            asyncSetState();

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
        if (showLog) {
            console.log("render", this._instance);

            console.log('renderingComponentStack', renderingComponentStack);
        }
        let element;
        if (this.type === "stateless") {
            const props = this._currentElement.props;
            const context = this.getContext();
            if (showLog) {
                console.log('render stateless', props, context, this._instance.render);
            }
            element = this._instance.render.call(undefined, props, context);
        } else {

            element = this._instance.render();
        }

        if (Array.isArray(element)) {
            element = element[0];
        }
        if (showLog) {
            console.log("render end", element);
        }
        return element;
    }

    handleStateQueue(props, render) {
        asyncSetState(false);
        const index = ReactCompositeComponentWrapper.dirtyQueue.indexOf(this);
        if (index !== -1) {
            ReactCompositeComponentWrapper.dirtyQueue.splice(index, 1);
        }
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

        if (render) {
            this.doUpdate(state, this._instance.props, this._instance.context);
        }
        this._instance.state = state;
        cbList.forEach((cb) => {
            cb.call(instance);
        });

    }
    forceUpdate(state, props) {
        this.doUpdate(state, props, this.getSelfContext());
    }
    addToDirty(wrapper) {
        if (ReactCompositeComponentWrapper.dirtyQueue.indexOf(this) === -1) {
            ReactCompositeComponentWrapper.dirtyQueue.push(this);
        }
    }
    static dirtyQueue = []
    static handleDirty() {
        ReactCompositeComponentWrapper.dirtyQueue.forEach(function (wrapper) {
            wrapper.handleStateQueue(wrapper._instance.props, true);
        });
    }
    static afterUpdate() {
        if (!renderingComponentStack.length && !firstRender) {
            handleQueue(globalAfterRenderQueue);
            ReactCompositeComponentWrapper.handleDirty();
        }
    }
    doUpdate(nextState, nextProps, nextContext) {
        const instance = this._instance;
        let result;
        this.getSelfContext();

        let shouldRender;
        if (instance.shouldComponentUpdate) {
            shouldRender = instance.shouldComponentUpdate(nextProps, nextState, nextContext);
        } else {
            shouldRender = true;
        }

        if (shouldRender) {
            const dom = this._hostNode;

            if (instance.componentWillUpdate) {
                asyncSetState();
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
                }
                instance.props = nextProps;
                this._currentElement.props = nextProps;
            }
            instance.context = nextContext;


            renderingComponentStack.push(this);
            const element = this.render();

            result = update(dom, element, {
                componentRef: instance,
                context: this.getContext()
            });
            renderingComponentStack.pop();
            const preHostNode = this._hostNode;
            this._hostNode = result;
            let wrapper = this;
            while (wrapper._currentElement._owner && wrapper._currentElement._owner._hostNode === preHostNode) {
                wrapper = wrapper._currentElement._owner;
                wrapper._hostNode = result;

            }


            this.handleAfterRenderQueue();


            if (instance.componentDidUpdate) {
                asyncSetState();
                instance.componentDidUpdate(prevProps, prevState, prevContext)
                this.handleStateQueue(instance.props, true);
            }

        } else {
            instance.state = nextState;
            instance.props = nextProps;
            result = this._hostNode;
        }
        ReactCompositeComponentWrapper.afterUpdate();
        return result;
    }
    remove() {
        if (!this.isMounted) {
            return;
        }

        this.handleRemove();
        this._hostNode[internalInstanceKey].removeUntil(this);
    }

}
class ReactDOMComponent extends ReactWrapper {

    constructor(type, element, owner) {
        super(element, owner);

        const dom = document.createElement(type);
        this.bindDom(dom);

        if (type === 'input' || type === 'textarea') {
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
        Object.assign(this, {
            //            stateQueue: [],
            afterRenderQueue: []
        });
        this.eventMap = {};

        for (const attrName in element.props) {
            const value = element.props[attrName];
            if (attrMap.dom[attrName]) {
                attrMap.dom[attrName](value, undefined, dom, this, attrName);
            } else {
                if (value) {
                    dom.setAttribute(attrName, value);
                } else {
                    dom.removeAttribute(attrName)
                }
            }
        }
        this.refAttach(element.ref);
        handleQueue(this.afterRenderQueue);
    }
    removeUntil(wrapper) {
        const parent = getOwnerOnSameDom(this._hostNode);
        parent.some(function (owner) {
            if (owner === wrapper) {
                return true;
            }
            owner.remove();
            return false;
        });
    }
    remove() {
        if (!this.isMounted) {
            return;
        }
        console.log('remove', this._hostNode);
        this.handleRemove();

        function handleChild(child) {

            console.log('child', child);
            child && child.remove && child.remove();
            const arr = getOwnerOnSameDom(child._hostNode);
            arr.forEach(function (owner) {
                owner.remove();
            });
        }

        //        const arr = getOwnerOnSameDom(this._hostNode);
        //        arr.forEach(function (owner) {
        //            owner.remove();
        //        });

        React.Children.forEach(this._renderedChildren, handleChild);
    }

}
class ReactDOMTextComponent extends ReactWrapper {
    constructor(element, dom, owner) {
        super(element, owner);
        this.bindDom(dom);
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
    if (showLog) {
        console.log('create', element, {
            owner,
            context
        });
    }

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
    const wrapper = new ReactDOMComponent(type, element, owner);
    const dom = wrapper._hostNode;

    if (props.children) {
        let result = getChildren(dom, props.children, {}, owner, context, wrapper);
        wrapper._renderedChildren = result.children;
    }
    return dom;
}

function isComponent(type) {
    return typeof type === "function";
}

function isStateLess(type) {
    return isComponent(type) && !isReactComponent(type);
}

function isReactComponent(type) {

    return type.prototype instanceof React.Component || (type.prototype && type.prototype.render);
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

function getOwnerOnSameDom(dom) {
    let wrapper = dom[internalInstanceKey];
    const ret = []
    do {
        ret.push(wrapper);
        wrapper = wrapper._currentElement && wrapper._currentElement._owner;
    } while (wrapper && wrapper._hostNode === dom);
    return ret;
}

function update(dom, element, {
    componentRef,
    context
} = {}) {
    if (showLog) {
        console.log('update', dom, element, context, componentRef)
    }
    let forceRender = false;
    const wrapper = dom && dom[internalInstanceKey];
    const element0 = wrapper._currentElement;

    if (!element) { //dom to comment        
        if (dom.nodeName === '#comment') {
            return dom;
        } else {
            const arr = getOwnerOnSameDom(dom);
            arr[arr.length - 1].remove();
        }
        if (showLog) {
            console.log('dom to comment')
        }
        const comment = document.createComment("react-empty: ?");
        dom.parentElement && dom.parentElement.replaceChild(comment, dom)
        let wrapper = dom[internalInstanceKey];
        //        comment[internalInstanceKey] = wrapper;
        if (componentRef) {
            wrapper._currentElement._owner = componentRef._reactInternalInstance;
        }

        //        comment[internalInstanceKey] = 
        getOwnerOnSameDom(dom).forEach(function (owner) {
            owner._hostNode = comment;
        });
        return comment;
    }

    if (dom.nodeType === 8 && element) { //comment, force render
        forceRender = true;
    }




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
        if (showLog) {
            console.log('createAndReplace');
        }
        dom[internalInstanceKey].remove && dom[internalInstanceKey].remove();
        const newDom = create(element, {
            context,
            owner: (componentRef || {})._reactInternalInstance
        });
        //        console.trace('createAndReplace', newDom, dom)
        //        if (newDom.nodeName === '#comment' && dom.nodeName === '#comment') {
        //
        //        } else {
        if (dom.parentElement) {
            dom.parentElement.replaceChild(newDom, dom);
        }
        //        }

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
                if (lastOwner && lastOwner._currentElement.type === element.type) {
                    return lastOwner.updateProps(element.props, context);
                } else {
                    //                    return createAndReplace();
                }
            } else {
                return createAndReplace();

            }
        } else if (element.type !== element0.type || forceRender) {
            if (showLog) {
                console.log("type changed", element.type, element0.type)
            }
            return createAndReplace();
        } else {

        }

    }

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

    if (isComponent(element.type)) {
        wrapper.refAttach(element.ref);
        wrapper._currentElement.ref = element.ref;
    }


    if (!equals(element0.props, element.props)) { //props changed        
        if (isComponent(element.type)) {
            return owner.updateProps(element.props, context);
        } else { //normal dom            
            for (const attrName in element.props) {
                const value = element.props[attrName];
                const value0 = element0.props[attrName];
                if (value0 !== value) {
                    //                    console.log("not");
                    if (attrMap.dom[attrName]) {
                        attrMap.dom[attrName](value, value0, dom, wrapper, attrName);
                    } else {
                        if (value) {
                            dom.setAttribute(attrName, value);
                        } else {
                            dom.removeAttribute(attrName)
                        }

                    }
                }
            }
            element0.props = element.props;
        }
    }




    if (!isComponent(element.type)) {
        const oldChildren = wrapper._renderedChildren;

        const newChildren = getChildren(dom, element.props.children, oldChildren, owner, context).children;

        for (const i in oldChildren) {
            if (!newChildren[i] && oldChildren[i]) {

                oldChildren[i].remove();
                oldChildren[i]._hostNode.parentElement.removeChild(oldChildren[i]._hostNode);
            }
        }

        wrapper._renderedChildren = newChildren;

    }



    return dom;
}

function render(element, target) {

    if (target.childNodes[0]) {
        update(target.childNodes[0], element);
    } else {
        const created = create(element);

        created.setAttribute('data-reactroot', "");
        created.setAttribute('data-rexcited', "");
        target.appendChild(created);
    }
    handleQueue(globalAfterRenderQueue);
    firstRender = false;
}

function findDOMNode(component) {
    if (component instanceof Node) {
        return component;
    }

    if (!component) {
        return;
    }
    return component._reactInternalInstance._hostNode;
}
const exports = {
    render,
    findDOMNode
}

module.exports = exports;
window.ReactDOM = exports;
