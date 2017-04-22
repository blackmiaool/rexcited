import createElement from "./createElement";

class Component {
    constructor(props) {
        this.props = props;
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

        instance.setStateTimeout = setTimeout(() => {
            instance.setStateTimeout = 0;
            instance.handleStateQueue(this.state, this.props);

        });
    }
}
const exports = {
    createElement,
    Component
}
export default exports;
//window.React = exports;
