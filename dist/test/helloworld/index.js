//console.log(React)
//class B extends React.Component {
//    constructor(props) {
//        super(props);
//        console.log("constructor  B")
//        this.state = {
//            a: 1
//        };
//    }
//    componentDidMount() {
//        //        console.log("did");
//    }
//    log(a) {
//        console.log(a)
//    }
//    render() {
//        return <div>B</div>
//    }
//}
//class A extends React.Component {
//    constructor(props) {
//        super(props);
//        console.log("constructor  A")
//    }
//    render() {
//        return <div><span>A</span></div>
//    }
//}
//
////console.log(B)
//let i = 0;
//
//function tick() {
//    i++;
//    const date = `It is ${new Date().toLocaleTimeString()}`;
//    let element;
//    if (i % 2) {
//        element = <div>               
//           {[1,2,3].map(function(number,i){
//                    return ["a",'b','c'].map(function(v,j){
//                        return <A key={i+j}/>        
//                    });                
//            })}
//            <B key="2" b="1"/>
//            <B key={1}/>
//        </div>
//    } else {
//        element = <div> 
//        <h1></h1>
//        {[1,2,3].map(function(number,i){
//                    return ["a",'b','c'].map(function(v,j){
//                        return <A key={i+j}/>        
//                    });                
//            })}
//          <h1>Hello, world!</h1>
//          abc
//           <B key="bbbbbbbbbbbbb" b="2"/>
//            <B key="1"/>
//        </div>
//    }
//
//    console.log(element.props.children)
//    ReactDOM.render(
//        element,
//        document.getElementById('root')
//    );
//}
//
//tick();
//setTimeout(tick, 100);


function tick() {
    var element = React.createElement(
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
            new Date().toLocaleTimeString(),
            '.'
        )
    );
    ReactDOM.render(element, document.getElementById('root'));
}
tick();
setInterval(tick, 1000);