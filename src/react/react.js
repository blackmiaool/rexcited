import createElement from "./createElement.js";
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
class Component {
    constructor(props, context) {
        this.props = props;
        this.refs = {};
        this.context = context
    }
    setWrapper() {

    }
    forceUpdate() {
        const wrapper = this._reactInternalInstance;
        wrapper.doUpdate(this.state, this.props);
    }
    setState(updater, cb) {

        const wrapper = this._reactInternalInstance;

        wrapper.stateQueue.push({
            updater,
            cb
        });

        if (!wrapper.isAsyncSetState) {
            wrapper.handleStateQueue(this.props, true);
        }

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

    element.props.children = element.props.children || [];

    if (!Array.isArray(element.props.children)) {
        element.props.children = [element.props.children];
    }
    element.props.children = element.props.children.concat(children).map(function (child) {
        return cloneElement(child);
    });
    if (!element.props.children.length) {
        delete element.props.children;
    }

    return element;
}


let exports = {
    createElement,
    Component,
    Children,
    PropTypes,
    createClass,
    isValidElement,
    cloneElement
}


export {
    createElement,
    Component,
    Children,
    PropTypes,
    createClass,
    isValidElement,
    cloneElement
};
export default exports;
window.React = exports;
