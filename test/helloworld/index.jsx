console.log(React)
class B extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor  B")
    }
    componentDidMount() {
        //        console.log("did");
    }
    render() {
        return <div>B</div>
    }
}
class A extends React.Component {
    constructor(props) {
        super(props);
        console.log("constructor  A")
    }
    render() {
        return <div>A</div>
    }
}

//console.log(B)
let i = 0;

function tick() {
    i++;
    const date = `It is ${new Date().toLocaleTimeString()}`;
    let element;
    if (i % 2) {
        element = <div>               
           {[1,2,3].map(function(number,i){
                    return ["a",'b','c'].map(function(v,j){
                        return <A key={i+j}/>        
                    });                
            })}
            <B key="2" b="1"/>
            <B key={1}/>
        </div>
    } else {
        element = <div> 
        <h1></h1>
        {[1,2,3].map(function(number,i){
                    return ["a",'b','c'].map(function(v,j){
                        return <A key={i+j}/>        
                    });                
            })}
          <h1>Hello, world!</h1>
          abc
           <B key="bbbbbbbbbbbbb" b="2"/>
            <B key="1"/>
        </div>
    }

    console.log(element.props.children)
    ReactDOM.render(
        element,
        document.getElementById('root')
    );
}

tick();
setTimeout(tick, 100);
