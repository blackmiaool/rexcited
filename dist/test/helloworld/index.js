var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

console.log(React);

var B = function (_React$Component) {
    _inherits(B, _React$Component);

    function B(props) {
        _classCallCheck(this, B);

        var _this = _possibleConstructorReturn(this, (B.__proto__ || Object.getPrototypeOf(B)).call(this, props));

        console.log("constructor  B");
        return _this;
    }

    _createClass(B, [{
        key: "componentDidMount",
        value: function componentDidMount() {
            //        console.log("did");
        }
    }, {
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                "B"
            );
        }
    }]);

    return B;
}(React.Component);

var A = function (_React$Component2) {
    _inherits(A, _React$Component2);

    function A(props) {
        _classCallCheck(this, A);

        var _this2 = _possibleConstructorReturn(this, (A.__proto__ || Object.getPrototypeOf(A)).call(this, props));

        console.log("constructor  A");
        return _this2;
    }

    _createClass(A, [{
        key: "render",
        value: function render() {
            return React.createElement(
                "div",
                null,
                "A"
            );
        }
    }]);

    return A;
}(React.Component);

//console.log(B)


var i = 0;

function tick() {
    i++;
    var date = "It is " + new Date().toLocaleTimeString();
    var element = void 0;
    if (i % 2) {
        element = React.createElement(
            "div",
            null,
            [1, 2, 3].map(function (number, i) {
                return ["a", 'b', 'c'].map(function (v, j) {
                    return React.createElement(A, { key: i + j });
                });
            }),
            React.createElement(B, { key: "2", b: "1" }),
            React.createElement(B, { key: 1 })
        );
    } else {
        element = React.createElement(
            "div",
            null,
            React.createElement("h1", null),
            [1, 2, 3].map(function (number, i) {
                return ["a", 'b', 'c'].map(function (v, j) {
                    return React.createElement(A, { key: i + j });
                });
            }),
            React.createElement(
                "h1",
                null,
                "Hello, world!"
            ),
            "abc",
            React.createElement(B, { key: "bbbbbbbbbbbbb", b: "2" }),
            React.createElement(B, { key: "1" })
        );
    }

    console.log(element.props.children);
    ReactDOM.render(element, document.getElementById('root'));
}

tick();
setTimeout(tick, 100);