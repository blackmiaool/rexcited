//import React from '../../src/react.js'
//import ReactDOM from '../../src/react-dom.js';
ReactDOM.render(React.createElement(
    "h1",
    { a: "b" },
    React.createElement(
        "h3",
        null,
        "Hello, world!"
    ),
    React.createElement(
        "h3",
        null,
        "2"
    )
), document.getElementById('root'));