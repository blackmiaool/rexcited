//import QueueAnim from 'rc-queue-anim';
//import React from 'react';
//import ReactDom from 'react-dom';
//
//
//
//class A extends React.Component {
//    constructor(props) {
//        super(props);
//    }
//    render() {
//        return (<div><QueueAnim><div key="1">enter in queue</div>
//    <div key="2">enter in queue</div>
//    <div key="3">enter in queue</div></QueueAnim></div>
//        );
//  
//
//    }
//}
//ReactDom.render(
//    <A></A>, document.querySelector("#root"));
import QueueAnim from 'rc-queue-anim';
import React from 'react';
import ReactDom from 'react-dom';
console.log(React)
ReactDom.render(<QueueAnim>
  <div key="1">enter in queue</div>
  <div key="2">enter in queue</div>
  <div key="3">enter in queue</div>
</QueueAnim>, document.querySelector("#root"));
//import React from 'react';
//import ReactDom from 'react-dom';
//
//class A extends React.Component {
//    constructor(props) {
//        super(props);
//        setTimeout(() => {
//            this.setState({
//                a: 1
//            })
//        });
//        this.state = {
//            a: 0
//        };
//        console.log("A", this);
//    }
//    render() {
//        return <B><div ref={(child)=>this.child=child}>outer child</div></B>;
//        if (this.state.a) {
//            return <div>
//                <div ref="b">inner child</div>
//            {this.props.children}
//            </div>
//        } else {
//            return <div>
//                <div ref="a">inner child</div>
//            {this.props.children}
//            </div>
//        }
//
//    }
//}
//class B extends React.Component {
//    constructor(props) {
//        super(props);
//        console.log("B", this);
//    }
//    render() {
//        return <div>{this.props.children}</div>
//    }
//}
//
//ReactDom.render(
//    <A></A>, document.querySelector("#root"));
