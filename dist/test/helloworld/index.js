var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FancyBorder = function (_React$Component) {
    _inherits(FancyBorder, _React$Component);

    function FancyBorder(props) {
        _classCallCheck(this, FancyBorder);

        return _possibleConstructorReturn(this, (FancyBorder.__proto__ || Object.getPrototypeOf(FancyBorder)).call(this, props));
    }

    _createClass(FancyBorder, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                { className: 'FancyBorder FancyBorder-' + this.props.color },
                this.props.children
            );
        }
    }]);

    return FancyBorder;
}(React.Component);

function Dialog(props) {
    return React.createElement(
        FancyBorder,
        { color: "blue" },
        React.createElement(
            "h1",
            { className: "Dialog-title" },
            props.title
        ),
        React.createElement(
            "p",
            { className: "Dialog-message" },
            props.message
        ),
        props.children
    );
}

var SignUpDialog = function (_React$Component2) {
    _inherits(SignUpDialog, _React$Component2);

    function SignUpDialog(props) {
        _classCallCheck(this, SignUpDialog);

        var _this2 = _possibleConstructorReturn(this, (SignUpDialog.__proto__ || Object.getPrototypeOf(SignUpDialog)).call(this, props));

        _this2.handleChange = _this2.handleChange.bind(_this2);
        _this2.handleSignUp = _this2.handleSignUp.bind(_this2);
        _this2.state = {
            login: ''
        };
        return _this2;
    }

    _createClass(SignUpDialog, [{
        key: "render",
        value: function render() {
            return React.createElement(
                Dialog,
                { title: "Mars Exploration Program",
                    message: "How should we refer to you?" },
                React.createElement("input", { value: this.state.login,
                    onChange: this.handleChange }),
                React.createElement(
                    "button",
                    { onClick: this.handleSignUp },
                    "Sign Me Up!"
                )
            );
        }
    }, {
        key: "handleChange",
        value: function handleChange(e) {
            this.setState({
                login: e.target.value
            });
        }
    }, {
        key: "handleSignUp",
        value: function handleSignUp() {
            alert("Welcome aboard, " + this.state.login + "!");
        }
    }]);

    return SignUpDialog;
}(React.Component);
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


ReactDOM.render(React.createElement(SignUpDialog, null), document.getElementById('root'));