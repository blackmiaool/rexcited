function Clock(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Hello, world!'
    ),
    React.createElement(
      'h2',
      null,
      'It is ',
      props.date.toLocaleTimeString(),
      '.'
    )
  );
}

function tick() {
  ReactDOM.render(React.createElement(Clock, { date: new Date() }), document.getElementById('root'));
}

setInterval(tick, 1000);