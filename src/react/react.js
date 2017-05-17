import createElement from "./createElement.js";
import Children from "./children.js";
import propTypes from 'prop-types'

let isAsyncSetState = false;

function asyncSetState(value) {
    isAsyncSetState = value;
}

const createClassStaticKeys = ['getDefaultProps', 'getInitialState', 'propTypes', 'statics']

function createClass(obj) {
    console.log('createClass', obj);
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
        const instance = this._reactInternalInstance;
        instance.handleStateQueue(this.state, this.props);
    }
    setState(updater, cb) {
        console.log('setState')
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
    console.log('cloneElement', element, config, children);
    if (!isValidElement(element)) {
        return element;
    }
    if (Array.isArray(element)) {
        console.log('array', element);
        return element.map(a => a);
    }
    const element0 = element;


    element = Object.assign({}, element);
    element.props = Object.assign({}, element.props, config);

    element.props.children = element.props.children || [];

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
