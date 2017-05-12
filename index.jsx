//import React from "./src/react/react.js";
//import ReactDOM from "./src/react-dom/react-dom.js"
const PropTypes = require('prop-types');

class Button extends React.Component {
    render() {
        return (
            <button style={{background: this.context.color}}>
        {this.props.children}
      </button>
        );
    }
}

Button.contextTypes = {
    color: PropTypes.string
};

class Message extends React.Component {
    render() {
        return (
            <div>
        {this.props.text} <Button>Delete</Button>
      </div>
        );
    }
}

class MessageList extends React.Component {
    getChildContext() {
        return {
            color: "purple"
        };
    }

    render() {
        const children = this.props.messages.map((message, i) =>
            <Message key={i} text={message.text} />
        );
        return <div>{children}</div>;
    }
}

MessageList.childContextTypes = {
    color: PropTypes.string
};

const message = [{
    text: "12"
}, {
    text: "abc"
}];
ReactDOM.render(
    <MessageList messages={message} />,
    document.getElementById('root')
);