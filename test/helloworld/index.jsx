class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.state = {
            value: 3
        }
        this.onchange = this.onchange.bind(this);
    }
    onchange(e) {
        console.log(e.target.value);
        this.setState({
            value: e.target.value
        });
    }
    shouldComponentUpdate(nextProps, nextState) {
        if (nextState.value.length % 3 === 0) {
            return true;
        } else {
            return false;
        }
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.input.value);
        event.preventDefault();
    }

    render() {
        return (<form onSubmit={this.handleSubmit}>
      <label>
        Name:
        <input
          value={this.state.value}
          type="text"ref = {
    (input) => this.input = input
} onChange={this.onchange}/>
      </label>
      <input type="submit" value="Submit" />
    </form>);
    }
}

ReactDOM.render(
    <NameForm />,
    document.getElementById('root')
);
