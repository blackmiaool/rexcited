class Button extends React.Component {
    render() {
        return (
            <button style={{background: this.props.color}}>
        {this.props.children}
      </button>
        );
    }
}

class Message extends React.Component {
    render() {
        return (
            <div>
        {this.props.text} <Button color={this.props.color}>Delete</Button>
      </div>
        );
    }
}

class MessageList extends React.Component {
    render() {
        const color = "purple";
        const children = this.props.messages.map((message, i) =>
            <Message text={message.text} color={color}  key={i}/>
        );
        return <div>{children}</div>;
    }
}
const messages = [{
    text: 'a'
}, {
    text: 'b'
}, {
    text: 'c'
}, ];

ReactDOM.render(
    <MessageList messages={messages}/>,
    document.getElementById('root')
);
