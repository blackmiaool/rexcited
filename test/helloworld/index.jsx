console.log(React)
class B extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        return <div>B</div>
    }
}

console.log(B)

function tick() {
    const element = (
        <div>
            <B/>
            <h1>Hello, world!</h1>
      {[1,2,3].map(function(number){
                return <span>{number}</span>
            })}
            <h2>It is {new Date().toLocaleTimeString()}.</h2>
        </div>
    );
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}
tick();
setInterval(tick, 1000);