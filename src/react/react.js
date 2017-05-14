import createElement from "./createElement.js";
import Children from "./children.js";
import propTypes from 'prop-types'

let isAsyncSetState = false;

function asyncSetState(value) {
    isAsyncSetState = value;
}

function createClass(obj) {
    console.log('createClass', obj);
    class a extends Component {

    }
    for (const i in obj) {

        if (typeof i === 'function' && i !== 'getDefaultProps') {
            a.prototype[i] = obj[i];
        } else {
            a[i] = obj[i];
        }

    }
    return a;
}
class Component {
    constructor(props, context) {
        this.props = props;
        this.refs = {};
        this.context = context
    }
    setWrapper() {

    }
    forceUpdate() {
        const instance = this._reactInternalInstance;
        instance.handleStateQueue(this.state, this.props);
    }
    setState(updater, cb) {
        const instance = this._reactInternalInstance;
        if (instance.setStateTimeout) {
            clearTimeout(instance.setStateTimeout);
        }
        instance.stateQueue.push({
            updater,
            cb
        });
        const execQueue = () => {
            instance.setStateTimeout = 0;
            instance.handleStateQueue(this.state, this.props);

        };
        if (isAsyncSetState) {
            instance.setStateTimeout = setTimeout(execQueue);

        } else {
            execQueue();
        }

    }
}

function isValidElement(element) {
    if (typeof element !== "object" || !element) {
        return false;
    }
    return true;
}
const PropTypes = propTypes.PropTypes

function cloneElement(element, config, children) {
    const props = Object.assign({}, element.props);

    const owner = element._owner;

    for (const i in config) {
        props[i] = config[i];
    }

    const childrenLength = arguments.length - 2;
    if (childrenLength === 1) {
        props.children = children;
    } else if (childrenLength > 1) {
        const childArray = Array(childrenLength);
        for (let i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
        }
        props.children = childArray;
    }
    const elementNew = createElement(element.type, props, ...props.children);
    elementNew._owner = owner;
    return elementNew;
}


let exports = {
    createElement,
    Component,
    asyncSetState,
    Children,
    PropTypes,
    createClass,
    isValidElement,
    cloneElement
}


export {
    createElement,
    Component,
    asyncSetState,
    Children,
    PropTypes,
    createClass,
    isValidElement,
    cloneElement
};
export default exports;
window.React = exports;