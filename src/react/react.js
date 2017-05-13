import createElement from "./createElement.js";
import Children from "./children.js";

let isAsyncSetState = false;

function asyncSetState(value) {
    isAsyncSetState = value;
}
class Component {
    constructor(props, context) {
        this.props = props;
        this.refs = {};
        this.context = context
    }
    setWrapper() {

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
const exports = {
    createElement,
    Component,
    asyncSetState,
    Children
}
export {
    createElement,
    Component,
    asyncSetState,
    Children
};
export default exports;
//window.React = exports;