(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.React = factory());
}(this, (function () { 'use strict';

//import $ from "jquery";






function createElement(type, config, ...children) {
    if (!config) {
        config = {};
    }

    const instance = {
        type,
        props: config
    };
    if (children.length) {
        instance.props.children = children;
    }
    return instance;
}


//window.React = exports;

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
const exports$1 = {
    createElement,
    Component,
    asyncSetState
};

//window.React = exports;

return exports$1;

})));
