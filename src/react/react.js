import Children from "./children.js";
import propTypes from 'prop-types'

const createClassStaticKeys = ['getDefaultProps', 'getInitialState', 'propTypes', 'statics']

function createClass(obj) {

    class a extends Component {

    }
    for (const i in obj) {
        if (createClassStaticKeys.indexOf(i) > -1) {
            a[i] = obj[i];
        } else {
            a.prototype[i] = obj[i];
        }

    }
    a.originalCreateClassObj = obj;
    return a;
}
let cnt = 0;
class Component {
    constructor(props, context) {
        this.props = props;
        this.refs = {};
        this.context = context
    }
    setWrapper() {

    }
    forceUpdate() {
        cnt++;
        const wrapper = this._reactInternalInstance;
        wrapper.forceUpdate(this.state, this.props);
        cnt--;
        console.log('cnt', cnt);
    }
    setState(updater, cb) {
        cnt++;
        const wrapper = this._reactInternalInstance;

        wrapper.stateQueue.push({
            updater,
            cb
        });

        if (!exports.isAsyncSetState) {
            wrapper.handleStateQueue(this.props, true);
        } else {
            wrapper.addToDirty();
        }

        //        console.log(renderingComponentStack.length);

    }
}

function isText(key) {
    return typeof key === "string" || typeof key === "number";
}

function isValidElement(element) {
    if (typeof element !== "object" || !element) {
        return false;
    }
    return true;
}
const PropTypes = propTypes.PropTypes

function cloneElement(element, config, ...children) {

    if (!isValidElement(element)) {
        return element;
    }
    const element0 = element;


    element = Object.assign({}, element);
    element.props = Object.assign({}, element.props, config);
    //    if (element.props.key) {
    //        element.key = element.props.key;
    //        delete element.props.key;
    //    }
    element.key = element.props.key || element.key;
    element.ref = element.props.ref || element.ref;
    element._owner = element.props._owner || element._owner;
    element._refowner = element.props._refowner || element._refowner;

    element.props.children = element.props.children || [];

    if (!Array.isArray(element.props.children)) {
        element.props.children = [element.props.children];
    }
    if (children.length) {
        element.props.children = children;
    }
    element.props.children = element.props.children.map(function (child) {
        return cloneElement(child);
    });

    if (element.props.children.length === 1) {
        element.props.children = element.props.children[0]
    }
    if (Array.isArray(element.props.children) && !element.props.children.length) {
        delete element.props.children;
    }

    return element;
}

function createElement(type, props, ...children) {

    if (!props) {
        props = {};
    }
    props = Object.assign({}, props);
    const element = {
        type,
        props
    };
    if (props.key) {
        element.key = props.key;
        delete props.key
    }
    if (props.ref) {
        element.ref = props.ref;
        delete props.ref
    }
    if (children.length > 1) {
        element.props.children = children;
    } else if (children.length === 1) {
        element.props.children = children[0];
    }
    
    if (renderingComponentStack.length) {
        element._refowner = renderingComponentStack[renderingComponentStack.length - 1];
    } else {
        //        console.trace("no owner", element);
    }
    return element;
}

const renderingComponentStack = [];
let exports = {
    createElement,
    Component,
    Children,
    PropTypes,
    createClass,
    isValidElement,
    cloneElement,
    renderingComponentStack,
}

export {
    createElement,
    Component,
    Children,
    PropTypes,
    createClass,
    isValidElement,
    cloneElement,
    renderingComponentStack,
};
export default exports;
window.React = exports;