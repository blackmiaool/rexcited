class Toggle extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            isToggleOn: true
        };

        // This binding is necessary to make `this` work in the callback
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            isToggleOn: !prevState.isToggleOn
        }));
    }

    render() {
        return (
            <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
        );
    }
}

ReactDOM.render(
    <Toggle />,
    document.getElementById('root')
);

//function tick() {
//    const element = (
//        <div>
//      <h1>Hello, world!</h1>
//      <h2>It is {new Date().toLocaleTimeString()}.</h2>
//    </div>
//    );
//    ReactDOM.render(
//        element,
//        document.getElementById('root')
//    );
//}
//
//setInterval(tick, 1000);
