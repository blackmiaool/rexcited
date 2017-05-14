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
console.log('Component', Component)
    //if (window.React) {
    //    exports = window.React;
    //}
function isValidElement(element) {
    if (typeof element !== "object" || !element) {
        return false;
    }
    return true;
}
const PropTypes = propTypes.PropTypes

function cloneElement(element, config, children) {
    var propName;

    // Original props are copied
    var props = Object.assign({}, element.props);

    // Reserved names are extracted
    var key = element.key;
    var ref = element.ref;
    // Self is preserved since the owner is preserved.
    var self = element._self;
    // Source is preserved since cloneElement is unlikely to be targeted by a
    // transpiler, and the original source is probably a better indicator of the
    // true owner.
    var source = element._source;

    // Owner will be preserved, unless ref is overridden
    var owner = element._owner;

    for (const i in config) {
        props[i] = config[i];
    }
    //    if (config != null) {
    //        if (hasValidRef(config)) {
    //            // Silently steal the ref from the parent.
    //            ref = config.ref;
    //            owner = ReactCurrentOwner.current;
    //        }
    //        if (hasValidKey(config)) {
    //            key = '' + config.key;
    //        }
    //
    //        // Remaining properties override existing props
    //        var defaultProps;
    //        if (element.type && element.type.defaultProps) {
    //            defaultProps = element.type.defaultProps;
    //        }
    //        for (propName in config) {
    //            if (hasOwnProperty.call(config, propName) && !RESERVED_PROPS.hasOwnProperty(propName)) {
    //                if (config[propName] === undefined && defaultProps !== undefined) {
    //                    // Resolve default props
    //                    props[propName] = defaultProps[propName];
    //                } else {
    //                    props[propName] = config[propName];
    //                }
    //            }
    //        }
    //    }

    // Children can be more than one argument, and those are transferred onto
    // the newly allocated props object.
    var childrenLength = arguments.length - 2;
    if (childrenLength === 1) {
        props.children = children;
    } else if (childrenLength > 1) {
        var childArray = Array(childrenLength);
        for (var i = 0; i < childrenLength; i++) {
            childArray[i] = arguments[i + 2];
        }
        props.children = childArray;
    }
    const elementNew = createElement(element.type, props, ...props.children);
    elementNew._owner = owner;
    console.log('elementNew', elementNew);
    return elementNew;
    //    return ReactElement(element.type, key, ref, self, source, owner, props);
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