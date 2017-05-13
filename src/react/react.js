import createElement from "./createElement.js";

let isAsyncSetState = false;

function asyncSetState(value) {
    isAsyncSetState = value;
}
class Component {
    constructor(props) {
        this.props = props;
        this.refs = {};
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
    asyncSetState
}
export default exports;
//window.React = exports;