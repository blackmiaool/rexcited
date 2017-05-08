var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function CustomTextInput(props) {
    return React.createElement(
        'div',
        null,
        React.createElement('input', { ref: props.inputRef })
    );
}

function Parent(props) {
    return React.createElement(
        'div',
        null,
        'My input: ',
        React.createElement(CustomTextInput, { inputRef: props.inputRef })
    );
}

var Grandparent = function (_React$Component) {
    _inherits(Grandparent, _React$Component);

    function Grandparent() {
        _classCallCheck(this, Grandparent);

        return _possibleConstructorReturn(this, (Grandparent.__proto__ || Object.getPrototypeOf(Grandparent)).apply(this, arguments));
    }

    _createClass(Grandparent, [{
        key: 'render',
        value: function render() {
            var _this2 = this;

            return React.createElement(Parent, {
                inputRef: function inputRef(el) {
                    return _this2.inputElement = el;
                }
            });
        }
    }]);

    return Grandparent;
}(React.Component);

ReactDOM.render(React.createElement(Grandparent, null), document.getElementById('root'));