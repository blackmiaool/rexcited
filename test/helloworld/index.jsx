class FancyBorder extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return <div className={'FancyBorder FancyBorder-' + this.props.color}>
      {this.props.children}
    </div>
    }
}

function Dialog(props) {
    return (
        <FancyBorder color="blue">
      <h1 className="Dialog-title">
        {props.title}
      </h1>
      <p className="Dialog-message">
        {props.message}
      </p>
      {props.children}
    </FancyBorder>
    );
}

class SignUpDialog extends React.Component {
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.handleSignUp = this.handleSignUp.bind(this);
            this.state = {
                login: ''
            };
        }

        render() {
            return (
                <Dialog title="Mars Exploration Program"
              message="How should we refer to you?">
        <input value={this.state.login}
               onChange={this.handleChange} />
        <button onClick={this.handleSignUp}>
          Sign Me Up!
        </button>
      </Dialog>
            );
        }

        handleChange(e) {
            this.setState({
                login: e.target.value
            });
        }

        handleSignUp() {
            alert(`Welcome aboard, ${this.state.login}!`);
        }
    }
    //
    //var i = 0;
    //class A extends React.Component {
    //    constructor(props) {
    //        super(props);
    //        this.handleChange = this.handleChange.bind(this);
    //        this.handleSignUp = this.handleSignUp.bind(this);
    //        this.state = {
    //            login: ''
    //        };
    //    }
    //
    //    render() {
    //        console.log(this);
    //        if (i < 3) {
    //            i++
    //            return <A/>
    //        } else {
    //            return <div/>;
    //        }
    //    }
    //
    //    handleChange(e) {
    //        this.setState({
    //            login: e.target.value
    //        });
    //    }
    //
    //    handleSignUp() {
    //        alert(`Welcome aboard, ${this.state.login}!`);
    //    }
    //}

//ReactDOM.render(
//    <A />,
//    document.getElementById('root')
//);
ReactDOM.render(
    <SignUpDialog />,
    document.getElementById('root')
);
